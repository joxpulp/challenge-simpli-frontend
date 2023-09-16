import ProductCard from '@/components/Shared/ProductCard/ProductCard';
import ProductContainer from '@/components/Shared/ProductContainer/ProductContainer';
import ProductContainerGrid from '@/components/Shared/ProductContainerGrid/ProductContainerGrid';
import { api } from '@/utils/api/api';
import { Product, ProductResponse } from '@/utils/types/products.types';

function Motorcycles({ motorcycles }: { motorcycles: Product[] }) {
  return (
    <ProductContainer>
      <ProductContainerGrid>
        {motorcycles.map(motorcycle => (
          <ProductCard key={motorcycle._id} imageUrl={motorcycle.image} title={motorcycle.name} subtitle={`$${motorcycle.price} ${motorcycle.currency}`} urlToGo={`/motorcycles/${motorcycle.slug}`} />
        ))}
      </ProductContainerGrid>
    </ProductContainer>
  );
}

export default Motorcycles;

export async function getServerSideProps() {
  const { data } = await api.get<ProductResponse>('/motorcycles/list?page=1&limit=8');
  return {
    props: { motorcycles: data.products, paging: data.paging }
  };
}
