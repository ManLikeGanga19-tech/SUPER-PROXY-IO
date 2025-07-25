// components/site-header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileNav } from '@/components/mobile-nav';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
    ChevronDownIcon,
    CheckIcon,
    HomeIcon,
    ServerIcon,
    BuildingIcon,
    WifiIcon,
    SmartphoneIcon,
    ClockIcon,
} from 'lucide-react';

// Navigation data arrays (unchanged)...
// [navItems, proxyTypes, locations, datacenterPricing]

export const navItems = [
    { name: 'Proxies', href: '#proxies', hasDropdown: true },
    { name: 'Pricing', href: '#pricing', hasDropdown: true },
    { name: 'Locations', href: '#locations', hasDropdown: true },
];

export const proxyTypes = [
    {
        name: 'Residential Proxies',
        description: 'Real IP addresses from home users worldwide',
        icon: HomeIcon,
        href: '#residential',
    },
    {
        name: 'Datacenter Proxies',
        description: 'High-speed proxies from data centers',
        icon: ServerIcon,
        href: '#datacenter',
    },
    {
        name: 'Enterprise Proxies',
        description: 'Dedicated solutions for large-scale operations',
        icon: BuildingIcon,
        href: '#enterprise',
    },
    {
        name: 'ISP Proxies',
        description: 'Internet Service Provider residential IPs',
        icon: WifiIcon,
        href: '#isp',
    },
    {
        name: 'Mobile Proxies',
        description: 'IPs from mobile devices and carriers',
        icon: SmartphoneIcon,
        href: '#mobile',
    },
];

export const locations = [
    { name: 'Kenya', flag: '🇰🇪', available: true },
    { name: 'Nigeria', flag: '🇳🇬', available: true },
    { name: 'South Africa', flag: '🇿🇦', available: true },
    { name: 'Tanzania', flag: '🇹🇿', available: true },
];

export const datacenterPricing = [
    {
        name: 'Starter',
        description: 'For individuals and small projects',
        price: '$0.45',
        per: 'per proxy',
        features: ['1,000+ IPs available', '10 locations', 'Basic support', '99.5% uptime'],
        popular: false,
    },
    {
        name: 'Professional',
        description: 'For growing businesses',
        price: '$0.35',
        per: 'per proxy',
        features: ['10,000+ IPs available', '50+ locations', 'Priority support', '99.8% uptime', 'API access'],
        popular: true,
    },
    {
        name: 'Enterprise',
        description: 'For large-scale operations',
        price: 'Custom',
        per: 'volume pricing',
        features: ['100,000+ IPs available', '150+ locations', '24/7 dedicated support', '99.9% uptime', 'Advanced API', 'Custom locations'],
        popular: false,
    },
];

