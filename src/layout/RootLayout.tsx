import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import styles from './RootLayout.module.css';
import { ChildrenProp } from '@/utils/types/children.types';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: ChildrenProp) {
  return (
    <main className={`${inter.className} ${styles.rootLayout}`}>
      <Navbar />
      {children}
    </main>
  );
}

export default RootLayout;
