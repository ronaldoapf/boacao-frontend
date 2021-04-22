import  * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('O campo é obrigatório'),
  password: yup.string().required('O campo é obrigatório'),
});

export default schema;