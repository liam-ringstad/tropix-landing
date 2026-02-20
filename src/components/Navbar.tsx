"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-black/90 backdrop-blur-md border-cyan-neon shadow-[0_4px_30px_rgba(0,245,255,0.15)]"
                    : "bg-transparent border-white/10"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                <div className="text-3xl font-bold tracking-tighter text-white font-mono">
                    Tropix <span className="text-cyan-neon">AI</span>
                </div>
                <div className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
                    <a href="#vision" className="hover:text-cyan-neon transition-colors duration-200">
                        The Vision
                    </a>
                    <a href="#demo" className="hover:text-cyan-neon transition-colors duration-200">
                        Demo
                    </a>
                    <a href="#beta" className="hover:text-cyan-neon transition-colors duration-200">
                        Beta
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
