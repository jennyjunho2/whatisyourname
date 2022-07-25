import { IndexContainer, BackgroundImage, Container, SideMenuContainer } from "./index/styles_index";
import { useDarkMode } from "../hooks/useDarkMode";
import FirstSection from "./index/FirstSection/FirstSection";
import { useRecoilState, useRecoilValue } from "recoil";
import { isMobileSideViewOpen, isMobileView } from "../utils/atoms";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import { useEffect } from "react";

const MOBILE_VIEW = 1138;

function Home() {
  // Dark Mode
  const [darkMode] = useDarkMode();
  // Header Mobile NavBar Opened
  const [isOpen, setIsOpen] = useRecoilState(isMobileSideViewOpen);
  // If Side menu is needed
  const [showMobileView, setShowMobileView] = useRecoilState(isMobileView);

  useEffect(() => {
    if (window.innerWidth >= MOBILE_VIEW) {
      setShowMobileView(false);
    } else if (window.innerWidth < MOBILE_VIEW) {
      setShowMobileView(true);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_VIEW) {
        setShowMobileView(false);
        setIsOpen(false);
      } else if (window.innerWidth < MOBILE_VIEW) {
        setShowMobileView(true);
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return (
    <Container>
      {!showMobileView ? null : (
        <SideMenuContainer isDarkMode={darkMode} isOpen={isOpen}>
          <SideMenu />
        </SideMenuContainer>
      )}
      <IndexContainer isDarkMode={darkMode}>
        <BackgroundImage>
          {!showMobileView ? <Header /> : <MobileHeader />}
          <FirstSection />
        </BackgroundImage>
      </IndexContainer >
    </Container>
  );
}

export default Home;
