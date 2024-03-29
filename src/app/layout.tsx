import '@/styles/globals.css';

import type { Metadata } from 'next';

import { Providers } from '@/context/Providers';
import { Analytics } from '@vercel/analytics/react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { cn } from '@/lib/TailwindMerge';

export const metadata: Metadata = {
  title: {
    default: 'Quasar - Filmes e Séries',
    template: '%s | Quasar',
    absolute: 'Quasar - Filmes e Séries'
  },
  description:
    'O destino essencial para descobrir e desfrutar de filmes e séries. Explore nossa vasta biblioteca e mergulhe em novas aventuras cinematicas.',
  keywords: [
    'Filmes',
    'Séries',
    'Cinema',
    'Quasar',
    'QuasarFilmes',
    'QuasarSéries',
    'QuasarCinema',
    'Season',
    'Movie',
    'Stream',
    'Streaming',
    'Streaming Movies',
    'Streaming Series',
    'Streaming Film',
    'Trailer'
  ],
  openGraph: {
    title: 'Quasar - Filmes e Séries',
    description:
      'O destino essencial para descobrir e desfrutar de filmes e séries. Explore nossa vasta biblioteca e mergulhe em novas aventuras cinematicas.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quasar - Filmes e Séries',
    description:
      'O destino essencial para descobrir e desfrutar de filmes e séries. Explore nossa vasta biblioteca e mergulhe em novas aventuras cinematicas.'
  },
  authors: [{ name: 'Maycon Douglas', url: 'https://github.com/mayconjzj' }],
  category: 'Filmes e Séries',
  verification: {
    google: 'TxSfWovss5wRRrEt5OcWFHccbCtavJrUE9BnnYbOPzw'
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={cn('bg-background text-foreground antialiased')}>
        <Providers attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
