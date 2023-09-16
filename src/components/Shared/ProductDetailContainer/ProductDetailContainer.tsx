import Image from 'next/image';
import styles from './ProductDetailContainer.module.css';
import Button from '../Button/Button';
import { Exo } from 'next/font/google';

const exo = Exo({ subsets: ['latin'], weight: ['400'] });

function ProductDetailContainer() {
  return (
    <div className={`${styles.productDetailContainer} ${exo.className}`}>
      <div className={styles.productDetailContainerImage}>
        <Image unoptimized src={'/deluxe-foot.png'} fill alt="product image" style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.productDetailContainerItems}>
        <div className={styles.productDetailContainerHeader}>
          <h1>Kit Proteccion</h1>
          <h4>USD 400</h4>
        </div>
        <div className={styles.productDetailContainerButtons}>
          <Button fullWidth extraClass={`${exo.className}`}>
            Purchase
          </Button>
          <Button fullWidth extraClass={`${exo.className}`} buttonStyle="secondary">
            Add to cart
          </Button>
        </div>
        <div className={styles.productDetailContainerDescription}>
          <h3>Description</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius dolor doloremque et, autem quibusdam hic enim temporibus iure culpa eum quaerat vitae quis adipisci eligendi, quod, repellendus consectetur nesciunt a!</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailContainer;
