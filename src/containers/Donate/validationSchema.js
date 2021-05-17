import  * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required('O campo é obrigatório'),
  description: yup.string().required('O campo é obrigatório'),
  categoryId: yup.string().required('O campo é obrigatório'),
});

export default schema;