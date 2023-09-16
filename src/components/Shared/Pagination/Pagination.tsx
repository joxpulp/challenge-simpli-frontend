import { useRouter } from 'next/router';
import Button from '../Button/Button';
import styles from './Pagination.module.css';
import paginationTexts from './texts';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  limit: number;
}

function Pagination({ totalPages, currentPage, limit }: PaginationProps) {
  const router = useRouter();
  const disabledPrev = currentPage === 1;
  const disabledNext = currentPage === totalPages;
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const omitScroll = { scroll: false };

  const handlePagination = (page: number) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          page,
          limit
        }
      },
      undefined,
      omitScroll
    );
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      router.push(
        {
          pathname: router.pathname,
          query: {
            page: currentPage - 1,
            limit
          }
        },
        undefined,
        omitScroll
      );
    }
  };
  const handleLast = () => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          page: currentPage + 1,
          limit
        }
      },
      undefined,
      omitScroll
    );
  };

  return (
    <div className={styles.paginationContainer}>
      <Button disabled={disabledPrev} onClick={handlePrev} buttonStyle="secondary">
        {paginationTexts.PREV_CTA}
      </Button>
      {pageNumbers.map((pageNumber, index) => (
        <Button buttonStyle="tertiary" extraClass={`${pageNumber === currentPage && styles.active} ${styles.numbers}`} onClick={() => handlePagination(pageNumber)} key={index}>
          {pageNumber}
        </Button>
      ))}
      <Button disabled={disabledNext} onClick={handleLast} buttonStyle="secondary">
        {paginationTexts.NEXT_CTA}
      </Button>
    </div>
  );
}

export default Pagination;
