import { BtnFollow, BtnFollowing, BtnText } from "./Button.styled";

export const Button = () => {
  return (
    <>
      <BtnFollow type="button">
        <BtnText>Follow</BtnText>
      </BtnFollow>
      <BtnFollowing type="button">
        <BtnText>Follow</BtnText>
      </BtnFollowing>
    </>
  );
};
