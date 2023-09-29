import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import NavBar from './component/NavBar';
import { useState } from 'react';
import SearchNumber from './page/SearchNumber';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import EduVideo from './page/EduVideo';
import AI from './page/AI';
import News from './page/News';

function App() {
  

  return (
    <Box>
      <MainContent>
        <BrowserRouter>
          
          <NavBar/>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/number-search' element={<SearchNumber/>}></Route>
            <Route path='/education-video' element={<EduVideo/>}></Route>
            <Route path='/ai-text-analysis' element={<AI/>}></Route>
            <Route path='/news' element={<News/>}></Route>
          </Routes>
        </BrowserRouter>
      </MainContent>
      <FooterWrapper>
        <CopyrightText>Copyright &copy; 2023 NoPhishing</CopyrightText>
      </FooterWrapper>
    </Box>
  );
}

export default App;

const Box = styled.div`
  background-color: white;
`;

const MainContent = styled.div`
  flex-grow: 1;
  background-color: white;
`;

const FooterWrapper = styled.footer`
  background-color: #f0f0f0;
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-top: 10px;
`;

const CopyrightText = styled.p`
  margin: 0;
`;

//////////// http://www.missed-call.com/?q=안녕하세요&x=0&y=0&v=1nj

