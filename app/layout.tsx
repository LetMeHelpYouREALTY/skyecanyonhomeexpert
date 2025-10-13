import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skye Canyon Living - Homeowner Resource Hub | Nevada Community Guide',
  description: 'Your complete guide to living in Skye Canyon Nevada. HOA rules, community events, local contractors, restaurants, and resident resources for Skye Canyon homeowners.',
  keywords: 'living in Skye Canyon Nevada, Skye Canyon HOA rules explained, best contractors Skye Canyon, things to do near Skye Canyon, Skye Canyon community events calendar',
  openGraph: {
    title: 'Skye Canyon Living - Homeowner Resource Hub',
    description: 'Your complete guide to living in Skye Canyon Nevada',
    type: 'website',
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
      </body>
    </html>
  )
}
