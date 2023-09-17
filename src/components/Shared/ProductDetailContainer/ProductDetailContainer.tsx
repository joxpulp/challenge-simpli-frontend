import Image from 'next/image';
import styles from './ProductDetailContainer.module.css';
import Button from '../Button/Button';
import { Exo } from 'next/font/google';
import LeadsModal from './LeadsModal/LeadsModal';
import productDetailContainerTexts from './texts';
import Link from 'next/link';
import { useRouter } from 'next/router';

const exo = Exo({ subsets: ['latin'], weight: ['400'] });

interface ProductDetailContainerProps {
  imageUrl: string;
  title: string;
  price: number;
  currency: string;
  description: string;
  productId: string;
}

function ProductDetailContainer({ imageUrl, title, price, currency, description, productId }: ProductDetailContainerProps) {
  const router = useRouter();

  return (
    <div className={`${styles.productDetailContainer} ${exo.className}`}>
      <div className={styles.productDetailContainerImage}>
        <Image unoptimized src={imageUrl} fill alt="product image" style={{ objectFit: 'contain' }} />
      </div>
      <div className={styles.productDetailContainerItems}>
        <div className={styles.productDetailContainerHeader}>
          <Link href={router.pathname.replace('/[slug]', '')}>{productDetailContainerTexts.BACK_TO_CATALOG}</Link>
          <h1>{title}</h1>
          <h4>
            {currency.toUpperCase()} {price}
          </h4>
        </div>
        <div className={styles.productDetailContainerButtons}>
          <Button fullWidth extraClass={`${exo.className}`}>
            {productDetailContainerTexts.PURCHASE_CTA}
          </Button>
          <LeadsModal productId={productId} productName={title} />
        </div>
        <div className={styles.productDetailContainerDescription}>
          <h3>{productDetailContainerTexts.DESCRIPTION_TITLE}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailContainer;
