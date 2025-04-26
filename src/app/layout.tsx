import type { Metadata } from 'next';
import './globals.css';
import { Scheherazade_New, Figtree, Caveat } from "next/font/google";
import LoadingScreen from '../components/LoadingScreen';

const scheherazadeNew = Scheherazade_New({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-scheherazade-new",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-figtree",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: 'kieron.ca',
  description: "Kieron von Buchstab's personal website",
  icons: {
    icon: '/images/Logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${scheherazadeNew.variable} ${figtree.variable} ${caveat.variable}`}>
  <body className="bg-background">
      <LoadingScreen>
        <main>{children}</main>
      </LoadingScreen>
  </body>
    </html>
  );
}
