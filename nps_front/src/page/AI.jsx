import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import AIModal from "../modal/AIModal";
import { useSpeechRecognition } from "react-speech-kit";
import { color } from "@mui/system";

const AI = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [outresult, setResult] = useState(0);

  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setValue((current) => result);

      axios.post("http://127.0.0.1:5000/result", {
        content : result
        }).then((res) => {
          console.log("res :");
          console.log(res.data.result);
          console.log("outresult :");
          console.log(outresult);
          setResult((current) => res.data.result);
        }).catch((err) => {
            console.log("API 호출 오류 ", err);
        });
    },
  });

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
        <CommonTitle>AI 분석</CommonTitle>
        <CommonText>
          "AI 를 활용한 으로 피싱을 판별해드립니다."
        </CommonText>
      </CommonTextContainer>
      <Hr />
      <br /><br /><br />
      <AIBox>
      <Container>
        <Textarea
          placeholder="통화 내용이나 의심가는 문장을 입력해 주세요."
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
      <Container>
      {/* <PushButton>🎤</PushButton>
      <OutputBox></OutputBox> */}
      <div style={{textAlign : 'center'}}>
        <StartButton onClick={() => listen({ interimResults: false })} disabled={listening}>
          시작
        </StartButton>
        <StopButton onClick={stop} disabled={!listening}>
          종료
        </StopButton>
        {listening && <div style={{ color: 'green', fontWeight : 'bold', textAlign : 'center' }}><br/>On Air</div>}
        {!listening && <div style={{ color: 'gray', fontWeight : 'bold', textAlign : 'center' }}><br/>On Air</div>}
        <div>{value}</div>
        <OutputBox>{outresult} %</OutputBox>
      </div>
      </Container>
      </AIBox>
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
  width: 40%;
  height: 100%;
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

const OutputBox = styled.div`
  margin-top : 10px;
  width: 100%;
  font-size: 25px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;


const AIBox = styled.div`
  display: flex;
  justify-content: center;
`

const StartButton = styled.button`
  background-color: #4287f5;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #0054ac;
  }

  &:disabled {
    background-color: #b0b0b0;
    cursor: not-allowed;
  }
`;

const StopButton = styled.button`
  background-color: #4287f5;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #0054ac;
  }

  &:disabled {
    background-color: #b0b0b0;
    cursor: not-allowed;
  }
`;
