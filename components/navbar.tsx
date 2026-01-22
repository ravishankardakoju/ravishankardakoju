
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Linkedin, Instagram } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Impact", href: "#impact" },
    { name: "Rotary", href: "#rotary" },
    { name: "Timeline", href: "#timeline" },
    { name: "Media", href: "#media" },
    { name: "Gallery", href: "#gallery" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Brand / Monogram */}
                <Link href="#" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-serif text-xl border-2 border-secondary overflow-hidden group-hover:scale-105 transition-transform">
                        <span className="relative z-10">RD</span>
                        <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className={cn("font-serif font-bold text-lg hidden md:block text-primary", !scrolled && "text-white md:text-primary")}>
                        {/* Text color logic: if not scrolled, might be on dark background? No, Hero is likely light or image. Safe to stick to Primary color or dynamic. 
                 Let's assume hero has white text? Actually, usually hero backgrounds are dark. 
                 Let's keep it primary for safety unless verified. 
             */}
                        {siteConfig.person.displayName}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3 border-r border-slate-300 pr-4">
                        <a
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-[#0077b5] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={siteConfig.links.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-[#E4405F] transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                    <Link
                        href="#contact"
                        className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-primary/20"
                    >
                        Get in touch
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-4 flex flex-col gap-4 animate-accordion-down origin-top">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-slate-700 py-2 border-b border-slate-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 pt-2">
                        <a
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-600"
                        >
                            <Linkedin size={20} /> LinkedIn
                        </a>
                        <a
                            href={siteConfig.links.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-600"
                        >
                            <Instagram size={20} /> Instagram
                        </a>
                    </div>
                    <Link
                        href="#contact"
                        className="bg-primary text-white text-center py-3 rounded-md font-medium mt-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Get in touch
                    </Link>
                </div>
            )}
        </nav>
    );
}
