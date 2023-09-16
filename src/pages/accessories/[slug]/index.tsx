import ProductDetailContainer from '@/components/Shared/ProductDetailContainer/ProductDetailContainer';
import { api } from '@/utils/api/api';
import { Product, ProductDetailSSRProps } from '@/utils/types/products.types';
import { GetServerSidePropsContext } from 'next';

function AccessoriesDetailPage({ image, name, price, currency, description, productId }: ProductDetailSSRProps) {
  return <ProductDetailContainer imageUrl={image} title={name} price={price} currency={currency} description={description} productId={productId} />;
}

export default AccessoriesDetailPage;

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const slug = params?.slug;

  try {
    const {
      data: { image, name, price, currency, description, _id }
    } = await api.get<Product>(`/accessories/list/${slug}`);
    return {
      props: { image, name, price, currency, description, productId: _id }
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/accessories?page=1&limit=8',
        permanent: true
      }
    };
  }
}
