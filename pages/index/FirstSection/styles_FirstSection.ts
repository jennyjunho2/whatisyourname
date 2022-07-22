import styled from "styled-components";

interface isDark {
  isDarkMode: boolean;
}

export const HomeContainer = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  width: inherit;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1220px) {
    padding-top: 1rem;
    flex-direction: column-reverse;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 57rem;
  & > * {
    margin-bottom: 2rem;
  }
`;

export const ImageContainer = styled.div<isDark>`
  padding-left: 100px;
  margin-right: 40px;
  transition: filter 0.3s ease;
  filter: invert(${(props) => (props.isDarkMode ? 0 : 100)});
  @media screen and (max-width: 1220px) {
    margin: 0;
    padding: 0;
  }
`;

export const Title = styled.span<isDark>`
  font-size: 3.6rem;
  font-weight: 500;
  color: ${(props) =>
    props.isDarkMode ? props.theme.color.white : props.theme.color.black};
  transition: color 0.3s ease;
  & > span {
    color: ${(props) => props.theme.color.orange};
  }
`;

export const Span = styled.span<isDark>`
  font-size: 3rem;
  font-weight: 500;
  color: ${(props) =>
    props.isDarkMode ? props.theme.color.white : props.theme.color.black};
`;

export const TypingDesc = styled.div<isDark>`
  font-size: 4.8rem;
  font-weight: 700;
  margin-right: 3rem;
  color: ${(props) => props.theme.color.yellow};
  filter: contrast(${(props) => (props.isDarkMode ? "150%" : "75%")});
  transition: filter 0.3s ease;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6rem;
`;

export const RoundButton = styled.button<isDark>`
  border: 0.3rem solid;
  border-color: ${(props) =>
    props.isDarkMode
      ? props.theme.background.light
      : props.theme.background.dark};
  margin-top: 3.5rem;
  padding: 1.4rem 0;
  appearance: none;
  border-radius: 5rem;
  width: 16rem;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) =>
    props.isDarkMode
      ? props.theme.background.dark
      : props.theme.background.light};
  color: ${(props) =>
    props.isDarkMode
      ? props.theme.background.light
      : props.theme.background.dark};

  font-size: 1.8rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans - serif;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.color.orange};
  }
`;

export const FooterContainer = styled.div`
  width: inherit;
  padding-top: 2rem;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 0.5rem solid;
  border-bottom-color: ${(props) => props.theme.color.orange};
  border-bottom-left-radius: 75%;
  border-bottom-right-radius: 75%;
`;
