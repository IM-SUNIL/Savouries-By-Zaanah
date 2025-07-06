'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import VisitUs from '../components/VisitUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <VisitUs />
      <Contact />
      <Footer />
    </main>
  );
}
