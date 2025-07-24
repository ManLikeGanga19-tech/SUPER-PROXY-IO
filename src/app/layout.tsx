// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SuperProxyHub | Premium Proxy Marketplace',
  description: 'Buy and sell high-quality proxies for all your needs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="w-full">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <SiteHeader />
              </div>
            </header>
            <main className="flex-1">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <footer className="w-full">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <SiteFooter />
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
