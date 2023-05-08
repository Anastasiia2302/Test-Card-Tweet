import { BtnFollow, BtnText, ButtonContainer } from "./Button.styled";

export const Button = () => {
  const handleClick = () => {
    
   }
  return (
    <ButtonContainer>
      <BtnFollow type='button' onClick={handleClick}>
        <BtnText>Follow</BtnText>
      </BtnFollow>
      {/* <BtnFollowing type="button">
        <BtnText>Following</BtnText>
      </BtnFollowing> */}
    </ButtonContainer>
  );
};
