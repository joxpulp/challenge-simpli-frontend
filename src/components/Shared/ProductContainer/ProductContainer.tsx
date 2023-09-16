import styles from './ProductContainer.module.css';
import { ChildrenProp } from '@/utils/types/children.types';

function ProductContainer({ children }: ChildrenProp) {
  return <div className={styles.productContainer}>{children}</div>;
}

export default ProductContainer;
