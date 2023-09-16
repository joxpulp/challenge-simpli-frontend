import Image from 'next/image';
import styles from './ProductDetailContainer.module.css';
import Button from '../Button/Button';
import { Exo } from 'next/font/google';

const exo = Exo({ subsets: ['latin'], weight: ['400'] });

interface ProductDetailContainerProps {
  imageUrl: string;
  title: string;
  price: number;
  currency: string;
  description: string;
}

function ProductDetailContainer({ imageUrl, title, price, currency, description }: ProductDetailContainerProps) {
  return (
    <div className={`${styles.productDetailContainer} ${exo.className}`}>
      <div className={styles.productDetailContainerImage}>
        <Image unoptimized src={imageUrl} fill alt="product image" style={{ objectFit: 'contain' }} />
      </div>
      <div className={styles.productDetailContainerItems}>
        <div className={styles.productDetailContainerHeader}>
          <h1>{title}</h1>
          <h4>
            {currency.toUpperCase()} {price}
          </h4>
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
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailContainer;
