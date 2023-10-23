
import styled from "styled-components";
import PropTypes from "prop-types";

import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createContext, useContext, useState } from "react";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const StyledListElement = styled.li`
  width: 100%;
`;
const StyledToggle = styled.button`
  background: var(--color-grey-200);
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-100);
    transition: all 0.3s;
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;

    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");

  const [position, setPosition] = useState(null);

  const close = () => {
    setOpenId("");
  };

  const open = setOpenId;
  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

Menus.propTypes = {
  children: PropTypes.node,
};

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);

  const ref = useOutsideClick(close, false)

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

List.propTypes = {
  id: PropTypes.node,
  children: PropTypes.node,
  position: PropTypes.node,
  close: PropTypes.node,
};

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

Toggle.propTypes = {
  id: PropTypes.node,
};
function Button({ children, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <StyledListElement>
      <StyledButton onClick={handleClick}>{children}</StyledButton>
    </StyledListElement>
  );
}

Menus.Menu = Menu;
Menus.List = List;
Menus.Toggle = Toggle;
Menus.Button = Button;

export default Menus;
