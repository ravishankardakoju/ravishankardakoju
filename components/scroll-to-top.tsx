/**
 * Scroll to Top Button Component
 * 
 * Displays a floating button that appears when user scrolls down.
 * Clicking the button smoothly scrolls the page back to the top.
 * 
 * @author Samarth Viswanath
 */

"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    /**
     * Toggle visibility based on scroll position
     * Shows button when scrolled more than 300px down
     */
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    /**
     * Smoothly scroll to top of page
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 p-2.5 md:p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <ArrowUp size={20} className="md:w-6 md:h-6" />
        </button>
    );
}
