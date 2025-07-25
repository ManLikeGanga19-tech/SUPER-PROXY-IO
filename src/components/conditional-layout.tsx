// components/conditional-layout.tsx
'use client';
import { usePathname } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

interface ConditionalLayoutProps {
    children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
    const pathname = usePathname();

    // Check if current route is an auth route
    const isAuthRoute = pathname?.startsWith('/login') ||
        pathname?.startsWith('/register') ||
        pathname?.startsWith('/auth') ||
        pathname?.startsWith('/signin') ||
        pathname?.startsWith('/sign-up');

    if (isAuthRoute) {
        return (
            <div className="relative flex min-h-screen flex-col">
                <main className="flex-1">
                    {children}
                </main>
            </div>
        );
    }

    return (
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
    );
}