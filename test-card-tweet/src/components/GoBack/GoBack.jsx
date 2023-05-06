import { HiChevronLeft } from "react-icons/hi";
import { StyledLink } from "../GoBack/GoBack.styled";




export const GoBack = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiChevronLeft size="24" />
      {children}
    </StyledLink>
  );
};
