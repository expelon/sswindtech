import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsAppButton from '@/components/about/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sswindtech.com'),
  title: 'sswindTech | Wind Energy & Windmill Solutions',
  description:
    'sswindTech is a renewable energy company specializing in windmill and wind energy solutions. We deliver sustainable, efficient, and future-ready wind power technologies.',
  keywords: [
    'sswindTech',
    'windmill company',
    'wind energy solutions',
    'renewable energy',
    'wind power',
    'green energy',
    'clean energy',
    'wind turbine',
  ],
  authors: [{ name: 'sswindTech' }],
  creator: 'sswindTech',
  publisher: 'sswindTech',
  icons: {
    icon: '/logo1.png',
    shortcut: '/logo1.png',
    apple: '/logo1.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'sswindTech | Wind Energy & Windmill Solutions',
    description:
      'sswindTech provides innovative wind energy and windmill solutions for a sustainable future.',
    url: 'https://sswindtech.com',
    siteName: 'sswindTech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'sswindTech - Wind Energy Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sswindTech | Wind Energy & Windmill Solutions',
    description: 'Renewable wind energy and windmill solutions by sswindTech.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
