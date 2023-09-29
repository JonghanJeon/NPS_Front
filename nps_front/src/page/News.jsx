import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

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

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      // News API 키를 여기에 입력하세요
      const apiKey = 'da9ba7f177e743299c8ece1692c8f80b';
      
      const query = '피싱';

      // News API 엔드포인트와 파라미터 설정
       const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
  
      axios
        .get(apiUrl)
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch((error) => {
          console.error('뉴스 데이터를 불러오는 중 오류 발생:', error);
        });
    }, []);
  
    return (
        <><br/>
        <CommonTextContainer>
            <CommonTitle>피싱 관련 최근 기사</CommonTitle>
            <CommonText>"피싱 관련 최근 기사를 한번에 모아보세요."</CommonText>
        </CommonTextContainer>
        <Hr />  
        <FeedContainer>
          {articles.map((article, index) => (
            <FeedItem key={index} onClick={() => {
                window.location.href = article.url
            }}>
                {article.urlToImage && (
                    <FeedImage src={article.urlToImage} alt="기사 이미지" />
                )}
                <FeedLink href={article.url} target="_blank" rel="noopener noreferrer">
                 {article.title}
                </FeedLink>
            </FeedItem>
          ))}
        </FeedContainer>
        </>
      );
}

export default News;

// 스타일드 컴포넌트를 사용하여 컴포넌트 스타일링
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

const FeedImage = styled.img`
    width: 100px;
    height: 100px;
  height: auto;
  margin-right: 10px;   
`;

const FeedLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
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