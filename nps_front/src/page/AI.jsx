import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import AIModal from "../modal/AIModal";

const AI = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <br />
      <CommonTextContainer>
        <CommonTitle>AI 텍스트 분석</CommonTitle>
        <CommonText>
          "AI 를 활용한 텍스트 분석으로 피싱을 판별해드립니다."
        </CommonText>
      </CommonTextContainer>
      <Hr />
      <br /><br /><br />
      <Container>
        <Textarea
          placeholder="통화 내용이나 기타 의심가는 문장을 입력해 주세요."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <PushButton onClick={handleButtonClick}>AI 분석</PushButton>
        {modalOpen && (
          <AIModal
          data = {inputText}
          closeModal = {closeModal}
          />
        )}
        {outputText && <Output>출력 결과: {outputText}</Output>}
        
      </Container>
    </>
  );
};

export default AI;

const CommonTitle = styled.h1`
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 텍스트 그림자 추가 */
`;
const CommonText = styled.h1`
  font-size: 13px;
  color: #8c8c8c;
`;

const CommonTextContainer = styled.div`
  text-align: center;
  align-items: center;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Textarea = styled.textarea`
  font-size: 18px;
  width: 70%;
  height: 300px;
  padding: 10px;    
  border-radius: 5px;
  margin-bottom: 10px;
  resize: none;
  &:focus{
    outline-color: #4287f5;
  }
`;

const Output = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const PushButton = styled.a`
    display: block;
    position: relative;
    float: left;
    width: 120px;
    padding: 0;
    margin: 10px 20px 10px 0;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    color: #FFFFFF;
    background-color: #4287f5;
    border-radius: 5px;
    transition: all 0.2s ;
    box-shadow: 0px 5px 0px 0px #000000;
    &:hover{
        box-shadow: 0px 0px 0px 0px #000000;
        margin-top: 15px;
        margin-bottom: 5px;
    }
`

const Hr = styled.hr`
    width  : 80%;
`;