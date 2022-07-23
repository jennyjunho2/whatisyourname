import styled from "styled-components";
import { isDark } from "../../utils/interfaces";

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

export const MenuToggle = styled.div`
  display: block;
  z-index: 1;

  & > a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  & > a:hover {
    color: ${(props) => props.theme.color.orange};
  }

  & > input {
    display: block;
    width: 4rem;
    height: 3.2rem;
    position: absolute;
    top: -0.7rem;
    left: -0.5rem;
    cursor: pointer;

    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
  }

  & > span {
    display: block;
    width: 3.3rem;
    height: 0.4rem;
    margin-bottom: 0.5rem;
    position: relative;

    background: rgba(0, 0, 0, 1);
    border-radius: 0.3rem;

    z-index: 1;

    transform-origin: 0.4rem 0;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  & > span:first-child {
    transform-origin: 0% 0%;
  }

  & > span:nth-child(2) {
    transform-origin: 0% 100%;
  }

  & > input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-0.2rem, -0.1rem);
    background: rgba(0, 0, 0, 1);
  }

  & > input:checked ~ span:nth-child(2) {
    transform: rotate(-45deg) translate(0, -0.1rem);
  }

  & > input:checked ~ ul {
    transform: none;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  width: 30rem;
  margin: -10rem 0 0 -5rem;
  padding: 5rem;
  padding-top: 12.5rem;

  background: rgba(255, 255, 255, 1);
  list-style-type: none;

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  & > li {
    padding: 1rem 0;
    font-size: 2.2rem;
  }
`;
