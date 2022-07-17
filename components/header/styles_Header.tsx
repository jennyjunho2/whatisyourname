import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 10px 30px;
  color: white;
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

export const Icon = styled.img`
  width: 96px;
  height: 96px;
  margin-right: 50px;
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

export const Item = styled.li`
  font-size: 24px;
  font-weight: 700;
  color: black;
  margin-right: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`