import Logo from "./Logo";
import Button from "./Button";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { menuClose } from "../utils/helpers";

const StyledAside = styled.aside`
  gap: 3.2rem;
  display: flex;
  grid-row: 1 / -1;
  flex-direction: column;
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-0);
  @media (max-width: 768px) {
    z-index: 10;
    position: absolute;
    top: 0;
    left: -100%;
    align-items: end;
    width: 100%;
    height: 100%;
    transition: left 0.4s ease;
    
    html.menu-open & {
      left: 0;
    }
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 2px solid var(--color-brand-600);
  border-radius: 5px;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Sidebar = () => {
  const [uploaderVisible, setUploaderVisible] = useState(false);

  const uploaderVisibilityHandler = () => {
    setUploaderVisible(!uploaderVisible);
  };

  return (
    <StyledAside>
      <NavLink to="/dashboard">
        <Logo />
      </NavLink>
      <MainNav />
      {!uploaderVisible && (
        <Button onClick={uploaderVisibilityHandler}>Data uploader</Button>
      )}
      {uploaderVisible && (
        <Uploader uploaderVisibilityHandler={uploaderVisibilityHandler} />
      )}
      <CloseButton onClick={menuClose}>
        <HiXMark />
      </CloseButton>
    </StyledAside>
  );
};

export default Sidebar;
