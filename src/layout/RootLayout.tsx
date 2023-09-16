import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className={`${inter.className}`} style={{ padding: '0 10px' }}>
      <Navbar />
      {children}
    </main>
  );
}

export default RootLayout;
