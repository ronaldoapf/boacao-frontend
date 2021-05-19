import  * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('O campo é obrigatório'),
  email: yup.string().required('O campo é obrigatório'),
  phone: yup.string().required('O campo é obrigatório'),
  password: yup.string().required('O campo é obrigatório'),
  passwordConfirmation: yup.string().required('O campo é obrigatório').oneOf([
    yup.ref('password'), null
  ], 'As senhas devem ser iguais')
});

export default schema;