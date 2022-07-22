import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

interface isDark {
  isDarkMode: boolean;
}

export const Nav = styled(motion.nav)<isDark>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

export const Title = styled.span<isDark>`
  font-size: 4.8rem;
  font-weight: 800;
  color: ${(props) =>
    props.isDarkMode ? props.theme.color.white : props.theme.color.black};
  transition: all 0.3s ease;
  margin-left: 7rem;
  margin-right: 5rem;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
    filter: contrast(${(props) => (props.isDarkMode ? "150%" : "75%")});
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-left: 3rem;
  }
  &:last-child {
    margin-right: 5rem;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const TitleSpan = styled.span`
  margin-top: 0.3rem;
  font-size: 2rem;
  color: ${(props) => props.theme.color.black};
`;

export const Item = styled.li<isDark>`
  font-size: 3rem;
  font-weight: 700;
  transition: color 0.3s ease;
  color: ${(props) =>
    props.isDarkMode ? props.theme.color.white : props.theme.color.black};
  margin-right: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:last-child {
    margin-right: 7rem;
  }
  &:hover {
    color: ${(props) => props.theme.color.orange};
  }
`;

export const ExtLinkImage = styled(Image)<isDark>`
  transition: filter 0.3s ease;
  filter: invert(${(props) => (props.isDarkMode ? 0 : 100)});
`;
