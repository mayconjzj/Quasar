import '@/styles/globals.css';

import { Providers } from '@/contexts';

import { Header } from '@/components/Header';

import { cn } from '@/lib/TailwindMerge/TailwindMerge';

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
        </Providers>
      </body>
    </html>
  );
}
