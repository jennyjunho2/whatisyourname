import Header from "../../../components/header/Header";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { ButtonContainer, DescriptionContainer, FooterContainer, HomeContainer, ImageContainer, ProfileContainer, RoundButton, Title, TypingDesc } from "./styles_FirstSection";
import TypeAnimation from 'react-type-animation';
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileHeader from "../../../components/MobileHeader/MobileHeader";

const MOBILE_VIEW = 1138;

function FirstSection() {
  // Dark Mode Hook
  const [darkMode] = useDarkMode();

  // Header Mobile View
  const [showMobileNavView, SetShowMobileNavView] = useState<boolean>(false);
  console.log(showMobileNavView);

  useEffect(() => {
    if (window.innerWidth >= MOBILE_VIEW) {
      SetShowMobileNavView(false);
    } else if (window.innerWidth < MOBILE_VIEW) {
      SetShowMobileNavView(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_VIEW) {
        SetShowMobileNavView(false);
      } else if (window.innerWidth < MOBILE_VIEW) {
        SetShowMobileNavView(true);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <HomeContainer>
      {!showMobileNavView ? <Header /> : <MobileHeader />}
      <ProfileContainer>
        <DescriptionContainer>
          <Title isDarkMode={darkMode}>Hi! My name is <span>June 😎</span></Title>
          <Title isDarkMode={darkMode}>and</Title>
          <TypingDesc isDarkMode={darkMode}>
            <TypeAnimation
              cursor={true}
              sequence={[
                '<WhatIsYourName? />', 1000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </TypingDesc>
          <Title isDarkMode={darkMode}>End-to-End Developer</Title>
          <ButtonContainer>
            <RoundButton isDarkMode={darkMode}>
              Pick me!
            </RoundButton>
            <RoundButton isDarkMode={darkMode}>
              Get Resume
            </RoundButton>
          </ButtonContainer>
        </DescriptionContainer>
        <ImageContainer isDarkMode={darkMode}>
          <Image
            width={400}
            height={400}
            src="/images/logo512-Light.png"
            alt="Image loading error..."
          />
        </ImageContainer>

      </ProfileContainer>
      <FooterContainer>

      </FooterContainer>
    </HomeContainer>
  );
}

export default FirstSection;