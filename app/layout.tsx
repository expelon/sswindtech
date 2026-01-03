import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsAppButton from '@/components/about/WhatsAppButton';
import { ChatbotWidget } from '@/components/chatbot-widget';
import Providers from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sswindtech.com'),
  title: 'SS Wind Tech | Wind Energy & Windmill Solutions',
  description:
    'SS Wind Tech is a renewable energy company specializing in windmill and wind energy solutions. We deliver sustainable, efficient, and future-ready wind power technologies.',
  keywords: [
    'SS Wind Tech',
    'windmill company',
    'wind energy solutions',
    'renewable energy',
    'wind power',
    'green energy',
    'clean energy',
    'wind turbine',
  ],
  authors: [{ name: 'SS Wind Tech' }],
  creator: 'SS Wind Tech',
  publisher: 'SS Wind Tech',
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
    title: 'SS Wind Tech | Wind Energy & Windmill Solutions',
    description:
      'SS Wind Tech provides innovative wind energy and windmill solutions for a sustainable future.',
    url: 'https://sswindtech.com',
    siteName: 'SS Wind Tech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SS Wind Tech - Wind Energy Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SS Wind Tech | Wind Energy & Windmill Solutions',
    description: 'Renewable wind energy and windmill solutions by SS Wind Tech.',
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
        <Providers>
          {children}
          <WhatsAppButton />
          <ChatbotWidget />
        </Providers>
      </body>
    </html>
  );
}
