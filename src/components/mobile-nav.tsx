// components/mobile-nav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { navItems } from '@/components/site-header';
import { motion } from 'framer-motion';

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="lg:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(!open)}
                className="relative z-50"
            >
                {open ? <Icons.close className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
            </Button>

            {open && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    className="fixed top-0 right-0 z-40 h-full w-[85vw] max-w-sm bg-background shadow-lg border-l"
                >
                    <div className="h-full pt-16 pb-8 flex flex-col">
                        <nav className="flex-1 px-4 overflow-y-auto">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "block py-4 px-4 text-lg font-medium transition-colors hover:text-primary",
                                        pathname === item.href
                                            ? "text-primary"
                                            : "text-foreground"
                                    )}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="px-4 pt-4 border-t">
                            <Button asChild className="w-full mb-3">
                                <Link href="/register" onClick={() => setOpen(false)}>
                                    Get Started
                                </Link>
                            </Button>
                            <Button variant="outline" asChild className="w-full">
                                <Link href="/login" onClick={() => setOpen(false)}>
                                    Sign in
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}