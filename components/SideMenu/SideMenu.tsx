import { useRecoilValue } from "recoil";
import { useDarkMode } from "../../hooks/useDarkMode";
import { isMobileSideViewOpen } from "../../utils/atoms";
import { Menu } from "./styles_SideMenu";

function SideMenu() {
  const [darkMode] = useDarkMode();
  const isOpen = useRecoilValue(isMobileSideViewOpen);

  return (
    <Menu isDarkMode={darkMode} isOpen={isOpen}>
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
    </Menu>
  );
}

export default SideMenu;