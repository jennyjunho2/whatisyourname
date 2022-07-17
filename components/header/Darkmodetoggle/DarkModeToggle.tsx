import { useRecoilState } from "recoil";
import styled from "styled-components";
import { darkModeAtom } from "../../../atoms";
import { DarkModeCheckBox, DarkModeDiv, ToggleControl } from "./styles_DarkModeToggle";

function DarkModeToggle() {
  const [isDark, setIsDark] = useRecoilState(darkModeAtom);

  return (
    <DarkModeDiv>
      <button type="button" onClick={() => setIsDark(false)}>
        ☀
      </button>
      <ToggleControl>
        <DarkModeCheckBox
          className="dmcheck"
          id="dmcheck"
          type="checkbox"
          checked={isDark ? true : false}
          onChange={() => setIsDark((prev) => !prev)}
        />
        <label htmlFor="dmcheck" />
      </ToggleControl>
      <button type="button" onClick={() => setIsDark(true)}>
        ☾
      </button>
    </DarkModeDiv>
  );
}

export default DarkModeToggle;