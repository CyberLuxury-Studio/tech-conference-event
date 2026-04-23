import React from 'react';
import { Hexagon, Triangle, Circle, Square, Box, Diamond } from 'lucide-react';

const partners = [
  { name: 'OMNICORP', Icon: Hexagon },
  { name: 'TYRELL', Icon: Triangle },
  { name: 'WEYLAND', Icon: Circle },
  { name: 'CYBERDYNE', Icon: Square },
  { name: 'MILITECH', Icon: Box },
  { name: 'ARASAKA', Icon: Diamond },
  { name: 'OMNICORP', Icon: Hexagon },
  { name: 'TYRELL', Icon: Triangle },
  { name: 'WEYLAND', Icon: Circle },
  { name: 'CYBERDYNE', Icon: Square },
  { name: 'MILITECH', Icon: Box },
  { name: 'ARASAKA', Icon: Diamond },
];

export default function ConnectedNodes() {
  return (
    <section className="py-12 border-y border-[#00FF41]/20 bg-[#020202] overflow-hidden relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex w-[200%] animate-[marquee_30s_linear_infinite]">
        {partners.map((partner, index) => {
          const Icon = partner.Icon;
          return (
            <div key={index} className="flex-1 flex items-center justify-center gap-3 text-[#333] grayscale opacity-50 hover:opacity-100 hover:text-[#00FF41] hover:grayscale-0 transition-all duration-300">
              <Icon className="w-8 h-8" strokeWidth={1.5} />
              <span className="font-mono text-2xl font-bold tracking-widest uppercase">{partner.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
