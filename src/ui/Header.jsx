import { styled } from "styled-components";
import { menuOpen } from "../utils/helpers";

import Button from "./Button";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { HiBars3 } from "react-icons/hi2";

const BurgerContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const Span = styled.span`
  font-size: 25px;
`;

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  text-align: right;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-50);
  width: 100%;
  @media (max-width: 768px) {
    position: fixed;
   
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media(min-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <BurgerContainer>
        <Button size="small">
          <Span onClick={menuOpen}>
            <HiBars3 />
          </Span>
        </Button>
      </BurgerContainer>
      <Flex>
        <UserAvatar />
        <HeaderMenu />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
