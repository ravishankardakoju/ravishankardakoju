
"use client";

import { Leaf, Heart, Shield, Users } from "lucide-react";
import { siteConfig } from "@/content/site";

const values = [
    { label: "Resilience", icon: Shield, desc: "Forged in adversity" },
    { label: "Dignity", icon: Heart, desc: "Respecting every soul" },
    { label: "Service", icon: Users, desc: "Community first" },
    { label: "Sustainability", icon: Leaf, desc: "Long-term impact" },
];

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Main Story Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            A journey rooted in <br />
                            <span className="text-secondary decoration-2 decoration-secondary underline-offset-4">resilience & service</span>.
                        </h2>

                        <div className="prose prose-lg text-slate-600 leading-relaxed font-light">
                            <p className="whitespace-pre-line">{siteConfig.person.longBio}</p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4 items-start">
                            <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                <Users size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-lg text-slate-900 mb-1">Service through Fellowship</h4>
                                <p className="text-slate-600 italic">
                                    &ldquo;Service through fellowship, community, and long-term commitment.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Values */}
                    <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-8 border border-slate-100 sticky top-24">
                        <h3 className="text-xl font-bold font-serif text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-secondary rounded-full"></span>
                            Core Values
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {values.map((v) => (
                                <div key={v.label} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-primary/20 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <v.icon size={20} />
                                    </div>
                                    <h4 className="font-medium text-slate-900">{v.label}</h4>
                                    <p className="text-xs text-slate-500">{v.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">Based in</span>
                                <span className="font-medium text-slate-900">{siteConfig.person.location}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm mt-3">
                                <span className="text-slate-500">Focus</span>
                                <span className="font-medium text-slate-900">Philanthropy & Real Estate</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
