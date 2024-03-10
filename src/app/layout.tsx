import '@/styles/globals.css';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { cn } from '@/lib/TailwindMerge';

import { Providers } from './Providers';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <head>
        <title>Quasar - Filmes e Séries</title>
        <meta
          name="description"
          content="O destino essencial para descobrir e desfrutar de filmes e séries. Explore nossa vasta biblioteca e mergulhe em novas aventuras cinematográficas."
        />
      </head>
      <body className={cn('bg-background text-foreground antialiased')}>
        <Providers attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
