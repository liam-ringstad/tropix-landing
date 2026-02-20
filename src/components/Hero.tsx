"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 hero-bg pointer-events-none -z-10" />

            {/* Animated Rocket Pixel Art placeholder */}
            <motion.div
                initial={{ y: "150vh", opacity: 0 }}
                animate={{ y: "-150vh", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
                className="absolute left-1/2 -ml-8 z-0 flex flex-col items-center"
            >
                {/* Simple CSS-based 8-bit rocket representation since image generation failed */}
                <div className="w-8 h-12 bg-zinc-200 border-x-4 border-t-8 border-cyan-neon relative">
                    <div className="absolute -top-6 left-1/2 -ml-4 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-cyan-neon" />
                    <div className="absolute top-4 -left-6 w-0 h-0 border-r-[24px] border-r-cyan-neon border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent" />
                    <div className="absolute top-4 -right-6 w-0 h-0 border-l-[24px] border-l-cyan-neon border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent" />
                </div>
                <motion.div
                    animate={{ height: ["40px", "80px", "40px"] }}
                    transition={{ repeat: Infinity, duration: 0.2 }}
                    className="w-4 bg-gradient-to-b from-orange-fire to-transparent mt-1"
                />
            </motion.div>

            <div className="max-w-5xl mx-auto text-center px-6 z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 font-mono glow-cyan"
                >
                    Tropix <span className="text-cyan-neon">AI</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-3xl md:text-5xl font-light tracking-tight text-gray-200 mb-16 leading-tight"
                >
                    When we say we’re shooting for the stars...<br />
                    <span className="text-cyan-neon font-mono">&lt;it’s still a metaphor/&gt;</span><br />
                    One day we will mean it literally.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-2xl text-cyan-neon font-medium tracking-tight mb-16 bg-black/40 inline-block px-6 py-2 rounded-full border border-cyan-neon/30 backdrop-blur-sm"
                >
                    Built for sales leaders who need verified pipeline this quarter — not next year.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <a href="#beta"
                        className="inline-block relative group">
                        <div className="absolute -inset-1 bg-cyan-neon rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative bg-white text-black font-semibold text-xl px-16 py-6 rounded-2xl transition-all font-mono hover:bg-zinc-100 flex items-center gap-3">
                            Join the Private Beta
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >→</motion.span>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
