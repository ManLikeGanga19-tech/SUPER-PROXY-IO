// components/sections/cta.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
    return (
        <section className="py-24 relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>

                    <p className="text-xl text-muted-foreground mb-10">
                        Join thousands of satisfied users and take control of your proxy needs today.
                    </p>

                    <div className="flex flex-row justify-center gap-2 sm:gap-4">
                        <Link href="/sign-up" className="flex-1 sm:flex-initial">
                            <Button size="sm" className="px-3 py-3 text-sm sm:text-lg sm:px-8 sm:py-6 w-full">
                                Create Account
                            </Button>
                        </Link>
                        <Button size="sm" variant="outline" className="px-3 py-3 text-sm sm:text-lg sm:px-8 sm:py-6 flex-1 sm:flex-initial">
                            Contact Sales
                        </Button>
                    </div>

                    <div className="mt-12 bg-background border rounded-xl p-6 inline-block max-w-2xl mx-auto">
                        <p className="text-muted-foreground">
                            "SuperProxy has been a game-changer for our data collection efforts. The proxies are reliable and the dashboard makes management effortless."
                        </p>
                        <div className="mt-4 font-medium">
                            - Daniel Orwenjo, Lead Developer at DataInsights
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}