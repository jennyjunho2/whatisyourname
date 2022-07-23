import { useState } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import DarkModeToggle from "../Darkmodetoggle/DarkModeToggle";
import { DarkModeWrapper, Menu, MenuToggle, MenuToggleWrapper, MobileCol, MobileNav, MobileTitle, MobileTitleWrapper } from "./styles_MobileHeader";

function MobileHeader() {
  const [darkMode] = useDarkMode();

  return (
    <MobileNav>
      <MenuToggleWrapper>
        <MenuToggle>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <Menu>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
          </Menu>
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