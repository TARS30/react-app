import styled from "styled-components";

const ButtonIcon = styled.button`
  border: none;
  padding: 0.6rem;
  background: none;
  transition: all 0.2s;
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
