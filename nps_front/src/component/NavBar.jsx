import React from 'react';
import styled from 'styled-components';
import npsLogo from '../assets/nps_logo.png'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <>
            <NavbarWrapper>
                <Logo src = {npsLogo} alt = "Logo" onClick={() => {navigate("/")}}/>
                <NavLinkWrapper>
                    <NavLink href="/number-search">번호 검색</NavLink>
                    <NavLink href="/board">게시판</NavLink>
                    <NavLink href="/news">최근 뉴스</NavLink>
                    <NavLink href="/education-video">관련 영상</NavLink>
                    <NavLink href="/ai-text-analysis">AI 텍스트 분석</NavLink>
                </NavLinkWrapper>
            </NavbarWrapper>
        </>
    );
}

export default NavBar;

const NavbarWrapper = styled.nav`
    background-color: #4287f5;
    height: 5vh;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center; /* 수직 중앙 정렬 */
    padding : 10px 20px;
`;

const Logo = styled.img`
    width: 100px;
    height: auto;  
    cursor: pointer; /* 클릭 가능한 커서 스타일 */
`;

const NavLinkWrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        color: black;
        font-weight: bold;
    }
`;