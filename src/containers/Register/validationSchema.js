import  * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('O campo é obrigatório'),
  email: yup.string().required('O campo é obrigatório'),
  phone: yup.string().required('O campo é obrigatório'),
  password: yup.string().required('O campo é obrigatório'),
  confirmPassword: yup.string().required('O campo é obrigatório')
});

export default schema;