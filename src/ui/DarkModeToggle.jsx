import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const DarkModeToggle = () => {
  const {darkMode, toggleDarkMode} = useDarkMode()

  return (
    <ButtonIcon onClick={toggleDarkMode} >
      {darkMode ? <HiOutlineSun/> : <HiOutlineMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
