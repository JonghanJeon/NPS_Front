import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Modal from "../modal/Modal";

const SearchNumber = () => {
    const [searchValue, setSearchValue] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSearchChange = (event) => {
        // 검색칸의 입력값이 변경될 때 실행되는 함수
        setSearchValue(event.target.value);
    };

    
    const handleSearch = () => {
        // 검색 버튼 클릭 시 실행할 동작을 정의하세요.
        alert(`검색 버튼이 클릭되었습니다. 검색어: ${searchValue}`);
    };

    return (
        <>
        <br />  
        <CommonTextContainer>
            <CommonTitle>번호 검색</CommonTitle>
            <CommonText>(by http://www.thecall.co.kr)</CommonText>
            <CommonText>피싱 의심 번호를 검색하여 안전한 환경을 유지하세요. </CommonText>
        </CommonTextContainer>
        <Hr />
        <Container>
            <SearchContainer>
            <SearchBox>
                <SearchInput
                type="text"
                placeholder="전화번호를 입력해 주세요"
                value={searchValue}
                onChange={handleSearchChange}
                />
                <SearchButton onClick={openModal}>검색</SearchButton>
            </SearchBox>
            <CommonTextContainer>
                <CommonText>검색 후 아래로 스크롤 하시면 내역을 볼 수 있습니다.</CommonText>
                <CommonText>검색 결과 창 내에서 검색시 theCall 사이트로 직접 이동합니다.</CommonText>
            </CommonTextContainer>
            <Hr /><br/>
            <OutputBox>
                {modalOpen && (
                    <Modal
                    data = {searchValue}
                    closeModal = {closeModal}/>
                )}
            </OutputBox>
            </SearchContainer>
        </Container>
        </>
    );
}

export default SearchNumber;

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

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchContainer = styled.div`
    align-items: center;
    width: 90%;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const OutputBox = styled.div`
  display: flex;
  justify-content: center;
  height : 55vh
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  height: 5vh;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
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

const Hr = styled.hr`
    width  : 80%;
`;