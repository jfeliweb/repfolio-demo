'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { demoPages } from '@/lib/navigation';

export function DemoNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-400 text-black shadow-lg"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? '✕' : '☰'}
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 max-h-96 overflow-y-auto">
          <div className="text-sm font-semibold mb-2 text-[rgb(21,26,30)]">
            Demo Pages
          </div>
          {demoPages.map((page) => (
            <Link
              key={page.id}
              href={page.path}
              className={`block py-2 px-3 rounded mb-1 ${
                pathname === page.path
                  ? 'bg-[rgb(238,246,240)] text-[rgb(70,134,87)] font-semibold'
                  : 'text-[rgb(63,77,90)] hover:bg-[rgb(244,241,241)]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {page.id}. {page.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
