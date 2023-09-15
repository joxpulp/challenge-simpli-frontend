import { useRouter } from 'next/router';

function AccessoriesDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Accesories Detail {slug}</div>;
}

export default AccessoriesDetailPage;
