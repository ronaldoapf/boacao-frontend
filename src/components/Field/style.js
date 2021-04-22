import styled from 'styled-components';

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const ErrorText = styled.span`
  color: red;
  width: 100%;
  text-align: right;
  font-size: 13px;
`

export {
  ErrorText,
  FieldContainer,
}