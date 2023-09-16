import ProductDetailContainer from '@/components/Shared/ProductDetailContainer/ProductDetailContainer';
import { api } from '@/utils/api/api';
import { Product, ProductDetailSSRProps } from '@/utils/types/products.types';
import { GetServerSidePropsContext } from 'next';

function MotorcycleDetailPage({ image, name, price, currency, description }: ProductDetailSSRProps) {
  return <ProductDetailContainer imageUrl={image} title={name} price={price} currency={currency} description={description} />;
}

export default MotorcycleDetailPage;

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const slug = params?.slug;

  try {
    const {
      data: { image, name, price, currency, description }
    } = await api.get<Product>(`/motorcycles/list/${slug}`);
    return {
      props: { image, name, price, currency, description }
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    };
  }
}
