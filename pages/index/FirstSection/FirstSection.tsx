import { useDarkMode } from "../../../hooks/useDarkMode";
import { ButtonContainer, DescriptionContainer, FooterContainer, HomeContainer, ImageContainer, ProfileContainer, RoundButton, Title, TypingDesc } from "./styles_FirstSection";
import TypeAnimation from 'react-type-animation';
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isMobileSideViewOpen, isMobileView } from "../../../utils/atoms";

const MOBILE_VIEW = 1138;

function FirstSection() {
  // Dark Mode Hook
  const [darkMode] = useDarkMode();

  // Header Mobile View
  const [showMobileView, setShowMobileView] = useRecoilState(isMobileView);
  const isOpen = useRecoilValue(isMobileSideViewOpen);


  useEffect(() => {
    if (window.innerWidth >= MOBILE_VIEW) {
      setShowMobileView(false);
    } else if (window.innerWidth < MOBILE_VIEW) {
      setShowMobileView(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_VIEW) {
        setShowMobileView(false);
      } else if (window.innerWidth < MOBILE_VIEW) {
        setShowMobileView(true);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <HomeContainer isOpen={isOpen}>
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