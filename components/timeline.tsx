
"use client";

import { siteConfig } from "@/content/site";

export function Timeline() {
    return (
        <section id="timeline" className="py-20 md:py-32 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Milestones</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        A chronological journey of life, business, and philanthropy.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />

                    <div className="space-y-12">
                        {siteConfig.timeline.map((item, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                                    <div className={`bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        {/* Mobile Arrow (hidden on desktop usually or adjusted) */}
                                        {/* Keeping it simple card style */}

                                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-3">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 shadow-sm" />

                                {/* Empty Side for Desktop Balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
