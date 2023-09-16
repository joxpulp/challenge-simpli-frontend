import Pagination from '@/components/Shared/Pagination/Pagination';
import ProductCard from '@/components/Shared/ProductCard/ProductCard';
import ProductContainer from '@/components/Shared/ProductContainer/ProductContainer';
import ProductContainerGrid from '@/components/Shared/ProductContainerGrid/ProductContainerGrid';
import { api } from '@/utils/api/api';
import { ProductResponse, ProductsPageSSRProps } from '@/utils/types/products.types';
import { GetServerSidePropsContext } from 'next';

function Motorcycles({ products, totalPages, currentPage, limit }: ProductsPageSSRProps) {
  return (
    <ProductContainer>
      <ProductContainerGrid>
        {products.map(({ _id, image, name, price, currency, slug }) => (
          <ProductCard key={_id} imageUrl={image} title={name} subtitle={`$${price} ${currency}`} urlToGo={`/motorcycles/${slug}`} />
        ))}
      </ProductContainerGrid>
      <Pagination totalPages={totalPages} currentPage={currentPage} limit={limit} />
    </ProductContainer>
  );
}

export default Motorcycles;

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const page = query.page || 1;
  const limit = parseInt(query.limit as string) || 8;
  const {
    data: { products, paging }
  } = await api.get<ProductResponse>(`/motorcycles/list?page=${page}&limit=${limit}`);

  return {
    props: { products, totalPages: paging.total_pages, currentPage: paging.current_page, limit }
  };
}
