import { ReactNode } from 'react';
import styles from './ProductContainerGrid.module.css';

function ProductContainerGrid({ children }: { children: ReactNode }) {
  return <div className={styles.productContainerGrid}>{children}</div>;
}

export default ProductContainerGrid;
