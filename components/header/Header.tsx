import { Nav, Col, Icon, Item, Items, ExtLinkImage } from "./styles_Header";
import DarkModeToggle from "./Darkmodetoggle/DarkModeToggle";
import { useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import Image from "next/image";
import { ExtLink } from "./Darkmodetoggle/styles_DarkModeToggle";

function Header() {
  // header scroll animation

  /////////////////////////////////////////
  // dark mode set
  const [darkMode] = useDarkMode();

  return (
    <Nav
      isDarkMode={darkMode}
    >
      <Col>
        <Icon
          alt="Logo"
          src={`/images/logo512-Light.png`}
          isDarkMode={darkMode}
        />
        <Items>
          <Item isDarkMode={darkMode}>About</Item>
          <Item isDarkMode={darkMode}>Skills</Item>
          <Item isDarkMode={darkMode}>Projects</Item>
        </Items>
      </Col>
      <Col>
        <ExtLink
          href="https://github.com/jennyjunho2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExtLinkImage
            width="35px"
            height="35px"
            src={`/images/Github-Mark-Light.png`}
            alt="Go to Github Profile"
            isDarkMode={darkMode}
          />
        </ExtLink>
        <ExtLink
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExtLinkImage
            width="35px"
            height="35px"
            src={`/images/LinkedIn-Light.png`}
            alt="Go to LinkedIn Profile"
            isDarkMode={darkMode}
          />
        </ExtLink>
        <DarkModeToggle />
      </Col>
    </Nav >
  );
}

export default Header;
