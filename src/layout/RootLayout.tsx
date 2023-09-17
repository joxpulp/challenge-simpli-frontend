import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import styles from './RootLayout.module.css';
import { ChildrenProp } from '@/utils/types/children.types';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: ChildrenProp) {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <div className={styles.rootLayout}>{children}</div>
      <Footer />
    </div>
  );
}

export default RootLayout;
