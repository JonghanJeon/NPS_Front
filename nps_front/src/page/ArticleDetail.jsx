import styledEngine from "@mui/styled-engine";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ArticleDetail = () => {
    const navigate = useNavigate();

    const {id} = useParams(0);
    const [boardTitle, setBoardTitle] = useState("");
    const [boardName, setBoardName] = useState("");
    const [boardContent, setBoardContent] = useState("");
    
    useEffect(()=> {
        console.log("id : ");
        console.log(id);
        const url = `http://127.0.0.1:5000/board/${id}`
        axios.get(url, {widthCredentials:true})
        .then(res => {
            console.log(res);
            console.log("Board Loading Success.");
            setBoardTitle(res.data[0].title);
            setBoardName(res.data[0].name);
            setBoardContent(res.data[0].content);
        })
        .catch(err => {
            console.log("API 호출 에러 ", err);
        });
    },[])

    return (
        <>
        <br/>
        <CommonTextContainer>
            <CommonTitle>게시판</CommonTitle>
            <CommonText>"여러 사람들과 피싱 사례 및 정보를 공유하세요."</CommonText>
        </CommonTextContainer>
        <Hr/>
        <BoardContainer>
            <BoardTitle>
                <div>
                    {boardTitle}
                </div>
            </BoardTitle>
            <BoardName>
                <div>
                    작성자 : {boardName}
                </div>
            </BoardName>
            <BoardContent>
                <div>
                    {boardContent}
                </div>
            </BoardContent>
            <BoardButton>
                <ListButton onClick={() => {
                    navigate("/board");
                }}>목록</ListButton>
            </BoardButton>
        </BoardContainer>
        </>
    );
}

export default ArticleDetail;

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

const BoardContainer = styled.div`
`

const BoardButton = styled.div`
    width: 80%;
    height: 50px;
    margin: 10px auto;
`

const BoardTitle = styled.div`
    width: 80%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #BDBDBD;
`

const BoardName = styled.div`
    width: 80%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #BDBDBD;
`

const BoardContent = styled.div`
    width: 80%;
    height: 200px;
    margin: 10px auto;
    border-bottom: 1px solid #BDBDBD;
`

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