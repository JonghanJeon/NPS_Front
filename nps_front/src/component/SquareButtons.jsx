import React from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const SquareButton = styled.button`
  width: 150px; /* 원하는 너비로 조절 */
  height: 150px; /* 원하는 높이로 조절 */
  font-size: 18px; /* 버튼 텍스트 크기 */
  background-color: #ffffff; /* 배경색 설정 */
  color: black; /* 텍스트 색상 설정 */
  border: none; /* 테두리 제거 (선택 사항) */
  cursor: pointer; /* 커서 모양 설정 */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around; /* 버튼 간 간격 조정 */
`;

const SquareButtons = () => {
  return (
    <ButtonContainer>
      <SquareButton>Button 1</SquareButton>
      <SquareButton>Button 2</SquareButton>
      <SquareButton>Button 3</SquareButton>
      <SquareButton>Button 4</SquareButton>
    </ButtonContainer>
  );
}

export default SquareButtons;