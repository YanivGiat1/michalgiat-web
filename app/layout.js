import './globals.css';
import { Heebo, Frank_Ruhl_Libre } from 'next/font/google';

const display = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  weight: ['500', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://michalgiat.co.il'),
  title: 'מיכל גיאת',
  description: 'האתר של מיכל גיאת',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
