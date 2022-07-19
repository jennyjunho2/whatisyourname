import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { useDarkMode } from "../../hooks/useDarkMode";

interface isDark {
  isDarkMode: boolean;
}

export const Nav = styled(motion.nav) <isDark>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 10px 30px;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 50px;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`

export const Icon = styled.img<isDark>`
  width: 96px;
  height: 96px;
  margin-right: 50px;
  transition: filter 0.3s ease;
  filter: invert(${props => props.isDarkMode ? 0 : 100});
`;

export const TitleSpan = styled.span`
  margin-top: 3px;
  font-size: 20px;
  color: black;
`;

export const GithubImage = styled.img`
  width: 20px;
  height: 20px;
`

export const Item = styled.li<isDark>`
  font-size: 24px;
  font-weight: 700;
  transition: color 0.3s ease;
  color: ${props => props.isDarkMode ? "white" : "black"};
  margin-right: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ExtLinkImage = styled(Image) <isDark>`
  transition: filter 0.3s ease;
  filter: invert(${props => props.isDarkMode ? 0 : 100});
`