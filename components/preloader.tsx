"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide preloader after page loads
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Show for 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-primary to-blue-900"
                >
                    <div className="relative flex flex-col items-center gap-8">
                        {/* Rotary Gear Wheel Animation */}
                        <div className="relative w-32 h-32">
                            {/* Outer rotating gear */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0"
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    {/* Gear teeth */}
                                    {[...Array(24)].map((_, i) => (
                                        <rect
                                            key={i}
                                            x="48"
                                            y="2"
                                            width="4"
                                            height="12"
                                            fill="#fece2f"
                                            transform={`rotate(${i * 15} 50 50)`}
                                            rx="1"
                                        />
                                    ))}
                                    {/* Outer circle */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="35"
                                        fill="none"
                                        stroke="#fece2f"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </motion.div>

                            {/* Inner circle with RD */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
                                    <span className="text-3xl font-serif font-bold text-primary">
                                        RD
                                    </span>
                                </div>
                            </motion.div>

                            {/* Pulsing ring */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.2, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 rounded-full border-4 border-secondary"
                            />
                        </div>

                        {/* Loading text */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-white text-lg font-medium mb-2">
                                Loading Profile
                            </p>
                            <div className="flex gap-1 justify-center">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [0, -8, 0],
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                        }}
                                        className="w-2 h-2 bg-secondary rounded-full"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
