import { AGENT, SITE_URL } from '@/lib/site'

const homeFaqs = [
  {
    question: 'What is Skye Canyon?',
    answer:
      'Skye Canyon is a master-planned community in northwest Las Vegas, Nevada, known for parks, trails, and resident amenities. This site is a homeowner resource hub for living in the area—not the official HOA website.',
  },
  {
    question: 'How can a real estate agent help if I am buying in Skye Canyon?',
    answer:
      'A local agent can explain neighborhoods within Skye Canyon, coordinate showings, and help you review disclosures, HOA documents, and resale requirements before you close. For buyer representation in Skye Canyon, contact Dr. Jan Duffy at 702-222-1964.',
  },
  {
    question: 'What should new homeowners review after moving into Skye Canyon?',
    answer:
      'Review your HOA covenants and architectural guidelines, set up utilities and mail, locate trash and recycling rules for your address, and explore community amenities and local services. Use the guides on this site as a starting point and confirm details with your HOA management.',
  },
  {
    question: 'Who maintains this Skye Canyon homeowner website?',
    answer:
      'Skye Canyon Home Expert is an educational resource for residents and buyers, curated by Dr. Jan Duffy, REALTOR (Nevada license S.0197614.LLC), specializing in Las Vegas communities including Skye Canyon.',
  },
]

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
