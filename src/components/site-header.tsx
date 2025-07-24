// components/site-header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileNav } from '@/components/mobile-nav';

export const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
];

export function SiteHeader() {
    const pathname = usePathname();

    return (
        <motion.header
            className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center space-x-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">SP</span>
                        </div>
                        <span className="font-bold text-xl">SuperProxy</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary relative",
                                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                        layoutId="underline"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-2">
                        <Button variant="ghost" asChild>
                            <Link href="/login">Sign in</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                    <ModeToggle />
                    <MobileNav />
                </div>
            </div>
        </motion.header>
    );
}