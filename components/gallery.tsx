
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Gallery() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const images = siteConfig.gallery;

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    };

    return (
        <section id="gallery" className="py-20 md:py-32 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center mb-12 text-center">
                    <div className="w-16 h-1 bg-secondary rounded-full mb-6" />
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Gallery</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-slate-200 group"
                            onClick={() => openLightbox(idx)}
                        >
                            {/* Fallback pattern if image missing during dev, but using next/image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <span className="text-xs">{img.alt}</span>
                            </div>

                            {/* In a real scenario, we use next/image. For this portable template, we assume images are in public/gallery */}
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-90 md:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onLoad={(result) => {
                                    const image = result.target as HTMLImageElement;
                                    image.classList.remove("opacity-0");
                                }}
                                onError={(e) => {
                                    // Hide broken image icon if possible or stylistic handling
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />

                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="text-white drop-shadow-md" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full hidden md:block"
                        >
                            <ChevronLeft size={40} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full hidden md:block"
                        >
                            <ChevronRight size={40} />
                        </button>

                        <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            {/* Display Current Image */}
                            <img
                                src={images[lightboxIndex].src}
                                alt={images[lightboxIndex].alt}
                                className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl"
                            />

                            <div className="absolute bottom-[-3rem] left-0 right-0 text-center text-white/80">
                                <p className="text-sm font-medium">{images[lightboxIndex].alt}</p>
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
