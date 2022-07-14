import { Nav, Col, Icon, TitleSpan } from "./styles_Header";

function Header() {
  return (
    <Nav>
      <Col>
        <Icon alt="Logo" src="/images/logo512.png"></Icon>
        <TitleSpan>What Is Your Name?</TitleSpan>
      </Col>
    </Nav>
  );
}

export default Header;
