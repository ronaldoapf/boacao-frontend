import styled, {css} from 'styled-components'

const floatingLabelStyles = css`
  label {
    font-size: 10px;
    top: 6px;
  }
`

const errorStyles = css`
  border-color: #FF0000;
  label {
    color: #FF0000;
  }
`

const InputContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background: #fff;
  padding: 6px 12px;
  position: relative;
  border-radius: 8px;
  border: 1px solid #CCCCCC;
  ${({ disabled }) => disabled && css`
    backgrond: #ccc;
  `}
  input {
    flex: 1;
    font-size: 14px;
    border: none;
    outline: none;
    background: transparent;
  }
  label {
    top: 13px;
    left: 12px;
    color: #666;
    line-height: 1;
    font-size: 14px;
    position: absolute;
    pointer-events: none;
    transition: top .1s linear, font-size .1s linear;
  }
  &:focus-within {
    ${({ isSelect }) => !isSelect && css`
      ${floatingLabelStyles}
      border: 1px solid #FEBD59;
      label {
        color: #FEBD59;
      }
    `}
    ${({ error }) => error && errorStyles}
  }
  ${({ value }) => Boolean(value) && floatingLabelStyles}
  ${({ error }) => error && errorStyles}
`

export { InputContainer }