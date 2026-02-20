import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Benefits from "@/components/Benefits";
import Demo from "@/components/Demo";
import BetaForm from "@/components/BetaForm";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-cyan-neon/30">
      <Starfield />
      <Navbar />

      <Hero />
      <Vision />
      <Benefits />
      <Demo />
      <BetaForm />

      <Footer />
    </main>
  );
}
