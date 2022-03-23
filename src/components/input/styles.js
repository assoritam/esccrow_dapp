import styled from "styled-components";

export const Label = styled.label`
  font-size: 22px;
  font-weight: 600;
  text-indent: 8px;
  color: var(--dark);
`;
export const Input = styled.input`
  background-color: transparent;
  font-size: 18px;
  font-weight: 300;
  padding: 8px;
  border: 0;
  border-bottom: solid 1px var(--dark);
  color: var(--dark);
  max-width: calc(100% - 50px);
  width: 100%;

  &:focus-visible {
    outline: 0;
  }

  &::placeholder {
    color: var(--dark);
  }
`;
export const CheckboxLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: var(--dark);
  display: flex;
  align-items: center;
  input {
    margin-right: 5px;
    width: auto;
  }
  a {
    color: var(--dark);
  }
  ${(props) => (props.mt ? "margin-top: " + props.mt + ";" : "")}
`;
