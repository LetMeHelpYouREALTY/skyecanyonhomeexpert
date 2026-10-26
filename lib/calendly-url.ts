/** Buyer consultation event (used across LetMeHelpYouREALTY sites). */
export const CALENDLY_BUYER_CONSULTATION =
  'https://calendly.com/drjanduffy/buyer-consultation-30-min'

const SITE_UTM_SOURCE = 'skyecanyonhomeexpert.com'

/** Calendly URL with standard UTM tags for this site. */
export function buyerConsultationCalendlyUrl(utmContent: string): string {
  const url = new URL(CALENDLY_BUYER_CONSULTATION)
  url.searchParams.set('hide_gdpr_banner', '1')
  url.searchParams.set('utm_source', SITE_UTM_SOURCE)
  url.searchParams.set('utm_medium', 'website')
  url.searchParams.set('utm_content', utmContent)
  return url.toString()
}
