import { ReactQueryProvider } from '@/components/providers';
import { Header } from '@/components/ui';
import { Children } from '@/shared/types/globals';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Currency Converter',
  description:
    'Instantly convert between global currencies with real-time rates using our fast, accurate, and user-friendly web application.',
};

export default function RootLayout({
  children,
}: Readonly<Children>): React.JSX.Element {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div id="root">
          <ReactQueryProvider>
            <Header />
            <main id="main">{children}</main>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
