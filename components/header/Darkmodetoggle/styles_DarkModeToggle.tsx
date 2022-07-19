import { useRecoilValue } from "recoil";
import styled from "styled-components";

export const DarkModeDiv = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  margin-right: 20px;
  & > button {
    font-size: 1.2em;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
    color: ${props => props.isDarkMode ? "white" : "dark"};

    &:focus {
      outline: none;
    }
  }
`

export const ToggleControl = styled.span`
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
`

export const ExtLink = styled.a`
  margin-right: 30px;
`

export const DarkModeCheckBox = styled.input`
  width: 40px;
  height: 10px;
  background-color: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;

  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px white;
  }

  & + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.9;
    background-color: #f6f6f6;
  }
`