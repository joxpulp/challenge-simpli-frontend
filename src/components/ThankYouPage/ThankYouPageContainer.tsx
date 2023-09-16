import { useRouter } from 'next/router';
import Button from '../Shared/Button/Button';
import styles from './ThankYouPageContainer.module.css';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { ProductTypeEnum } from '@/utils/enums/productType.enum';
import thankYouPageTexts from './texts';

function ThankYouPageContainer({ from }: { from: ProductTypeEnum.MOTO | ProductTypeEnum.ACCE }) {
  const router = useRouter();
  return (
    <div className={styles.thankYouPageContainer}>
      <BiSolidCheckCircle className={styles.thankYouPageIcon} size={200} />
      <h1>{thankYouPageTexts.TITLE}</h1>
      <Button onClick={() => router.push(`/${from}`)} buttonStyle="secondary">
        {thankYouPageTexts.TYP_CTA}
      </Button>
    </div>
  );
}

export default ThankYouPageContainer;
