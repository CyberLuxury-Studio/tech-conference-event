import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ConnectedNodes from '@/components/ConnectedNodes';
import TransmissionRoster from '@/components/TransmissionRoster';
import TerminalOutput from '@/components/TerminalOutput';
import SystemDiagnostics from '@/components/SystemDiagnostics';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e2e1] font-['Inter'] selection:bg-[#00FF41] selection:text-black">
      <Navbar />
      <Hero />
      <ConnectedNodes />
      <TransmissionRoster />
      <TerminalOutput />
      <Features />
      <Pricing />
      <SystemDiagnostics />
      <Footer />
    </main>
  );
}
