import { ReactNode } from 'react';
import styles from './ProductContainer.module.css';

function ProductContainer({ children }: { children: ReactNode }) {
  return <div className={styles.productContainer}>{children}</div>;
}

export default ProductContainer;
