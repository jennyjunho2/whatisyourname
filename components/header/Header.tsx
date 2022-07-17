import { Nav, Col, Icon, Item, Items } from "./styles_Header";
import DarkModeToggle from "./Darkmodetoggle/DarkModeToggle";
import { useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { darkModeAtom } from "../../atoms";
import Image from "next/image";
import { ExtLink } from "./Darkmodetoggle/styles_DarkModeToggle";

function Header() {
  // header scroll animation
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 800) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation])
  /////////////////////////////////////////
  const darkMode = useRecoilValue<boolean>(darkModeAtom);

  return (
    <Nav
      variants="navVariants"
      initial={"top"}
      animate={navAnimation}
    >
      <Col>
        <Icon alt="Logo" src="/images/logo512.png"></Icon>
        <Items>
          <Item>About</Item>
          <Item>Skills</Item>
          <Item>Projects</Item>
        </Items>
      </Col>
      <Col>
        <ExtLink
          href="https://github.com/jennyjunho2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width="35px"
            height="35px"
            src={`/images/Github-Mark-${darkMode ? `Light` : `Dark`}.png`}
            alt="Go to Github Profile"
          />
        </ExtLink>
        <ExtLink
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width="35px"
            height="35px"
            src={`/images/LinkedIn-${darkMode ? `Light` : `Dark`}.png`}
            alt="Go to LinkedIn Profile"
          />
        </ExtLink>
        <DarkModeToggle />
      </Col>
    </Nav>
  );
}

export default Header;
