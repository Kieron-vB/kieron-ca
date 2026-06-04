import type { Metadata } from 'next';
import './globals.css';
import { Tiro_Devanagari_Sanskrit, Figtree, Caveat } from "next/font/google";
import LoadingScreen from '../components/LoadingScreen';

const main_font = Tiro_Devanagari_Sanskrit({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-main-font",
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
  description: 'kieron.ca personal website',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🚀%3C/text%3E%3C/svg%3E",
    shortcut: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🚀%3C/text%3E%3C/svg%3E",
    apple: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🚀%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${main_font.variable} ${figtree.variable} ${caveat.variable}`}>
  <body className="bg-background">
      <LoadingScreen>
        <main>{children}</main>
      </LoadingScreen>
  </body>
    </html>
  );
}
