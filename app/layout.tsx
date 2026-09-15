import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { profile } from './content';
const sans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const site = 'https://portfolio-auw.pages.dev';
const description =
  'Engineering student at Politecnico di Milano. A personal portfolio growing alongside my studies.';
export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: `${profile.name} — ${profile.role}`,
  description,
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: `${profile.name}, engineering student at Politecnico di Milano`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description,
    images: ['/og.jpg'],
  },
};
export const viewport: Viewport = {
  themeColor: '#0c0c0c',
};
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  description: profile.introduction,
  jobTitle: 'Engineering student',
  url: site,
  image: `${site}/og.jpg`,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Politecnico di Milano',
  },
  sameAs: [profile.github, profile.linkedin].filter(Boolean),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${sans.variable} ${mono.variable}`}>
        <link
          rel="preload"
          as="image"
          href="/images/amber.webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
        {children}
      </body>
    </html>
  );
}
