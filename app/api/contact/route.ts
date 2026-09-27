import { NextRequest, NextResponse } from 'next/server'
import { parseContactLeadBody, sendFollowUpBossEvent } from '@/lib/fub'

export async function POST(request: NextRequest) {
  let body: unknown = {}
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = parseContactLeadBody(body)
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const referer = request.headers.get('referer')
  const lead = {
    ...parsed.data,
    sourceUrl: parsed.data.sourceUrl || referer || undefined,
  }

  const result = await sendFollowUpBossEvent(lead)

  if (!result.ok && result.reason === 'missing_key') {
    console.error(
      'FOLLOW_UP_BOSS_API_KEY is not configured; cannot submit lead to Follow Up Boss.'
    )
    return NextResponse.json(
      { error: 'Lead capture is temporarily unavailable' },
      { status: 503 }
    )
  }

  if (!result.ok) {
    if (result.status !== undefined) {
      console.error(`Follow Up Boss API returned status ${result.status}`)
    } else {
      console.error('Follow Up Boss API request failed')
    }
    return NextResponse.json(
      { error: 'Failed to submit to CRM' },
      { status: 502 }
    )
  }

  return NextResponse.json({ success: true })
}
