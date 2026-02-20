"use client";

import { motion } from "framer-motion";
import { Search, ShieldCheck, Zap } from "lucide-react";
import clsx from "clsx";

const benefits = [
    {
        title: "Real Autonomous Swarms",
        description: "Research real leads, enrich data, personalize outreach, verify everything, and execute actions — all in one visual canvas with built-in consensus to kill hallucinations.",
        icon: Search,
        color: "group-hover:text-cyan-neon border-cyan-neon/30 group-hover:bg-cyan-neon/10",
    },
    {
        title: "Verified & Auditable",
        description: "Every run has immutable audit trails, consensus scoring, and exportable reports. Sales leaders can trust the output and prove ROI to their team.",
        icon: ShieldCheck,
        color: "group-hover:text-green-neon border-green-neon/30 group-hover:bg-green-neon/10",
    },
    {
        title: "Extensible Platform",
        description: "Upload your own agents, use our skills registry, and build on top of open standards (A2A, MCP). The platform grows with your team and community.",
        icon: Zap,
        color: "group-hover:text-orange-fire border-orange-fire/30 group-hover:bg-orange-fire/10",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Benefits() {
    return (
        <section className="py-32 relative z-10 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-10 hover:border-zinc-700 transition-colors duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className={clsx("w-16 h-16 rounded-2xl border flex items-center justify-center mb-8 relative z-10 transition-all duration-300", benefit.color)}>
                                <benefit.icon className="w-8 h-8 text-zinc-400 group-hover:text-inherit transition-colors duration-300" strokeWidth={1.5} />

                                {/* Floating particle effect inside icon box */}
                                <motion.div
                                    animate={{
                                        y: [0, -4, 0],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "easeInOut",
                                        delay: i * 0.4
                                    }}
                                    className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-current opacity-0"
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 font-mono text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                                {benefit.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed relative z-10">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
