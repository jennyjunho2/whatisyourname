import { Props } from "next/script";
import { propTypes } from "react-bootstrap/esm/Image";
import styled from "styled-components";
import { isDark } from "../../utils/interfaces";

interface IMenuToggleProps extends isDark {
  isOpen: boolean;
}

export const MobileNav = styled.div<isDark>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
`;

export const MobileCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileTitleWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileTitle = styled.span<isDark>`
  font-size: 4.2rem;
  font-weight: 800;
  color: ${(props) =>
    props.isDarkMode ? props.theme.color.white : props.theme.color.black};
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
    filter: contrast(${(props) => (props.isDarkMode ? "150%" : "75%")});
  }
`;

export const DarkModeWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuToggleWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuToggle = styled.div<IMenuToggleProps>`
  display: block;
  position: relative;
  z-index: 1;

  & > input {
    display: block;
    width: 4rem;
    height: 3.2rem;
    position: absolute;
    top: -0.7rem;
    left: -0.5rem;
    cursor: pointer;

    opacity: 0;
    z-index: 3;

    -webkit-touch-callout: none;
  }

  & > span {
    display: block;
    width: 3.3rem;
    height: 0.4rem;
    margin-bottom: 0.5rem;
    position: relative;

    background: ${(props) =>
      props.isDarkMode
        ? props.theme.background.light
        : props.theme.background.dark};
    border-radius: 0.3rem;
    z-index: 2;
    transform-origin: 0.4rem 0;

    transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.3s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.3s ease;
  }

  & > span:first-child {
    transform-origin: 0% 0%;
  }

  & > span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  & > input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: ${(props) =>
      props.isDarkMode
        ? props.theme.background.dark
        : props.theme.background.light};
  }

  & > input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  & > input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
`;
