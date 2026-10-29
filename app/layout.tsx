import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Skye Canyon Home Expert | Las Vegas Living',
    template: '%s | Skye Canyon Home Expert',
  },
  description:
    'Skye Canyon homeowner hub: HOA guides, community life, and resident resources for northwest Las Vegas. Dr. Jan Duffy, REALTOR — 702-222-1964.',
  keywords:
    'living in Skye Canyon Nevada, Skye Canyon HOA rules explained, best contractors Skye Canyon, things to do near Skye Canyon, Skye Canyon community events calendar',
  openGraph: {
    title: 'Skye Canyon Home Expert | Las Vegas Living',
    description:
      'Homeowner guides, community living tips, and resident resources for Skye Canyon in northwest Las Vegas.',
    type: 'website',
    siteName: 'Skye Canyon Home Expert',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skye Canyon Home Expert | Las Vegas Living',
    description:
      'Homeowner guides and resident resources for Skye Canyon, northwest Las Vegas.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MVQXN4YPS9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MVQXN4YPS9');
          `}
        </Script>

        <Navigation />
        <main>{children}</main>
        <Footer />
      
        {/* Follow Up Boss pixel (Widget Tracker) */}
        <Script id="fub-widget-tracker" strategy="afterInteractive">{`
if(location.hostname.slice(-11)!==".vercel.app"&&location.hostname!=="localhost"){(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
{(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
e.parentNode.insertBefore(t,e);})
(window,"https://widgetbe.com/agent",document,"widgetTracker");
window.widgetTracker("create", "WT-XQHVYQWW");
window.widgetTracker("send", "pageview");}
        `}</Script>
</body>
    </html>
  )
}
