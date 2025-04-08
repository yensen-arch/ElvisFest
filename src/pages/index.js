import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import ImageReel from '../components/ImageReel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Dynamic background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
      
      {/* Content sections */}
      <section className="relative">
        <Navbar />
        <HeroCarousel />
      </section>

      <section className="relative">
        <About />
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black pointer-events-none" />
        <ImageReel />
      </section>

      <section className="relative">
        <Footer />
      </section>


      {/* Footer with gradient border */}
      <footer className="relative py-12 mt-20 border-t border-white/10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="container mx-auto px-4">
          <p className="text-center text-white/60 text-sm">
            © 2024 Elvis Fest. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
} 