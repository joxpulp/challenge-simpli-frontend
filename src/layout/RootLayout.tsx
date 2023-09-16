import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import styles from './RootLayout.module.css';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className={`${inter.className} ${styles.rootLayout}`}>
      <Navbar />
      {children}
    </main>
  );
}

export default RootLayout;
