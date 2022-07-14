import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 20px 30px;
  color: black;
  /* border: 1px solid black; */
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 10px;
`;

export const TitleSpan = styled.span`
  margin-top: 3px;
  font-size: 20px;
  font-family: Helvetica, sans-serif;
`;
