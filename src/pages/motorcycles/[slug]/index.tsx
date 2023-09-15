import { useRouter } from 'next/router';

function MotorcycleDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <div>Motorcycle Detail {slug}</div>;
}

export default MotorcycleDetailPage;
