import '@/styles/globals.css';
import { ContextProvider } from '@/contexts/context-provider';

import { cn } from '@/lib/utils';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={cn('bg-background text-foreground antialiased')}>
        <ContextProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="w-full absolute">
            <nav>
              <ul>
                <li>Home</li>
              </ul>
            </nav>
          </header>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
