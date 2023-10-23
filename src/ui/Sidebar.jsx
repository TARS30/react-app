import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const StyledAside = styled.aside`
  gap: 3.2rem;
  display: flex;
  grid-row: 1 / -1;

  flex-direction: column;
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-0);
  
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
    </StyledAside>
  );
};

export default Sidebar;
