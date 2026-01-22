/**
 * Footer Component
 * 
 * Contains the Contact Form and Footer sections of the website.
 * Includes email submission functionality via Web3Forms.
 * 
 * @author Samarth Viswanath
 * @version 1.0.0
 */

"use client";

import { Mail, Linkedin, Instagram, ArrowUp, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { useState } from "react";

// Constants
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
const FORM_SUBMISSION_RESET_DELAY = 5000;
const DEVELOPER_WEBSITE = "https://samarthv.me";
const DEVELOPER_NAME = "Samarth Viswanath";

// Types
interface FormData {
    name: string;
    email: string;
    message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

/**
 * Contact Section Component
 * Renders the contact form with email submission and social media links
 */
export function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    /**
     * Handles form submission directly to Web3Forms
     * Uses public access key (safe for client-side use)
     * @param e - Form event
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Contact Form Submission from ${formData.name}`,
                    from_name: "Ravishankar Dakoju Website",
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                // Reset form after success message display
                setTimeout(() => setStatus("idle"), FORM_SUBMISSION_RESET_DELAY);
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again or email directly.");
        }
    };

    /**
     * Handles input field changes
     * @param e - Change event from input or textarea
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-12 md:py-32 bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                    {/* Left Content Section */}
                    <div className="space-y-6 md:space-y-8">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold">
                            Let's connect.
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-md">
                            For Rotary collaborations, speaking engagements, and community project partnerships, please reach out.
                        </p>

                        {/* Email Contact */}
                        <div className="flex flex-col gap-4">
                            <a
                                href={`mailto:${siteConfig.links.contactEmail}`}
                                className="flex items-center gap-4 text-xl md:text-2xl font-light hover:text-secondary transition-colors break-all"
                            >
                                <Mail className="text-secondary flex-shrink-0" />
                                <span className="text-base md:text-2xl">{siteConfig.links.contactEmail}</span>
                            </a>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex gap-4 pt-4 md:pt-8">
                            <a
                                href={siteConfig.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href={siteConfig.links.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all transform hover:-translate-y-1"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm w-full">
                        <h3 className="text-xl font-bold mb-6 text-secondary">Send a Message</h3>

                        {/* Success Message */}
                        {status === "success" && (
                            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
                                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <p className="font-medium text-green-500">Message sent successfully!</p>
                                    <p className="text-sm text-slate-300 mt-1">Thank you for reaching out. We'll get back to you soon.</p>
                                </div>
                            </div>
                        )}

                        {/* Error Message */}
                        {status === "error" && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                                <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <p className="font-medium text-red-500">Failed to send message</p>
                                    <p className="text-sm text-slate-300 mt-1">{errorMessage}</p>
                                </div>
                            </div>
                        )}

                        {/* Contact Form */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Name Input */}
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="Your name"
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="your@email.com"
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="How can we collaborate?"
                                    required
                                    disabled={status === "loading"}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-secondary text-slate-900 font-bold py-4 rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Footer Component
 * Renders site footer with branding, copyright, and developer credits
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Branding Section */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-xs ring-2 ring-slate-800">
                            RD
                        </div>
                        <span className="font-serif font-semibold text-slate-200">{siteConfig.person.displayName}</span>
                    </div>

                    {/* Copyright and Developer Credit */}
                    <div className="text-xs md:text-sm text-center">
                        <p>&copy; {currentYear} Ravishankar Dakoju. All rights reserved.</p>
                        <p className="text-[10px] md:text-xs mt-1 opacity-40">
                            Developed by{" "}
                            <a 
                                href={DEVELOPER_WEBSITE} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-slate-300 transition-colors"
                            >
                                {DEVELOPER_NAME}
                            </a>
                        </p>
                    </div>

                    {/* Back to Top Button */}
                    <Link 
                        href="#" 
                        className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors" 
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
