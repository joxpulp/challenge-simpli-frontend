import ThankYouPageContainer from '@/components/ThankYouPageContainer/ThankYouPageContainer';
import { api } from '@/utils/api/api';
import { ProductTypeEnum } from '@/utils/enums/productType.enum';
import { LeadReponse } from '@/utils/types/leads.types';
import { GetServerSidePropsContext } from 'next';

function ThankYouPage({ from }: { from: ProductTypeEnum.MOTO | ProductTypeEnum.ACCE }) {
  return <ThankYouPageContainer from={from} />;
}

export default ThankYouPage;

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { lead_id, from } = query;

  if (!lead_id || !from || (from !== ProductTypeEnum.MOTO && from !== ProductTypeEnum.ACCE)) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    };
  }

  try {
    const {
      data: { _id }
    } = await api.get<LeadReponse>(`/leads/list/${lead_id}`);

    if (_id) {
      return {
        props: { from }
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: `/${from}`,
        permanent: true
      }
    };
  }
}
