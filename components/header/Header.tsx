import { Nav, Col, Item, Items, ExtLinkImage, Title } from "./styles_Header";
import DarkModeToggle from "../Darkmodetoggle/DarkModeToggle";
import { useDarkMode } from "../../hooks/useDarkMode";

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
        <Title isDarkMode={darkMode}>&lt; WIYN /&gt;</Title>
      </Col>
      <Col>
        <Items>
          <Item isDarkMode={darkMode}>About</Item>
          <Item isDarkMode={darkMode}>Skills</Item>
          <Item isDarkMode={darkMode}>Projects</Item>
          <Item isDarkMode={darkMode}>Contact</Item>
        </Items>
        {/* <ExtLink
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
        </ExtLink> */}
        <DarkModeToggle />
      </Col>
    </Nav >
  );
}

export default Header;
