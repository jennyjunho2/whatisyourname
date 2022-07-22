import { useRecoilValue } from "recoil";
import styled from "styled-components";

interface isDark {
  isDarkMode: boolean;
}

export const DarkModeDiv = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  margin-right: 2rem;
  & > button {
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
    color: ${(props) =>
      props.isDarkMode ? props.theme.color.white : props.theme.color.black};

    &:focus {
      outline: none;
    }
  }
`;

export const ToggleControl = styled.span`
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const ExtLink = styled.a`
  margin-right: 3rem;
`;

export const DarkModeCheckBox = styled.input<isDark>`
  width: 4rem;
  height: 1rem;
  background-color: #555;
  position: relative;
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 0.2rem;
  outline: none;

  &:checked + label {
    left: 3rem;
  }

  &:focus-visible {
    outline: solid 0.2rem white;
  }

  & + label {
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 0.2rem;
    background: #fff;
    opacity: 0.9;
    background-color: ${(props) =>
      props.isDarkMode ? props.theme.color.white : props.theme.color.black};
  }
`;
