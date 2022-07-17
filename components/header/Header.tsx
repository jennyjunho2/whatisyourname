import { Nav, Col, Icon, TitleSpan } from "./styles_Header";
import DarkModeToggle from "./Darkmodetoggle/DarkModeToggle";

function Header() {
  return (
    <Nav>
      <Col>
        <Icon alt="Logo" src="/images/logo512.png"></Icon>
        <TitleSpan>What Is Your Name?</TitleSpan>
        <span>About</span>
        <span>Skills</span>
        <span>Projects</span>
        <Github />
        <Contact />
        <DarkModeToggle />
      </Col>
    </Nav>
  );
}

export default Header;
