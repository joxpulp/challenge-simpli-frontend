import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: { children: ReactNode }) {
  return <main className={`${inter.className}`}>{children}</main>;
}

export default RootLayout;
