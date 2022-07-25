import styled from "styled-components";
import { isDark, isOpen } from "../../utils/interfaces";

interface ISideMenuContainerProps extends isDark, isOpen { }

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const IndexContainer = styled.div<isDark>`
  z-index: 0;
  width: 100%;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: ${props => props.isDarkMode ? props.theme.background.dark : props.theme.background.light};
  transition: background-color 0.3s ease;
`;

export const BackgroundImage = styled.div`
`;

export const SideMenuContainer = styled.div<ISideMenuContainerProps>`
  height: 82vh;
  z-index: 99;
  position: absolute;
  margin: 0;
  margin-left: ${props => props.isOpen ? 0 : -40}rem;
  padding: 5rem;
  padding-top: 12.5rem;
  width: 20rem;
    background: ${(props) => props.theme.background.second};
  transition: margin-left 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
`