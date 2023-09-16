import * as Yup from 'yup';

export const schemaValidation = Yup.object().shape({
  name: Yup.string().min(3, 'Name must have at least 3 characters').required('Name is required'),
  lastname: Yup.string().min(3, 'Lastname must have at least 3 characters').required('Lastname is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phone: Yup.string().min(10, 'Phone number must have at least 10 characters').required('Phone number is required')
});
