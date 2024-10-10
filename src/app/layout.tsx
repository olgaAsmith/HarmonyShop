import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import { Nova_Mono } from 'next/font/google';
import { ApolloWrapper } from '../../apollo-client';
import ProfileLoader from '@/components/ProfileLoader';
import Footer from '@/components/footer/Footer';
import Modal from '@/components/modal/Modal';

export const metadata: Metadata = {
  title: 'Harmony',
  description: 'Harmony',
};

const nova = Nova_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`container w-full mx-auto ${nova.className} scrollbar`}>
        <ApolloWrapper>
          <ProfileLoader></ProfileLoader>
          <Header></Header>

          <main>
            {children} <Modal></Modal>
          </main>

          <Footer></Footer>
        </ApolloWrapper>
      </body>
    </html>
  );
}
