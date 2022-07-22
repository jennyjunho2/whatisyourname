import { IndexContainer, BackgroundImage } from "./index/styles_index";
import { useDarkMode } from "../hooks/useDarkMode";
import FirstSection from "./index/FirstSection/FirstSection";


function Home() {
  const [darkMode] = useDarkMode();

  return (
    <IndexContainer isDarkMode={darkMode}>
      <BackgroundImage>
        <FirstSection />
      </BackgroundImage>
    </IndexContainer >
  );
}

export default Home;
