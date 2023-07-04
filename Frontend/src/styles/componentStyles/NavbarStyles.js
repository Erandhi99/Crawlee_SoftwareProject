import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  display: flex;
  margin: 0px 5px 0px 260px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const LeftContainer = styled.div`
  font-size: 30px;
  color: rgba(119, 124, 136, 1);
  margin-left: 25px;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex: 2;
  margin-right: 40px;
  align-items: center;
  justify-content: flex-end;
`;
export const LogoutBtn = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 10px;
  border: #f0634c solid 2px;
  background-color: white;
  color: #f0634c;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    padding: 9px 13px;
  }
`;
export const IconBtn = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
`;

export const LinkText = styled.div`
  font-size: 14px;
  text-decoration: none;
`;

export const RightContainer = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: rgba(119, 124, 136, 1);
`;
export const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
`;
export const Line = styled.div`
  height: 35px;
  width: 2px;
  background-color: rgba(119, 124, 136, 1);
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
export const Username = styled.span`
  font-size: 20px;
`;
export const Role = styled.span`
  color: #f0634c;
  font-size: 12px;
  font-weight: 900;
`;