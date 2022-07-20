import Image from "next/image";
import styled from "styled-components";

interface isDark {
  isDarkMode: boolean;
}

export const Container = styled.div<isDark>`
  width: 100vw;
  height: 300vh;
  background: ${props => props.isDarkMode ? "black" : "white"};
  /* background: linear-gradient(to right, black, rgba(0, 0, 0, 0.7)); */
`;

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 600px;
`

export const ProfileContainter = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 30vh;
  min-height: fit-content;
`

export const DescriptionContainer = styled.div`
  width: 50%;
`

export const ImageContainer = styled.div`
  width: 50%;
`

export const Title = styled.span`
  font-size: 40px;
  margin-bottom: 20px;
`

export const Desc = styled.span`
  font-size: 48px;
  color: ${props => props.theme.color.yellow};
`