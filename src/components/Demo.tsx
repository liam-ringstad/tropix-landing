"use client";

import { motion } from "framer-motion";

export default function Demo() {
    return (
        <section id="demo" className="py-32 relative z-10 bg-zinc-950/80 backdrop-blur-sm border-y border-white/5 overflow-hidden">

            {/* Background Asteroids/Particles */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-neon/5 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-fire/5 rounded-full blur-[80px] pointer-events-none"
            />

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 font-mono text-white">
                        See It In <span className="text-cyan-neon">Action</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                        From cold lead research to verified, personalized outreach in minutes.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto max-w-5xl"
                >
                    {/* Dashboard Frame */}
                    <div className="bg-zinc-900 rounded-xl p-2 md:p-4 border border-zinc-800 shadow-[0_0_50px_rgba(0,245,255,0.05)]">
                        <div className="flex justify-between items-center mb-3 px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-xs font-mono text-zinc-500 animate-pulse select-none">LIVE_DEMO_STREAM</div>
                        </div>

                        <div className="aspect-video bg-black rounded-lg overflow-hidden border border-white/5 relative group">
                            {/* Scanline effect overlay */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] z-10 opacity-30 mix-blend-overlay" />

                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/6OUzSN0jUoo?rel=0"
                                title="Demo"
                                frameBorder="0"
                                allowFullScreen
                                className="relative z-0"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
