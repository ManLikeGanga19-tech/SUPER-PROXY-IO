// components/sections/hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function HeroSection() {
    return (
        <section className="relative min-h-screen py-20 flex items-center overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            </div>

            <div className="container grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Premium Proxies for <span className="text-primary">All Your Needs</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Buy and sell high-quality residential, datacenter, and mobile proxies with our secure marketplace.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="text-lg px-8 py-6">
                            Browse Proxies
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                            Buy Proxies
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <Card className="w-full max-w-md border-0 shadow-xl bg-gradient-to-br from-primary/5 to-background">
                        <CardHeader>
                            <CardTitle className="text-center">Proxy Marketplace</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Proxy Type</span>
                                    <span className="font-medium">Residential</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Location</span>
                                    <span className="font-medium">Nairobi, Kenya</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Speed</span>
                                    <span className="font-medium">85 ms</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Uptime</span>
                                    <span className="font-medium">99.8%</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span>Price per proxy</span>
                                    <span className="text-2xl font-bold text-primary">$0.45</span>
                                </div>
                                <div className="flex gap-2">
                                    <Input type="number" placeholder="Quantity" min="1" />
                                    <Button className="flex-1">Add to Cart</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
