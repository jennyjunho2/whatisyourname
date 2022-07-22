import { useDarkMode } from "../../hooks/useDarkMode";
import { DarkModeCheckBox, DarkModeDiv, ToggleControl } from "./styles_DarkModeToggle";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <DarkModeDiv isDarkMode={darkMode}>
      <button type="button" onClick={() => setDarkMode(false)}>
        ☀
      </button>
      <ToggleControl>
        <DarkModeCheckBox
          className="dmcheck"
          id="dmcheck"
          type="checkbox"
          checked={darkMode ? true : false}
          onChange={() => setDarkMode((prev) => !prev)}
          darkMode={darkMode}
        />
        <label htmlFor="dmcheck" />
      </ToggleControl>
      <button type="button" onClick={() => setDarkMode(true)}>
        ☾
      </button>
    </DarkModeDiv>
  );
}

export default DarkModeToggle;