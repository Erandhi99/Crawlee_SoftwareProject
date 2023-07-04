import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 15px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
export const Header = styled.span`
  font-size: 20px;
`;
export const MiddleSection = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

export const Shortcut = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  margin-bottom: 10px;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 18px;
`;
export const ShortcutName = styled.div`
  font-size: 16px;
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 20px 20px;
`;
export const Button = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px 20px;
  border-radius: 15px;
  border: #f0634c solid 2px;
  background-color: white;
  color: #f0634c;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    padding: 17px 22px;
  }
`;