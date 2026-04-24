"use client";
import React from 'react';
import { motion } from 'framer-motion';

const speakers = [
  {
    name: 'Dr. E. Thorne',
    role: 'Lead Architect, Core Systems',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    topic: 'Quantum State Decoupling'
  },
  {
    name: 'K. Vance',
    role: 'Head of Threat Intel',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    topic: 'Zero-Day Mitigation'
  },
  {
    name: 'M. Sterling',
    role: 'Director of Neural Interfaces',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    topic: 'Direct Cortex Mapping'
  },
  {
    name: 'A. Chen',
    role: 'Principal Decentralization Eng',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80',
    topic: 'Consensus Without Latency'
  }
];

export default function TransmissionRoster() {
  return (
    <section className="py-32 px-6 relative max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] uppercase tracking-tight mb-4">
          <span className="text-[#00FF41]">&gt;</span> Transmission Roster
        </h2>
        <p className="text-[#84967e] font-mono text-sm max-w-xl">
          Authorized personnel selected for global broadcast. Encryption keys will be distributed prior to session initiation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#333] border-t-[#00FF41]/30 hover:border-t-[#00FF41] overflow-hidden transition-all duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <div className="absolute inset-0 bg-[#00FF41]/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 scale-100 group-hover:scale-105"
              />
            </div>
            <div className="p-5 border-t border-[#333]">
              <h3 className="font-['Space_Grotesk'] font-bold text-xl uppercase tracking-wider text-[#e5e2e1] group-hover:text-[#00FF41] transition-colors">
                {speaker.name}
              </h3>
              <p className="text-[#84967e] text-xs font-mono uppercase mt-1 mb-3">{speaker.role}</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse" />
                <p className="text-sm font-mono text-[#aaa] truncate">{speaker.topic}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
