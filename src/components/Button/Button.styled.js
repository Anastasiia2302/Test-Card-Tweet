import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BtnFollow = styled.button`
  cursor: pointer;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: scale(1.03);
  }
`;

export const BtnFollowing = styled.button`
  padding: 16px;
  width: 196px;
  height: 50px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
`;

export const BtnText = styled.p`
  margin-left: 45px;
  width: 84px;
  height: 22px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
