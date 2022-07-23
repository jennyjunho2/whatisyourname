import { IndexContainer, BackgroundImage, Container, Top, Bottom } from "./index/styles_index";
import { useDarkMode } from "../hooks/useDarkMode";
import FirstSection from "./index/FirstSection/FirstSection";
import { useRecoilValue } from "recoil";
import { isMobileSideViewOpen, isMobileView } from "../utils/atoms";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/header/Header";
import MobileHeader from "../components/MobileHeader/MobileHeader";

function Home() {
  const [darkMode] = useDarkMode();
  // // Header Mobile NavBar Opened
  const isOpen = useRecoilValue(isMobileSideViewOpen);
  // If Side menu is needed
  const isMobile = useRecoilValue(isMobileView);

  return (
    <Container>
      <Top>
        {isMobile ? <SideMenu /> : null}
      </Top>
      <Bottom>
        <IndexContainer isDarkMode={darkMode}>
          <BackgroundImage>
            {!isMobile ? <Header /> : <MobileHeader />}
            <FirstSection />
          </BackgroundImage>
        </IndexContainer >
      </Bottom>
    </Container>
  );
}

export default Home;
