export const FUB_SITE = 'skyecanyonhomeexpert.com'

export type FubInquiryType =
  | 'General Inquiry'
  | 'Seller Inquiry'
  | 'Property Inquiry'
  | 'Registration'

export type ContactLeadInput = {
  firstName: string
  lastName: string
  email?: string
  phone?: string
  message: string
  formName: string
  sourceUrl?: string
  inquiryType: FubInquiryType
}

function trimString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export function parseContactLeadBody(
  body: unknown
): { ok: true; data: ContactLeadInput } | { ok: false; error: string } {
  if (body === null || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'Invalid request body' }
  }

  const record = body as Record<string, unknown>
  const firstName = trimString(record.firstName)
  const lastName = trimString(record.lastName)
  const email = trimString(record.email)
  const phone = trimString(record.phone)

  if (!firstName || !lastName) {
    return { ok: false, error: 'First name and last name are required' }
  }

  if (!email && !phone) {
    return { ok: false, error: 'Email or phone is required' }
  }

  const inquiryTypeRaw = trimString(record.inquiryType)
  const inquiryTypes: FubInquiryType[] = [
    'General Inquiry',
    'Seller Inquiry',
    'Property Inquiry',
    'Registration',
  ]
  const inquiryType = inquiryTypes.includes(inquiryTypeRaw as FubInquiryType)
    ? (inquiryTypeRaw as FubInquiryType)
    : 'General Inquiry'

  const formName = trimString(record.formName) || 'Website Contact'
  const message = trimString(record.message)
  const sourceUrl = trimString(record.sourceUrl)

  return {
    ok: true,
    data: {
      firstName,
      lastName,
      email: email || undefined,
      phone: phone || undefined,
      message,
      formName,
      sourceUrl: sourceUrl || undefined,
      inquiryType,
    },
  }
}

export function buildFollowUpBossEventBody(lead: ContactLeadInput) {
  const person: {
    firstName: string
    lastName: string
    emails?: { value: string }[]
    phones?: { value: string }[]
    tags: string[]
  } = {
    firstName: lead.firstName,
    lastName: lead.lastName,
    tags: [FUB_SITE, lead.formName],
  }

  if (lead.email) {
    person.emails = [{ value: lead.email }]
  }
  if (lead.phone) {
    person.phones = [{ value: lead.phone }]
  }

  return {
    source: FUB_SITE,
    system: FUB_SITE,
    type: lead.inquiryType,
    message: lead.message,
    description: `${lead.formName} — ${FUB_SITE}`,
    sourceUrl: lead.sourceUrl,
    person,
  }
}

export type FollowUpBossSendResult =
  | { ok: true }
  | { ok: false; reason: 'missing_key' | 'fub_error' | 'network'; status?: number }

export async function sendFollowUpBossEvent(
  lead: ContactLeadInput,
  options?: { fetchImpl?: typeof fetch; apiKey?: string }
): Promise<FollowUpBossSendResult> {
  const apiKey = options?.apiKey ?? process.env.FOLLOW_UP_BOSS_API_KEY
  if (!apiKey) {
    return { ok: false, reason: 'missing_key' }
  }

  const fetchImpl = options?.fetchImpl ?? fetch
  const auth = Buffer.from(`${apiKey}:`).toString('base64')

  try {
    const response = await fetchImpl('https://api.followupboss.com/v1/events', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
        'X-System': FUB_SITE,
      },
      body: JSON.stringify(buildFollowUpBossEventBody(lead)),
    })

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return { ok: true }
    }

    return { ok: false, reason: 'fub_error', status: response.status }
  } catch {
    return { ok: false, reason: 'network' }
  }
}
