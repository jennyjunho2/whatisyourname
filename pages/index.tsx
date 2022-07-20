import Head from "next/head";
import { Container, HomeContainer, Title, Desc, ProfileContainter } from "../components/index/styles_index";
import { useDarkMode } from "../hooks/useDarkMode";

function Home() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <Container>
      <HomeContainer>
        <ProfileContainter>
          <Title>Hi! I&apos;m June😎</Title>
          <Desc>&lt;WhatIsYourName? /&gt;</Desc>
        </ProfileContainter>
      </HomeContainer>
    </Container>
  );
}

export default Home;
