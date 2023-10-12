import React from 'react';
import styled, {keyframes} from 'styled-components';
import { AiFillCloseCircle, AiFillCheckCircle, AiFillWarning, AiFillAlert } from "react-icons/ai";
import { useState } from 'react';
import { useEffect } from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import axios from 'axios';
import { Box } from '@mui/material';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function AIModal({data, closeModal}){
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(0)

    useEffect(()=> {
        console.log("inputText : ", data);
        console.log(data);
        axios.post("http://127.0.0.1:5000/result", {
        content : data
        }).then((res) => {
            setLoading(true);
            setResult(res.data.result);
        }).catch((err) => {
            console.log("API 호출 오류 ", err);
        })
    }, []);


            
    return (
        <>
        <Container>
            {
            loading ? (
                <>
                <Fade>
                <Icon>
                    {
                        result >= 75 ? (
                            <AiFillAlert color='red' size='240'/>
                        ) : result >= 50 ? (
                            <AiFillCloseCircle color='red' size="240"/>
                        ) : result >= 25 ? (
                            <AiFillWarning color='#FFE400' size='240'/>
                        ) : (
                            <AiFillCheckCircle color='green' size='240'/>
                        )
                    }
                    
                </Icon>
                <TextWrapper>
                    {
                        result >= 75 ? (
                            <>
                                <AIText>{result}% 확률로 보이스피싱입니다.</AIText>
                                <AIText>*경고* 보이스 피싱 입니다.</AIText>
                                <AIText>즉시 경찰서에 연락하거나 전화를 끊으십시오.</AIText>
                                <Text>전화사기 110 또는 1379</Text>
                            </>
                        ) : result >= 50 ? (
                            <>
                                <AIText>{result}% 확률로 보이스피싱입니다.</AIText>
                                <AIText>*주의* 보이스피싱 위험 단계 입니다.</AIText>
                                <AIText>보이스피싱 같다면 전화를 끊으십시오.</AIText>
                                <Text>전화사기 110 또는 1379</Text>
                            </>
                        ) : result >= 25 ? (
                            <>
                                <AIText>{result}% 확률로 보이스피싱입니다.</AIText>
                                <AIText>보이스 피싱 의심 단계 입니다.</AIText>
                                <Text>전화사기 110 또는 1379</Text>
                            </>
                        ) : (
                            <>
                                <AIText>{result}% 확률로 보이스피싱입니다.</AIText>
                                <AIText>보이스 피싱 안전 단계 입니다.</AIText>
                                <Text>전화사기 110 또는 1379</Text>
                            </>
                        )
                    }
                </TextWrapper>
                <Close onClick={closeModal}>X</Close>
                </Fade>
                </>
            ) : (
                <>
                <PuffLoader color="#36d7b7" />
                <Close onClick={closeModal}>X</Close>
                </>
            )
            }
        </Container>
        </>
    );
}

export default AIModal;

const Fade = styled.div`
    width: 800px;
    height: 500px;

    /* 최상단 위치 */
    z-index: 999;
    
    /* 중앙 배치 */
    /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
    /* translate는 본인의 크기 기준으로 작동한다. */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;

     /* 모달창 디자인 */
    background-color: white;
    animation: ${fadeIn} 1s ease;
`

const Container = styled.div`
    width: 800px;
    height: 500px;

    /* 최상단 위치 */
    z-index: 999;
    
    /* 중앙 배치 */
    /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
    /* translate는 본인의 크기 기준으로 작동한다. */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;

     /* 모달창 디자인 */
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
`

const Icon = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 중앙 정렬 */
    align-items:center; /* 가로 중앙 정렬 */
`

const TextWrapper = styled.div`
    height: 500px;
   display: flex;
   flex-direction: column;
   justify-content: center; /* 세로 중앙 정렬 */
   align-items:center; /* 가로 중앙 정렬 */
`

const AIText = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const Text = styled.div`
    font-size: 15px;
`

const Close = styled.button`
    position: absolute;
    font-size: 25px;
    right: 10px;
    top: 10px;
    background-color: white;
    color: #4b62f1;
    border: none;
    cursor: pointer;
`