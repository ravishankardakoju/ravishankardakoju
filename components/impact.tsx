
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ArrowUpRight, School, Droplets, TreePine, Building2, Sprout } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

// Helper to pick icons based on focus/title
const getIcon = (focus: string) => {
    if (focus.includes("Education") || focus.includes("School")) return School;
    if (focus.includes("Water") || focus.includes("Sanitation")) return Droplets;
    if (focus.includes("Environment") || focus.includes("Tree")) return TreePine;
    if (focus.includes("Farming") || focus.includes("Agriculture")) return Sprout;
    return Building2;
};

export function Impact() {
    const [selectedProject, setSelectedProject] = useState<typeof siteConfig.initiatives[0] | null>(null);

    return (
        <section id="impact" className="py-20 md:py-32 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm">Impact & Initiatives</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-6">
                        Signature Projects
                    </h2>
                    <p className="text-slate-600">
                        Focused on creating sustainable value in education, environment, and community welfare across India.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteConfig.initiatives.map((project, idx) => {
                        const Icon = getIcon(project.focus);
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer group"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="font-serif font-bold text-xl text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                        <MapPin size={14} />
                                        <span>{project.location}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 line-clamp-2 mb-6">
                                        {project.bullets[0]}
                                    </p>
                                    <div className="flex items-center text-primary font-medium text-sm">
                                        View Details <ArrowUpRight size={16} className="ml-1" />
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal / Drawer */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`project-${selectedProject.title}`}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-6 md:p-8">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500"
                                >
                                    <X size={20} />
                                </button>

                                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">
                                    {selectedProject.focus}
                                </span>

                                <h3 className="font-serif font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                                    {selectedProject.title}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                                    <MapPin size={14} />
                                    <span>{selectedProject.location}</span>
                                    {selectedProject.year && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-slate-300 mx-1" />
                                            <span>{selectedProject.year}</span>
                                        </>
                                    )}
                                </div>

                                <ul className="space-y-3">
                                    {selectedProject.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                            <span className="leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-sm font-medium text-slate-500 hover:text-slate-800"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
