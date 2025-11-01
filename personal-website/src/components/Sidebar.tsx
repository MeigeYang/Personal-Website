'use client';

import { useSidebar } from '@/contexts/SidebarContext';

export default function Sidebar() {
  const { isOpen, toggle } = useSidebar();
  const navItems = [
    { label: 'part', href: '#part' },
    { label: 'about', href: '#about' },
    { label: 'works', href: '#works' },
    { label: 'art', href: '#art' },
    { label: 'contact', href: '#contact' },
  ];

  return (
    <>
      <button
        onClick={toggle}
        className="fixed top-4 left-4 z-50 p-2 text-white hover:text-gray-300 transition-colors bg-[#1f1f1f] rounded border border-white/20"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-[#1f1f1f] border-r border-white/10 p-8 transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-gray-300 transition-colors duration-200 capitalize"
              onClick={toggle}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

