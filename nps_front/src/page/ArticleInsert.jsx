import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ArticleInsert = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const [titleError, setTitleError] = useState(true);
    const [authorError, setAuthorError] = useState(true);
    const [contentError, setContentError] = useState(true);

   // Refs for focusing inputs
   const titleRef= useRef();
   const authorRef= useRef();
   const contentRef= useRef();

   const handleSubmit = () => {
    if(titleError || authorError || contentError){
        alert('모든 항목을 입력해주세요.');
        return ;
    }
    axios.post("http://127.0.0.1:5000/board/post", {
        name : author,
        title : title,
        content : content
    }, {widthCredentials:true}).then((res) => {
        console.log(res);
        navigate("/board");
    }).catch((err) => {
        console.log("API호출 에러", err);
    });
   }

    return (
        <><br/>
        <CommonTextContainer>
            <CommonTitle>게시판</CommonTitle>
            <CommonText>"여러 사람들과 피싱 사례 및 정보를 공유하세요."</CommonText>
        </CommonTextContainer>
        <Hr/>
        <Container>
            <br />
             <Form>
                 <InputContainer>
                     <Label>글제목:</Label>
                     <Input 
                         type="text" 
                         value={title} 
                         onChange={(e) => {
                            setTitle(e.target.value)
                            if(e.target.value){
                                setTitleError((cur) => false);
                            }else{
                                setTitleError((cur) => true)
                            }
                        }}
                         ref={titleRef}
                     />
                 </InputContainer>
                    {titleError && <ErrorText>글 제목을 입력해주세요.</ErrorText>}
                 <InputContainer>
                     <Label>작성자:</Label>
                     <Input 
                         type="text" 
                         value={author} 
                         onChange={(e) => {
                            setAuthor(e.target.value)
                            if(e.target.value){
                                setAuthorError((cur) => false);
                            }else{
                                setAuthorError((cur) => true)
                            }
                        }}
                          ref={authorRef}
                      />
                  </InputContainer>
                    {authorError && < ErrorText>작성자를 입력해주세요.</ ErrorText>}
                  <InputContainer>
                      <Label>내용:</Label>
                      <TextArea
                        rows="4"
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value);
                            if(e.target.value){
                                setContentError((cur) => false);
                            }else{
                                setContentError((cur) => true)
                            }
                        }}
                         ref={contentRef}
                       />
                   </InputContainer>
                    {contentError && < ErrorText>내용을 입력해주세요.</ ErrorText>}
                    <BoardButton>
                        <ListButton onClick={handleSubmit}>글작성</ListButton>
                    </BoardButton> 

               </Form>

           </Container>
        </>
    );
}

export default ArticleInsert;

const BoardButton = styled.div`
    width: 100%;
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

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const Form = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
`;

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 10px;
`;

const Input = styled.input`
    font-size: 18px;
    padding: 10px;
`;

const TextArea = styled.textarea`
    width: 77%;
    height: 6.25em;
    padding: 10px;
    resize: none;
    font-size: 18px;
`;

const Label = styled.label`
    width: 20%;
    font-weight: bold; 
`;

const ErrorText = styled.p`
    color:red; 
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