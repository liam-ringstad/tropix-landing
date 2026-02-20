"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BetaForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call to replace the Google Form
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <section id="beta" className="py-32 relative z-10 bg-black border-t border-white/10">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl font-bold mb-6 font-mono text-white">
                        Be <span className="text-cyan-neon">First</span>
                    </h2>
                    <p className="text-2xl text-gray-400 mb-12">Private beta is extremely limited.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-neon to-transparent opacity-50" />

                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-12"
                        >
                            <div className="w-16 h-16 rounded-full bg-green-neon/20 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-mono text-white mb-2">Access Requested</h3>
                            <p className="text-gray-400">We will be in touch shortly if you qualify.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="text-left space-y-6">
                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">WORK EMAIL</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="name@company.com"
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">COMPANY</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Acme Corp"
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-cyan-neon hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-mono text-lg"
                            >
                                {status === "submitting" ? "TRANSMITTING..." : "JOIN THE SWARM"}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
