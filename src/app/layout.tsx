import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from './_components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';
import SidebarMenu from './_components/sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Beleza Fácil',
  description:
    'Encontre os melhores salões de beleza perto de você e agende seus serviços com facilidade.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <main>{children}</main>
          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  );
}
