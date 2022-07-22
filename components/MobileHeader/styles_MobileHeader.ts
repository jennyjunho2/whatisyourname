import styled from "styled-components";
import { isDark } from "../../utils/interfaces";

export const MobileNav = styled.nav<isDark>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

export const MobileCol = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-left: 3rem;
  }
  &:last-child {
    margin-right: 5rem;
  }
`;

export const MobileTitle = styled.span<isDark>`
  font-size: 4.8rem;
  font-weight: 800;
  color: ${(props) =>
    props.isDarkMode ? props.theme.color.white : props.theme.color.black};
  transition: all 0.3s ease;
  margin-left: 5rem;
  margin-right: 5rem;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
    filter: contrast(${(props) => (props.isDarkMode ? "150%" : "75%")});
  }
`;
