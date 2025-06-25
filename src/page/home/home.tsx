import { useState, useEffect } from "react";
import Hero from '../../komponen/home/hero'
import About from '../../komponen/home/About'
import Work from '../../komponen/home/work'
import Contact from '../../komponen/home/Contact'
import Footer from '../../komponen/footer/footer'
import NeonBeam from '../../komponen/neonBeam/neonBeam'
import LoadingBeam from '../../komponen/loader/loadingBeam';

export default function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600); // a bit longer than loading bar
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingBeam />;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Layer 1: Black Background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Layer 2: Neon Beams */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <NeonBeam />
      </div>

      {/* Layer 3: Foreground Content */}
      <main className="relative z-20 scroll-smooth px-4 sm:px-12 py-10 flex flex-col gap-16">
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}