// components/mobile-nav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { navItems } from '@/components/site-header';

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(!open)}
            >
                {open ? <Icons.close className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
            </Button>

            {open && (
                <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur">
                    <div className="container py-6">
                        <nav className="grid gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-primary py-2 px-4 rounded-lg",
                                        pathname === item.href
                                            ? "bg-primary/10 text-primary"
                                            : "text-foreground"
                                    )}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 pt-4 border-t">
                                <Button asChild>
                                    <Link href="/register">Get Started</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/login">Sign in</Link>
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}