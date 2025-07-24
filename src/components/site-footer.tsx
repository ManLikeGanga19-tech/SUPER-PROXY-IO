// components/site-footer.tsx
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { Icons } from '@/components/icons';

export function SiteFooter() {
    return (
        <footer className="border-t">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">SP</span>
                            </div>
                            <span className="font-bold text-lg">SuperProxy</span>
                        </div>
                        <p className="text-muted-foreground max-w-xs">
                            The leading marketplace for buying and selling high-quality proxies.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Icons.twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Icons.github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Icons.linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Residential Proxies</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Datacenter Proxies</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Mobile Proxies</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Proxy API</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">API Reference</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Guides</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">About</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} SuperProxy. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </footer>
    );
}