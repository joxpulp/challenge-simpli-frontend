import styles from './ProductContainerGrid.module.css';
import { ChildrenProp } from '@/utils/types/children.types';

function ProductContainerGrid({ children }: ChildrenProp) {
  return <div className={styles.productContainerGrid}>{children}</div>;
}

export default ProductContainerGrid;