export function SiteHeader() {
    const pathname = usePathname();

    return (
        <motion.header
            className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex h-14 sm:h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 min-w-0 flex-shrink-0">
                    <div className="bg-primary w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white dark:text-black font-bold text-xs sm:text-sm">SP</span>
                    </div>
                    <span className="font-bold text-lg sm:text-xl truncate">SuperProxy</span>
                </Link>

                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="space-x-1">
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.name} className="relative">
                                {item.hasDropdown ? (
                                    <>
                                        <NavigationMenuTrigger
                                            className={cn(
                                                'bg-transparent px-3 py-2 hover:bg-accent/50 border-none shadow-none',
                                                'text-foreground hover:text-primary data-[state=open]:text-primary'
                                            )}
                                        >
                                            <div className="flex items-center">{item.name}</div>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            {item.name === 'Proxies' && (
                                                <div className="w-[90vw] max-w-[500px] p-4 sm:p-6">
                                                    <div className="mb-4">
                                                        <h3 className="text-base sm:text-lg font-semibold mb-2">Proxy Solutions</h3>
                                                        <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                                                            Choose the perfect proxy type for your needs
                                                        </p>
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        {proxyTypes.map((proxy, index) => {
                                                            const Icon = proxy.icon;
                                                            return (
                                                                <Link
                                                                    key={index}
                                                                    href={proxy.href}
                                                                    className="flex items-center p-3 rounded-lg border hover:bg-accent transition-colors group"
                                                                >
                                                                    <div className="mr-3 flex-shrink-0">
                                                                        <Icon className="h-4 w-4 text-primary" />
                                                                    </div>
                                                                    <div className="min-w-0">
                                                                        <h4 className="font-medium text-xs sm:text-sm group-hover:text-primary transition-colors">
                                                                            {proxy.name}
                                                                        </h4>
                                                                        <p className="text-xs text-muted-foreground line-clamp-2">
                                                                            {proxy.description.split(' ').slice(0, 4).join(' ')}...
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}

                                            {item.name === 'Pricing' && (
                                                <div className="w-[95vw] max-w-[800px] p-4 sm:p-6">
                                                    <div className="mb-4">
                                                        <h3 className="text-base sm:text-lg font-semibold mb-2">Datacenter Proxies Pricing</h3>
                                                        <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                                                            High-speed proxies from data centers
                                                        </p>
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                        {datacenterPricing.map((plan, index) => (
                                                            <div
                                                                key={index}
                                                                className={`p-4 rounded-lg border hover:bg-accent transition-colors ${plan.popular ? 'border-primary bg-primary/5' : 'border-border'
                                                                    }`}
                                                            >
                                                                <div className="flex items-center justify-between mb-2">
                                                                    <h4 className="font-semibold text-sm sm:text-base">{plan.name}</h4>
                                                                    {plan.popular && (
                                                                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex-shrink-0">
                                                                            Popular
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <p className="text-xs sm:text-sm text-muted-foreground mb-3">{plan.description}</p>
                                                                <div className="mb-3">
                                                                    <div className="text-xl sm:text-2xl font-bold">{plan.price}</div>
                                                                    <div className="text-xs sm:text-sm text-muted-foreground">{plan.per}</div>
                                                                </div>
                                                                <ul className="space-y-1 mb-4">
                                                                    {plan.features.slice(0, 3).map((feature, idx) => (
                                                                        <li key={idx} className="flex items-center text-xs sm:text-sm">
                                                                            <CheckIcon className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                                                                            <span className="line-clamp-1">{feature}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                                <Button size="sm" className="w-full text-xs sm:text-sm" variant={plan.popular ? 'default' : 'outline'}>
                                                                    Get Started
                                                                </Button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-4 pt-4 border-t">
                                                        <Link href="#pricing" className="text-xs sm:text-sm text-primary hover:underline font-medium">
                                                            View all pricing options →
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}

                                            {item.name === 'Locations' && (
                                                <div className="w-[90vw] max-w-[350px] p-4 sm:p-6">
                                                    <div className="mb-4">
                                                        <h3 className="text-base sm:text-lg font-semibold mb-2">Available Locations</h3>
                                                        <p className="text-xs sm:text-sm text-muted-foreground mb-4">Access proxies from key African markets</p>
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                                        {locations.map((location, index) => (
                                                            <Link
                                                                key={index}
                                                                href={`#location-${location.name.toLowerCase()}`}
                                                                className="flex items-center p-3 rounded-lg border hover:bg-accent transition-colors group cursor-pointer"
                                                            >
                                                                <span className="text-lg sm:text-xl mr-2 flex-shrink-0">{location.flag}</span>
                                                                <div className="min-w-0">
                                                                    <h4 className="font-medium text-xs sm:text-sm group-hover:text-primary transition-colors">
                                                                        {location.name}
                                                                    </h4>
                                                                    <p className="text-xs text-muted-foreground">Available</p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>

                                                    <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800 mb-4">
                                                        <ClockIcon className="h-4 w-4 text-amber-600 flex-shrink-0" />
                                                        <AlertDescription className="text-amber-800 dark:text-amber-200">
                                                            <span className="font-medium text-xs">More locations launching soon!</span>
                                                            <br />
                                                            <span className="text-xs">Expanding to additional African countries in 2025.</span>
                                                        </AlertDescription>
                                                    </Alert>

                                                    <div className="pt-2 border-t">
                                                        <Link href="#locations" className="text-xs sm:text-sm text-primary hover:underline font-medium">
                                                            View all locations →
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <Link href={item.href} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                'px-3 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors',
                                                pathname === item.href ? 'text-primary' : ''
                                            )}
                                        >
                                            {item.name}
                                            {pathname === item.href && (
                                                <motion.div
                                                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
                                                    layoutId="underline"
                                                />
                                            )}
                                        </NavigationMenuLink>
                                    </Link>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                    <div className="hidden lg:flex items-center space-x-2">
                        <Button variant="ghost" size="sm" asChild className="text-xs sm:text-sm">
                            <Link href="/login">Sign in</Link>
                        </Button>
                        <Button size="sm" asChild className="text-xs sm:text-sm">
                            <Link href="/sign-up">Get Started</Link>
                        </Button>
                    </div>
                    <ModeToggle />
                    <div className="lg:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
