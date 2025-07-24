// components/sections/features.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
    {
        title: "Global Coverage",
        description: "Access proxies from over 150 countries worldwide with city-level targeting.",
        icon: "🌎"
    },
    {
        title: "High Speed",
        description: "Our proxies are optimized for speed with average response times under 100ms.",
        icon: "⚡"
    },
    {
        title: "Secure Transactions",
        description: "End-to-end encrypted transactions with escrow protection for buyers and sellers.",
        icon: "🔒"
    },
    {
        title: "24/7 Support",
        description: "Our expert team is available around the clock to assist with any issues.",
        icon: "🛟"
    },
    {
        title: "API Access",
        description: "Integrate with our API to manage proxies programmatically.",
        icon: "🔌"
    },
    {
        title: "Real-time Analytics",
        description: "Monitor proxy performance with detailed analytics dashboards.",
        icon: "📊"
    }
];

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-muted/50">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SuperProxy</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We provide the most reliable proxy marketplace with features designed for both buyers and sellers.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}