import styled from "styled-components";
import { isDark } from "../../utils/interfaces";

interface IMenuProps extends isDark {
  isOpen: boolean;
}

export const Menu = styled.ul<IMenuProps>`
  height: 300vh;
  position: absolute;
  width: 20rem;
  margin: 0;
  margin-left: ${props => props.isOpen ? 0 : -30}rem;
  padding: 5rem;
  padding-top: 12.5rem;

  background: ${(props) =>
    props.isDarkMode
      ? props.theme.background.light
      : props.theme.background.dark};
  list-style-type: none;

  transform-origin: 0% 0%;
  transition: margin-left 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);

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
    font-weight: 500;
    color: ${(props) =>
    props.isDarkMode
      ? props.theme.background.dark
      : props.theme.background.light};
    transition: color 0.3s ease;
    &:hover {
      color: ${(props) => props.theme.color.orange};
    }
  }
`;