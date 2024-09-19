import { Header } from '@/components/ui/Header/Header';
import { CurrencyProvider, ReactQueryProvider } from '@/providers';
import { LayoutProps } from '@/shared/types/globals';
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
}: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div id="root">
          <ReactQueryProvider>
            <CurrencyProvider>
              <Header />
              <main id="main">{children}</main>
            </CurrencyProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
