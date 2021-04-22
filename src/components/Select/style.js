import styled from 'styled-components';

const SelectContainer = styled.div`
  width: 100%;
`

const OptionsContainer = styled.div`
  min-width: ${({ minWidth }) => minWidth}px;
`

export {
  SelectContainer,
  OptionsContainer,
}