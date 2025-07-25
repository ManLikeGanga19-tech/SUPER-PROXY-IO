'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { motion, AnimatePresence } from 'framer-motion';
import {
    proxyTypes,
    locations,
    datacenterPricing,
    navItems,
} from '@/components/site-header';
import { ChevronDownIcon, CheckIcon, ClockIcon } from 'lucide-react';

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState<string | null>(null);
    const pathname = usePathname();

    const toggleSection = (name: string) => {
        setExpanded((prev) => (prev === name ? null : name));
    };

    return (
        <div className="lg:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(!open)}
                className="relative z-[9999]"
            >
                {open ? <Icons.close className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
            </Button>

            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9990]"
                            onClick={() => setOpen(false)}
                        />

                        {/* Navigation panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 z-[9995] h-dvh w-[300px] bg-background border-l shadow-xl overflow-hidden"
                        >
                            <div className="h-full flex flex-col">
                                {/* Header */}
                                <div className="px-4 py-4 border-b bg-background">
                                    <div className="flex items-center space-x-2">
                                        <div className="bg-primary w-6 h-6 rounded-lg flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">SP</span>
                                        </div>
                                        <span className="font-bold text-lg">SuperProxy</span>
                                    </div>
                                </div>

                                {/* Navigation content */}
                                <div className="flex-1 overflow-y-auto">
                                    <nav className="px-4 py-4 space-y-2">
                                        {navItems.map((item) => (
                                            <div key={item.name}>
                                                {item.hasDropdown ? (
                                                    <>
                                                        <button
                                                            onClick={() => toggleSection(item.name)}
                                                            className={cn(
                                                                'w-full text-left flex justify-between items-center py-3 px-3 rounded-lg text-base font-medium transition-colors',
                                                                expanded === item.name
                                                                    ? 'text-primary bg-primary/10'
                                                                    : 'text-foreground hover:text-primary hover:bg-accent'
                                                            )}
                                                        >
                                                            {item.name}
                                                            <ChevronDownIcon
                                                                className={cn('h-4 w-4 transition-transform', {
                                                                    'rotate-180': expanded === item.name,
                                                                })}
                                                            />
                                                        </button>

                                                        <AnimatePresence>
                                                            {expanded === item.name && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: 'auto' }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    className="ml-3 space-y-2 border-l border-border pl-3 mt-2"
                                                                >
                                                                    {item.name === 'Proxies' &&
                                                                        proxyTypes.map((proxy, i) => (
                                                                            <Link
                                                                                key={i}
                                                                                href={proxy.href}
                                                                                className="block py-2 px-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                                                                                onClick={() => setOpen(false)}
                                                                            >
                                                                                <div className="font-medium text-sm">{proxy.name}</div>
                                                                                <p className="text-xs mt-1 text-muted-foreground">
                                                                                    {proxy.description}
                                                                                </p>
                                                                            </Link>
                                                                        ))}

                                                                    {item.name === 'Pricing' &&
                                                                        datacenterPricing.map((plan, i) => (
                                                                            <div
                                                                                key={i}
                                                                                className={`py-3 px-3 rounded-lg border ${plan.popular
                                                                                    ? 'border-primary bg-primary/5'
                                                                                    : 'border-border'
                                                                                    }`}
                                                                            >
                                                                                <div className="flex justify-between items-start mb-1">
                                                                                    <span className="font-medium text-sm">
                                                                                        {plan.name}
                                                                                    </span>
                                                                                    {plan.popular && (
                                                                                        <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-medium">
                                                                                            Popular
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                                <div className="text-lg font-bold text-primary mb-1">
                                                                                    {plan.price}
                                                                                </div>
                                                                                <p className="text-xs text-muted-foreground mb-2">
                                                                                    {plan.description}
                                                                                </p>
                                                                                <ul className="text-xs space-y-1">
                                                                                    {plan.features.slice(0, 2).map((f, j) => (
                                                                                        <li key={j} className="flex items-start">
                                                                                            <CheckIcon className="h-3 w-3 mr-1.5 mt-0.5 text-primary flex-shrink-0" />
                                                                                            <span>{f}</span>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ))}

                                                                    {item.name === 'Locations' && (
                                                                        <>
                                                                            {locations.map((loc, i) => (
                                                                                <Link
                                                                                    key={i}
                                                                                    href={`#location-${loc.name.toLowerCase()}`}
                                                                                    className="flex items-center gap-3 py-2 px-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                                                                                    onClick={() => setOpen(false)}
                                                                                >
                                                                                    <span className="text-lg">{loc.flag}</span>
                                                                                    <div>
                                                                                        <div className="font-medium text-sm">{loc.name}</div>
                                                                                        <p className="text-xs text-muted-foreground">Available</p>
                                                                                    </div>
                                                                                </Link>
                                                                            ))}
                                                                            <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 rounded-lg p-3 mt-2">
                                                                                <div className="flex items-start gap-2">
                                                                                    <ClockIcon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                                                                    <div>
                                                                                        <div className="font-medium text-xs mb-1">More locations coming soon!</div>
                                                                                        <p className="text-xs">Expanding across Africa in 2025.</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        className={cn(
                                                            'block py-3 px-3 rounded-lg text-base font-medium transition-colors',
                                                            pathname === item.href
                                                                ? 'text-primary bg-primary/10'
                                                                : 'text-foreground hover:text-primary hover:bg-accent'
                                                        )}
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </nav>
                                </div>

                                {/* Footer buttons */}
                                <div className="px-4 py-4 border-t bg-background">
                                    <div className="space-y-3">
                                        <Button asChild className="w-full">
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
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
