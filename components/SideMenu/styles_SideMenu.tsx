import styled from "styled-components";
import { isDark } from "../../utils/interfaces";

export const Menu = styled.ul<isDark>`
  font-family: "Prompt", "Mulish", sans-serif;
  list-style-type: none;

  transform-origin: 0% 0%;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  & > li {
    position: absolute;
    padding: 1rem 0;
    font-size: 2.2rem;
  }

  & > a {
    font-size: 3rem;
    text-decoration: none;
    font-weight: 400;
    color: ${(props) => props.theme.background.light};
    transition: color 0.3s ease;
    &:hover {
      color: ${(props) => props.theme.misc.accent};
    }
  }
`;

export const CloseMark = styled.div<isDark>`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  left: 200px;
  font-size: 64px;
  color: ${(props) => props.theme.background.light};
`