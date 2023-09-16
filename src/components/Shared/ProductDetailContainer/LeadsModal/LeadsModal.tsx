import LeadsModalWrapper from './LeadsModalWrapper/LeadsModalWrapper';
import { Form, Formik, FormikHelpers } from 'formik';
import Input from './Input/Input';
import styles from './LeadsModal.module.css';
import Button from '../../Button/Button';
import { schemaValidation } from './schema';
import { api } from '@/utils/api/api';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { LeadReponse } from '@/utils/types/leads.types';
import { ProductTypeEnum } from '@/utils/enums/productType.enum';

interface LeadsModalProps {
  productId: string;
  productName: string;
}

interface initialValues {
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

function LeadsModal({ productId, productName }: LeadsModalProps) {
  const router = useRouter();
  const from = router.pathname.includes(ProductTypeEnum.MOTO) ? ProductTypeEnum.MOTO : ProductTypeEnum.ACCE;
  const [loading, setLoading] = useState(false);
  const initialValues: initialValues = {
    name: '',
    lastname: '',
    email: '',
    phone: ''
  };

  const handleSubmit = async (values: initialValues, helpers: FormikHelpers<initialValues>) => {
    const body = {
      ...values,
      product_id: productId,
      product_name: productName
    };
    setLoading(true);

    try {
      const {
        data: { _id }
      } = await api.post<LeadReponse>('/leads/add', body);
      helpers.resetForm();
      if (_id) {
        setLoading(false);
        router.push({
          pathname: '/typ',
          query: {
            lead_id: _id,
            from
          }
        });
      }
    } catch (error) {
      setLoading(false);
      throw Error('Leads submit failed');
    }
  };

  return (
    <LeadsModalWrapper>
      <Formik initialValues={initialValues} validationSchema={schemaValidation} onSubmit={handleSubmit} validateOnChange validateOnBlur={false}>
        <Form className={styles.leadsFormBox}>
          <Input disabled={loading} label="Name" inputName="name" placeholder="Your name" />
          <Input disabled={loading} label="Lastname" inputName="lastname" placeholder="Your lastname" />
          <Input disabled={loading} label="Email" inputName="email" placeholder="Your email" />
          <Input disabled={loading} label="Phone" inputName="phone" placeholder="Your phone" />
          <Button disabled={loading} type="submit" buttonStyle="secondary">
            Submit
          </Button>
        </Form>
      </Formik>
    </LeadsModalWrapper>
  );
}

export default LeadsModal;
