'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import Sidebar from './Sidebar';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <>
      <Sidebar />
      <main className={`transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        {children}
      </main>
    </>
  );
}

