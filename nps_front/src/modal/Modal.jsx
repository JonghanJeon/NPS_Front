import React from 'react';
import styled from 'styled-components';

function Modal({ data, closeModal }) {
  return (
    <Container>
    <ModalBox>
        <Iframe src={`https://www.thecall.co.kr/bbs/board.php?bo_table=whitelist&sca=&sfl=wr_subject&stx=${data}&sop=and`} width="80%" height="100%"></Iframe>
    </ModalBox>
    <ButtonBox>
        <CloseButton onClick={closeModal}>창닫기</CloseButton>
    </ButtonBox>
    </Container>
  );
}

export default Modal;

const Iframe = styled.iframe`
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`

const Container = styled.div`
    width: 100%;
`;

const ModalBox = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`

const CloseButton = styled.button`
    padding: 5px 10px;
    background-color: #4B62F1;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;