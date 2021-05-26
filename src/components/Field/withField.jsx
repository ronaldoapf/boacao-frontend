import Field from '.';

const withField = WrappedComponent => function RenderComponent(props) {
  return (
    <Field {...props} component={WrappedComponent} />
  )
}

export default withField;
