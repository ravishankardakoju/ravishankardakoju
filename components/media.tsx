
"use client";

import { useState } from "react";
import { Play, Share2, ExternalLink, Check } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Media() {
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="media" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Media & Stories</h2>
                        <p className="text-slate-600 max-w-xl">
                            Highlights from interviews, speeches, and Rotary features.
                        </p>
                    </div>
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-600"
                    >
                        {copied ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
                        {copied ? "Link Copied" : "Share Profile"}
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Video - spans 2 cols */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/4g--0zbz3RM?si=uTK5PsYJhZr2VxNt`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-serif text-slate-900">The Joy of Giving</h3>
                            <p className="text-slate-500 text-sm mt-1">Ravishankar Dakoju's address on the transformative power of philanthropy.</p>
                        </div>
                    </div>

                    {/* Featured Links List */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Featured Stories</h4>

                        <a
                            href={siteConfig.links.rotaryLinkedInPost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-primary/30 hover:shadow-md transition-all group"
                        >
                            <div className="flex items-start justify-between">
                                <span className="text-xs font-bold bg-[#0077b5] text-white px-2 py-0.5 rounded">LinkedIn</span>
                                <ExternalLink size={16} className="text-slate-400 group-hover:text-primary" />
                            </div>
                            <h5 className="font-bold text-slate-900 mt-3 group-hover:text-primary transition-colors">
                                Rotary International Feature
                            </h5>
                            <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                                Check out the official feature on the historic contribution to The Rotary Foundation.
                            </p>
                        </a>

                        <a
                            href={siteConfig.links.rotaryStoryPledge50m}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-primary/30 hover:shadow-md transition-all group"
                        >
                            <div className="flex items-start justify-between">
                                <span className="text-xs font-bold bg-secondary text-slate-900 px-2 py-0.5 rounded">Article</span>
                                <ExternalLink size={16} className="text-slate-400 group-hover:text-primary" />
                            </div>
                            <h5 className="font-bold text-slate-900 mt-3 group-hover:text-primary transition-colors">
                                The US$ 50 Million Pledge
                            </h5>
                            <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                                Details on the 2026 pledge announced at the Rotary International Assembly.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
