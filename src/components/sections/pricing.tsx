// components/sections/pricing.tsx
'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

const proxyTypes = [
    {
        id: "residential",
        label: "Residential",
        description: "Real IP addresses from home users",
    },
    {
        id: "datacenter",
        label: "Datacenter",
        description: "High-speed proxies from data centers",
    },
    {
        id: "mobile",
        label: "Mobile",
        description: "IPs from mobile devices and carriers",
    },
];

const pricingPlans = [
    {
        name: "Starter",
        description: "For individuals and small projects",
        price: "$0.45",
        per: "per proxy",
        features: [
            "1,000+ IPs available",
            "10 locations",
            "Basic support",
            "99.5% uptime"
        ],
        popular: false
    },
    {
        name: "Professional",
        description: "For growing businesses",
        price: "$0.35",
        per: "per proxy",
        features: [
            "10,000+ IPs available",
            "50+ locations",
            "Priority support",
            "99.8% uptime",
            "API access"
        ],
        popular: true
    },
    {
        name: "Enterprise",
        description: "For large-scale operations",
        price: "Custom",
        per: "volume pricing",
        features: [
            "100,000+ IPs available",
            "150+ locations",
            "24/7 dedicated support",
            "99.9% uptime",
            "Advanced API",
            "Custom locations"
        ],
        popular: false
    }
];

export function PricingSection() {
    return (
        <section id="pricing" className="relative min-h-screen py-20 flex items-center overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            </div>

            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Competitive pricing for all proxy types with volume discounts available.
                    </p>
                </motion.div>

                <Tabs defaultValue="residential" className="mb-16">
                    <TabsList className="grid w-full grid-cols-3">
                        {proxyTypes.map((type) => (
                            <TabsTrigger key={type.id} value={type.id}>
                                {type.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {proxyTypes.map((type) => (
                        <TabsContent key={type.id} value={type.id} className="mt-8">
                            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
                                {type.description}
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">
                                {pricingPlans.map((plan, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className={`h-full relative ${plan.popular ? 'border-2 border-primary' : ''}`}>
                                            {plan.popular && (
                                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                                    Most Popular
                                                </div>
                                            )}
                                            <CardHeader className="text-center">
                                                <CardTitle>{plan.name}</CardTitle>
                                                <p className="text-muted-foreground">{plan.description}</p>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="text-center mb-6">
                                                    <div className="text-4xl font-bold">{plan.price}</div>
                                                    <div className="text-muted-foreground">{plan.per}</div>
                                                </div>

                                                <ul className="space-y-3">
                                                    {plan.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center">
                                                            <CheckIcon className="h-5 w-5 text-primary mr-2" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                                                    Get Started
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
