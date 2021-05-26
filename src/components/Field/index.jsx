import { memo } from 'react';
import PropTypes from 'prop-types';
import { Field as FormikField, getIn } from 'formik';

import { ErrorText, FieldContainer } from './style';

const Field = ({
  name,
  label,
  component: Component,
  ...props
}) => (
  <FormikField name={name}>
    {({
      field,
      form: { touched, errors, setFieldValue }
    }) => {
      const fieldError = errors[name]
      const hasError = fieldError && touched[name]
      return (
        <FieldContainer>
          <Component
            label={label}
            error={hasError}
            setFieldValue={setFieldValue}
            {...field}
            {...props}
          />
          {hasError && <ErrorText>{fieldError}</ErrorText>}
        </FieldContainer>
      )
    }}
  </FormikField>
)

Field.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  component: PropTypes.func
}

export default memo(Field);