"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "How are Encrypted Access Keys distributed?",
    a: "Keys are generated locally on your machine 24 hours prior to initiation. They are never transmitted over the public internet. You will receive an ephemeral link to download your cryptographic seed."
  },
  {
    q: "What are the Hardware Requirements for VR Telemetry?",
    a: "For standard 2D viewing, any modern browser is sufficient. For full VR Telemetry immersion, we require a discrete GPU (RTX 3060 equivalent or higher), 16GB RAM, and a WebXR compatible headset connected via a high-bandwidth physical link."
  },
  {
    q: "Can I deploy a Virtual Node to relay the stream?",
    a: "Yes. Pro-tier and Enterprise users can deploy relay nodes via our CLI. Relaying the stream to your internal network reduces overall latency and provides localized caching for your organization."
  },
  {
    q: "Is there fallback protocols for network failures?",
    a: "The Protocol operates on a self-healing mesh. If your primary connection drops, the client automatically attempts to re-establish connection via secondary satellite or dark-fiber routing peers within 400ms."
  }
];

export default function SystemDiagnostics() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 relative max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold font-['Space_Grotesk'] uppercase tracking-tight mb-4">
          System <span className="text-[#00FF41]">Diagnostics</span>
        </h2>
        <p className="text-[#84967e] font-mono text-sm uppercase">
          Frequently Queried Logistics
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[#333] bg-[#0a0a0a] hover:border-[#00FF41]/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00FF41]"
              >
                <span className="font-mono font-bold text-[#e5e2e1] pr-8">{faq.q}</span>
                <span className={`font-mono text-[#00FF41] shrink-0 transition-transform duration-300 ${isOpen ? 'text-[#ff003c]' : ''}`}>
                  {isOpen ? '[ - ]' : '[ + ]'}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-[#84967e] font-light border-t border-[#222] mt-2">
                      <p className="mt-4 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
