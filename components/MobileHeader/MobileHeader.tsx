import { useDarkMode } from "../../hooks/useDarkMode";
import { MobileCol, MobileNav, MobileTitle } from "./styles_MobileHeader";

function MobileHeader() {
  const [darkMode] = useDarkMode();

  return (
    <MobileNav>
      <MobileCol>
        <MobileTitle isDarkMode={darkMode}>
          &lt; WIYN /&gt;
        </MobileTitle>
      </MobileCol>
    </MobileNav>
  )
};

export default MobileHeader;