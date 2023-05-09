import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 500;
  border-radius: 4px;
  text-decoration: none;
  color: #ebd8ff;
  font-weight: 500;

  &.active {
    color: white;
  }
`;
