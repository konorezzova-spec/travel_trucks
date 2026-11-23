import type { Metadata } from 'next';
import { inter, manrope } from './fonts';
import './globals.css';
import Header from '@/components/Header/Header';

const SITE_URL = process.env.SITE_URL;
if (!SITE_URL) {
  throw new Error('SITE_URL is not defined in the environment variables');
}

export const metadata: Metadata = {
  title: 'Travel Trucks',
  description: 'Campers of your dreams. You can find everything you want in our catalog',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Travel Trucks',
    description: 'Campers of your dreams. You can find everything you want in our catalog',
    url: SITE_URL,
    images: [
      {
        url: '/public/Meta_img.jpg',
        alt: 'Campers of your dreams',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        {modal}
      </body>
    </html>
  );
}
