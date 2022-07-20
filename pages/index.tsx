import Head from "next/head";
import Image from "next/image";
import { Container, HomeContainer, Title, Desc, ProfileContainter, ImageContainer, DescriptionContainer } from "../components/index/styles_index";
import { useDarkMode } from "../hooks/useDarkMode";

function Home() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <Container isDarkMode={darkMode}>
      <HomeContainer>
        <ProfileContainter>
          <DescriptionContainer>
            <Title>Hi! My name is June😎</Title>
            <Desc>&lt;WhatIsYourName? /&gt;</Desc>
          </DescriptionContainer>
          <ImageContainer>
            <Image
              width={32}
              height={32}
              src="/images/logo512-Light.png"
            />
          </ImageContainer>
        </ProfileContainter>
      </HomeContainer>
    </Container >
  );
}

export default Home;
