import Image from "next/image";
import styled from "styled-components";

interface isDark {
  isDarkMode: boolean;
}

export const IndexContainer = styled.div`
  width: 100%;
  height: 300vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: ${props => props.isDarkMode ? props.theme.background.dark : props.theme.background.light};
  transition: background-color 0.3s ease;
`;

export const BackgroundImage = styled.div`
  
`;

