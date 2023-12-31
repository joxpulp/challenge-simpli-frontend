import Image from 'next/image';
import styles from './ProductCard.module.css';
import Button from '../Button/Button';
import { useRouter } from 'next/router';
import productCardTexts from './texts';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  urlToGo: string;
}

function ProductCard({ imageUrl, title, subtitle, urlToGo }: ProductCardProps) {
  const router = useRouter();

  const handleGoToUrl = () => {
    router.push(urlToGo);
  };

  return (
    <div className={styles.productCard} onClick={handleGoToUrl}>
      <div className={styles.productCardImage}>
        <Image priority unoptimized src={imageUrl} fill alt="product image" style={{ objectFit: 'contain' }} />
      </div>
      <h1 className={styles.productCardTitle}>{title}</h1>
      <h3 className={styles.productCardSubtitle}>{subtitle}</h3>
      <Button onClick={handleGoToUrl} fullWidth>
        {productCardTexts.MORE_INFO}
      </Button>
    </div>
  );
}

export default ProductCard;
