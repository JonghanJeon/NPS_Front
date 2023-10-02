import React from "react";
import axios from "axios";
import styled, { keyframes }  from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ArticleList = () => {

    const navigate = useNavigate();

    const [boardList, setBoardList] = useState([]);

    useEffect(()=> {
        axios.get("http://127.0.0.1:5000/board", {widthCredentials:true})
        .then(res => {
            setBoardList(res.data);
            console.log("Board Loading Success.");
        })
        .catch(err => {
            console.log("API 호출 에러 ", err);
        });
    },[])

    function handelClickBoard(id){
        navigate(`/board/${id}`);
    }

    return (
        <><br/>
        <CommonTextContainer>
            <CommonTitle>게시판</CommonTitle>
            <CommonText>"여러 사람들과 피싱 사례 및 정보를 공유하세요."</CommonText>
        </CommonTextContainer>
        <Hr/>
        <BoardContainer> 
            <BoardName>작성자</BoardName>
            <BoardTitle>제목</BoardTitle> 
        </BoardContainer>
        {boardList.map((board, index) => (
        <BoardWrapper key={index} onClick={() => {
            handelClickBoard(board.id);
        }}> 
            <BoardName2>{board.name}</BoardName2>
            <BoardTitle2>{board.title}</BoardTitle2> 
        </BoardWrapper>
        ))}
        <BoardButton>
            <ListButton onClick={() => {
                navigate("/board");
            }}>글작성</ListButton>
        </BoardButton>
        </>
    );
}

export default ArticleList;

const BoardContainer = styled.div`
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    background-color: #4287f5;
    color: white;
`
const BoardButton = styled.div`
    width: 80%;
    height: 50px;
    margin: 10px auto;
`

const ListButton = styled.a`
    display: block;
    position: relative;
    float: right;
    width: 80px;
    padding: 0;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    color: #FFF;
    border-radius: 5px;
    transition: all 0.2s ;
    background-color: #5DC8CD;
    cursor: pointer;
    &:hover{
        background-color: #01939A;
    }
`

const BoardWrapper = styled.div`
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    border-bottom: 1px solid #BDBDBD;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
    &:hover {
    background-color: #f2f9ff; /* 마우스 호버 시 연한 파란색 배경으로 변경 */
    transform: scale(1.02); /* 약간 확대되는 애니메이션 효과 */
    }
    animation: fadeInUp 0.5s ease-in-out;

    @keyframes fadeInUp {
        0% {
        opacity: 0;
        transform: translateY(20px);
        }
        100% {
        opacity: 1;
        transform: translateY(0);
        }
    }
`
const BoardTitle = styled.div`
    width:80%;
    font-weight: bold;
    text-align: center;
`

const BoardTitle2 = styled.div`
    width:80%;
    text-align: center;
`

const BoardName = styled.div`
    width:20%;
    font-weight: bold;
    text-align: center;
    border-right: 1px solid #BDBDBD;
`

const BoardName2 = styled.div`
    width:20%;
    text-align: center;
    border-right: 1px solid #BDBDBD;
`

const FeedContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 5vh;
  text-align: center;
  padding: 20px;
`;

const FeedItem = styled.div`
  animation: ${slideUp} 1s ease;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-bottom: 20px;
  padding: 10px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const CommonTitle = styled.h1`
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 텍스트 그림자 추가 */
`
const CommonText = styled.h1`
    font-size: 13px;
    color: #8C8C8C;
`

const CommonTextContainer = styled.div`
    text-align: center;
    align-items: center;
    margin: 0;
`;

const Hr = styled.hr`
    width  : 80%;
`;