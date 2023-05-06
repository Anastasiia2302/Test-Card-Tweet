import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #3B3591;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: #5905F0;
  }
`;