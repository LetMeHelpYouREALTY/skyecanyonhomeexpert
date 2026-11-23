import { homeFaqs } from '@/lib/home-faqs'
import { AGENT, SITE_URL } from '@/lib/site'

export default function HomeJsonLd() {
  const graph = [
    {
      '@type': 'RealEstateAgent',
      '@id': `${SITE_URL}/#agent`,
      name: AGENT.name,
      jobTitle: AGENT.jobTitle,
      identifier: AGENT.license,
      telephone: AGENT.phone,
      url: SITE_URL,
      worksFor: {
        '@type': 'Organization',
        name: AGENT.brokerage,
      },
      areaServed: AGENT.areaServed.map((name) => ({
        '@type': 'Place',
        name,
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Skye Canyon Home Expert',
      description:
        'Homeowner resource hub for Skye Canyon, Las Vegas—guides, community living, and resident resources.',
      publisher: { '@id': `${SITE_URL}/#agent` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: homeFaqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
