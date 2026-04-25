import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const ConnectedNodes = dynamic(() => import('@/components/ConnectedNodes'));
const TransmissionRoster = dynamic(() => import('@/components/TransmissionRoster'));
const TerminalOutput = dynamic(() => import('@/components/TerminalOutput'));
const Features = dynamic(() => import('@/components/Features'));
const Pricing = dynamic(() => import('@/components/Pricing'));
const SystemDiagnostics = dynamic(() => import('@/components/SystemDiagnostics'));
const Footer = dynamic(() => import('@/components/Footer'));

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
