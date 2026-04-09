import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container/Container';

export const metadata: Metadata = {
  title: 'Valeria Danilo - Frontend Developer',
  description:
    'Portfolio of Valeria Danilo, a frontend developer skilled in React, Next.js, JavaScript and modern web development.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} page`}>
        <Container>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
