export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/10 py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500 font-mono">
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
                    <a href="mailto:beta@tropix.ai" className="hover:text-cyan-neon transition-colors">
                        beta@tropix.ai
                    </a>
                    <a href="mailto:support@tropix.ai" className="hover:text-cyan-neon transition-colors">
                        support@tropix.ai
                    </a>
                    <a href="mailto:hello@tropix.ai" className="hover:text-cyan-neon transition-colors">
                        hello@tropix.ai
                    </a>
                    <a href="mailto:sales@tropix.ai" className="hover:text-cyan-neon transition-colors">
                        sales@tropix.ai
                    </a>
                    <a href="mailto:safety@tropix.ai" className="hover:text-cyan-neon transition-colors">
                        safety@tropix.ai
                    </a>
                </div>
                <p className="tracking-wide">
                    © 2026 Tropix AI • Built to break through the troposphere.
                </p>
            </div>
        </footer>
    );
}
