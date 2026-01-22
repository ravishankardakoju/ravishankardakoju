
"use client";

import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 md:pt-32 overflow-hidden bg-slate-50">
            {/* Background Pattern - Rotary Gear inspired subtle */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold uppercase tracking-wider">
                        <Globe size={12} className="text-secondary" />
                        <span>{siteConfig.person.rotaryIdentityLine}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-slate-900">
                        A Rotary life of <span className="text-primary">service.</span> <br />
                        A legacy of <span className="text-secondary relative">
                            giving.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
                        {siteConfig.person.roles.join(" • ")}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            href="#impact"
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-medium shadow-lg shadow-blue-900/10 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            Explore Impact
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-200 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>

                {/* Right Visual / Portrait */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] md:aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        {/* Rotary Event Respect Photo */}
                        <img
                            src="/gallery/rotary-event-respect.jpeg"
                            alt="Ravishankar Dakoju - Senior Rotarian and Philanthropist"
                            className="w-full h-full object-cover"
                        />


                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 -top-8 -right-8 w-24 h-24 bg-dots-pattern opacity-20" />
                    <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full" />
                </motion.div>
            </div>

            {/* Impact Strip - Floating overlap */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 mt-12 md:mt-24">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {siteConfig.stats.map((stat, idx) => (
                            <div key={idx} className="relative pl-6 border-l-4 border-secondary/30">
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">{stat.label}</p>
                                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                                {stat.footnote && (
                                    <p className="text-xs text-slate-400 mt-1">{stat.footnote}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
