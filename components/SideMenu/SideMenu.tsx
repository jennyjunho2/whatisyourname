import { useRecoilState } from "recoil";
import { useDarkMode } from "../../hooks/useDarkMode";
import { isMobileSideViewOpen } from "../../utils/atoms";
import { MenuToggle, MenuToggleWrapper } from "../MobileHeader/styles_MobileHeader";
import { CloseMark, Menu } from "./styles_SideMenu";

function SideMenu() {
  const [darkMode] = useDarkMode();
  const [isOpen, setIsOpen] = useRecoilState(isMobileSideViewOpen);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CloseMark
        isDarkMode={darkMode}
        onClick={handleClick}
      >&times;</CloseMark>
      <Menu isDarkMode={darkMode} isOpen={isOpen}>
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Info</li></a>
        <a href="#"><li>Contact</li></a>
      </Menu>
    </>
  );
}

export default SideMenu;