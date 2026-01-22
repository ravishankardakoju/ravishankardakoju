
"use client";

import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Rotary() {
    return (
        <section id="rotary" className="py-20 md:py-32 bg-[#00246c] text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full border-[60px] border-white/20" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full border-[40px] border-[#fece2f]/20" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#fece2f] text-xs font-bold mb-6">
                            SERVICE ABOVE SELF
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            A Lifetime of <br />
                            <span className="text-[#fece2f]">Rotary Service</span>
                        </h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-8 opacity-90">
                            For Ravishankar Dakoju, Rotary is not just an organization—it is a way of life.
                            From local community projects to global contributions, the journey has been defined by
                            unwavering commitment to the Rotary Foundation and its mission.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                                <h4 className="text-[#fece2f] font-bold text-xl mb-1">US$ 50 Million</h4>
                                <p className="text-sm text-blue-100">Pledge to The Rotary Foundation (2026)</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                                <h4 className="text-[#fece2f] font-bold text-xl mb-1">₹100 Crore</h4>
                                <p className="text-sm text-blue-100">Commitment to TRF (2018)</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                                <h4 className="text-[#fece2f] font-bold text-xl mb-1">Arch Klumph Society</h4>
                                <p className="text-sm text-blue-100">Member • Chair's Circle</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 rounded-2xl p-8 md:p-10 shadow-2xl">
                        <h3 className="font-serif font-bold text-2xl mb-8 border-b pb-4">
                            Guided by Principles
                        </h3>

                        <div className="grid gap-6">
                            {[
                                { title: "Truth & Transparency", desc: "Is it the truth? Acting with integrity in all endeavors." },
                                { title: "Fairness & Dignity", desc: "Is it fair to all concerned? Upholding justice and respect." },
                                { title: "Building Goodwill", desc: "Will it build goodwill and better friendships?" },
                                { title: "Benefiting Communities", desc: "Will it be beneficial to all concerned? Creating shared value." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 text-primary shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-800">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
