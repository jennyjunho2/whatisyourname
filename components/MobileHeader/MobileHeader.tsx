import { useRecoilState } from "recoil";
import { useDarkMode } from "../../hooks/useDarkMode";
import DarkModeToggle from "../Darkmodetoggle/DarkModeToggle";
import { DarkModeWrapper, MenuToggle, MenuToggleWrapper, MobileNav, MobileTitle, MobileTitleWrapper } from "./styles_MobileHeader";
import { isMobileSideViewOpen } from "../../utils/atoms";

function MobileHeader() {
  const [darkMode] = useDarkMode();
  const [isOpen, setIsOpen] = useRecoilState(isMobileSideViewOpen);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <MobileNav>
      <MenuToggleWrapper>
        <MenuToggle
          isDarkMode={darkMode}
          isOpen={isOpen}
        >
          <input type="checkbox" onClick={handleClick} />

          <span></span>
          <span></span>
          <span></span>

          <div></div>
        </MenuToggle>
      </MenuToggleWrapper>
      <MobileTitleWrapper>
        <MobileTitle isDarkMode={darkMode}>
          &lt; WIYN /&gt;
        </MobileTitle>
      </MobileTitleWrapper>
      <DarkModeWrapper>
        <DarkModeToggle />
      </DarkModeWrapper>
    </MobileNav>
  )
};

export default MobileHeader;