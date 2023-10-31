import React from "react";
import Slider from "../component/Slider";
import AI from "./AI.jsx";
import {FaSistrix, FaClipboardList, FaFlag, FaBrain, FaPlay} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Main = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <SlideWrapper>
                    <Slider/>
                </SlideWrapper>
                <br />
                <AI/>
                <hr/>
                <ButtonWrapper>
                    <MainButtonBox onClick={() => navigate("/number-search")}>
                        <FaSistrix size={27} color = '#4B62F1'/>   
                        <br />     
                         번호검색
                    </MainButtonBox>
                    <MainButtonBox onClick={()=>{navigate("/board")}}>
                        <FaClipboardList size={27} color = '#4B62F1'/>
                        <br />
                        게시판
                    </MainButtonBox>
                    <MainButtonBox onClick={() => navigate("/news")}>
                        <FaFlag size={27} color = '#4B62F1'/>
                        <br />
                        최근 뉴스
                    </MainButtonBox>
                    <MainButtonBox onClick={() => navigate("/education-video")}>
                        <FaPlay size={27} color = '#4287f5'/>
                        <br />
                        관련영상
                    </MainButtonBox>
                    <MainButtonBox onClick={() => navigate("/ai-text-analysis")}>
                        <FaBrain size={27} color = '#4287f5'/>
                        <br />
                        AI 분석
                    </MainButtonBox>
                </ButtonWrapper>
            </div>
        </>
    );
}

export default Main;

const SlideWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
`

const TextWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const Title = styled.h1`
    color: #4B62F1;
    font-size: 18px;
`

const Text = styled.div`
    font-weight: bold;
    font-size: 10px;
`

const MainButtonBox = styled.div`
    animation: ${fadeIn} 1s ease;
    width: 160px; /* 원하는 너비로 조절 */
    height: 160px; /* 원하는 높이로 조절 */
    font-weight: bold;
    color : #4B62F1;
    display: flex; /* 컨텐츠를 세로 중앙으로 정렬하기 위해 flex 컨테이너로 설정 */
    flex-direction: column;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    align-items: center;

    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    @media (max-width: 767px) {
        width: 90px; /* 작은 화면에서 크기 조절 */
        height: 90px;
    }
`