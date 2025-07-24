// components/sections/testimonials.tsx
'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const testimonials = [
    {
        name: "Kelvin Kioko",
        role: "Data Scientist",
        company: "TechCorp",
        content: "SuperProxy has transformed how we gather market data. The proxies are reliable and the speed is unmatched.",
        avatar: "/avatar1.jpg"
    },
    {
        name: "Daniel Orwenjo",
        role: "E-commerce Manager",
        company: "ShopGlobal",
        content: "We've reduced our proxy costs by 40% since switching to SuperProxy while improving reliability.",
        avatar: "/avatar2.jpg"
    },
    {
        name: "Janet Muema",
        role: "SEO Specialist",
        company: "DigitalBoost",
        content: "The residential proxies have been perfect for our SEO monitoring. Geo-targeting is precise and effective.",
        avatar: "/avatar3.jpg"
    }
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 bg-muted">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Hear from our satisfied customers who use ProxyHub for their business needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <CardContent className="p-6">
                                    <p className="text-lg italic">"{testimonial.content}"</p>
                                </CardContent>
                                <CardFooter className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} />
                                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium">{testimonial.name}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role}, {testimonial.company}
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}