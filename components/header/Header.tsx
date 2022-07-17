import { Nav, Col, Icon, TitleSpan } from "./styles_Header";
import DarkModeToggle from "./Darkmodetoggle/DarkModeToggle";

function Header() {
  return (
    <Nav>
      <Col>
        <Icon alt="Logo" src="/images/logo512.png"></Icon>
        <TitleSpan>What Is Your Name?</TitleSpan>
        <DarkModeToggle />
      </Col>
    </Nav>
  );
}

export default Header;
