'use client';

import { FlaskConical, Home } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white py-3 px-4 md:px-12 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-center gap-8">
        <div
          className="relative flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
          onMouseEnter={() => setHovered('Home')}
          onMouseLeave={() => setHovered(null)}
        >
          <Link href="/" className="p-3 rounded-full bg-[#ffcbdb] hover:bg-[#ffcbdb90] transition-colors">
            <Home size={28} color="#000" />
          </Link>
          {hovered === 'Home' && (
            <span className="mt-2 text-sm text-black font-medium transition-opacity duration-200">Home</span>
          )}
        </div>

        <div
          className="relative flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
          onMouseEnter={() => setHovered('Experimental')}
          onMouseLeave={() => setHovered(null)}
        >
          <Link href="/expPage" className="p-3 rounded-full bg-[#b1ddc9] hover:bg-[#b1ddc980] transition-colors">
            <FlaskConical size={28} color="#000" />
          </Link>
          {hovered === 'Experimental' && (
            <span className="mt-2 text-sm text-black font-medium transition-opacity duration-200">Experiments</span>
          )}
        </div>
      </div>
    </nav>
  );
}
