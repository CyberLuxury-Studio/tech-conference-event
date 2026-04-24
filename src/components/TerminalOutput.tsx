"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Network } from 'lucide-react';

const bootSequence = [
  "cargo run --release --bin core_node",
  "   Compiling core_node v0.1.0 (/sys/core)",
  "    Finished release [optimized] target(s) in 0.04s",
  "     Running `target/release/core_node`",
  "[INFO] Initialize Sequence Started...",
  "[INFO] Allocating secure memory enclave: 16GB [OK]",
  "[INFO] Loading cryptographic primitives: Ed25519, SHA-3 [OK]",
  "[WARN] Bypassing standard protocol handlers (strict mode override)",
  "[INFO] Establishing Zero-Latency WebSocket mesh...",
  "[OK]   WSS listener bound to 0.0.0.0:443",
  "[INFO] Connecting to global peer network...",
  "[OK]   Connected to 42,069 active nodes",
  "[INFO] Synchronizing consensus state... [100%]",
  "[SUCCESS] Node fully operational. Ready for execution.",
  "> _"
];

export default function TerminalOutput() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 relative max-w-7xl mx-auto border-t border-[#333]">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00FF41] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] uppercase tracking-tight mb-6">
            Zero Latency <br/><span className="text-[#00FF41]">Execution</span>
          </h2>
          <p className="text-[#84967e] font-light text-lg mb-10 leading-relaxed">
            Standard event platforms buffer, delay, and crash. The Protocol bypasses traditional web infrastructure entirely, establishing direct peer-to-peer websocket connections for sub-millisecond data delivery.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-[#00FF41]/10 rounded border border-[#00FF41]/30 text-[#00FF41] mt-1">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono text-white font-bold uppercase mb-1">Sub-Millisecond Routing</h4>
                <p className="text-[#84967e] text-sm">Packets are routed via our proprietary dark-fiber network, completely bypassing public internet congestion.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-[#00FF41]/10 rounded border border-[#00FF41]/30 text-[#00FF41] mt-1">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono text-white font-bold uppercase mb-1">Military-Grade Encryption</h4>
                <p className="text-[#84967e] text-sm">Every datagram is secured using quantum-resistant cryptographic primitives before transmission.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-[#00FF41]/10 rounded border border-[#00FF41]/30 text-[#00FF41] mt-1">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono text-white font-bold uppercase mb-1">Global Mesh Network</h4>
                <p className="text-[#84967e] text-sm">If a node goes down, the transmission self-heals by instantly rerouting through the nearest active peer.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#050505] rounded-lg border border-[#333] shadow-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FF41]/5 to-transparent pointer-events-none" />
          <div className="flex items-center px-4 py-3 border-b border-[#333] bg-[#0a0a0a]">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 text-[#666] font-mono text-xs">
              <Terminal className="w-3 h-3" />
              <span>root@protocol-core:~</span>
            </div>
          </div>
          <div className="p-6 font-mono text-sm overflow-hidden h-[380px] bg-[#020202]">
            {lines.map((line, i) => (
              <div
                key={i}
                className={`mb-1 ${
                  line.includes('[INFO]') ? 'text-blue-400' :
                  line.includes('[WARN]') ? 'text-yellow-400' :
                  line.includes('[SUCCESS]') || line.includes('[OK]') ? 'text-[#00FF41]' :
                  line.includes('cargo') || line.includes('Finished') ? 'text-gray-300' :
                  line.includes('Compiling') || line.includes('Running') ? 'text-green-600' :
                  'text-gray-400'
                }`}
              >
                {line}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
