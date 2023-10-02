import React from 'react'
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import poster1 from "../assets/poster1.png"
import poster2 from "../assets/poster2.png"
import styled from 'styled-components';

const imageData = [
    {
      label: "Image 1",
      alt: "image1",
      url: poster1,
    },
  
    {
      label: "Image 2",
      alt: "image2",
      url: poster2,
    },
];

const renderSlides = imageData.map(image => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
  </div>
));

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }
    
    return (
        <>
        <Container>
          <TextWrapper>
            <TextContainer>
              <Title>NPS는?</Title>
              <Sub>NoPhiShing 의 약자로 피싱 방지를 돕는 No.1 서비스 입니다.</Sub><br />
              <Text>더콜(theCall) 사이트를 통한 번호 검색부터,</Text><br />
              <Text>사용자들간의 정보 공유, 실제 사고 사례 및 교육 영상 시청,</Text><br />  
              <Text>AI 를 활용한 피싱 판단 서비스까지</Text><br />
              <Text>NPS 에서 만나보세요!</Text>
            </TextContainer>
          </TextWrapper>
          <CarouselContainer>
              <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showThumbs={false}
              showStatus={false}
              selectedItem={imageData[currentIndex]}
              onChange={handleChange}
              className="w-[400px] lg:hidden">
              {renderSlides}
              </Carousel>
          </CarouselContainer>
        </Container>
        </>
    );
}

export default Slider;

const CarouselContainer = styled.div`
  width: 100%; /* 기본 크기는 100% */
  max-width: 800px; /* 최대 너비 설정 */
  /* height: 100%; 기본 높이 설정 */
  margin: auto auto; /* 가운데 정렬 (선택 사항) */

  /* 화면 크기에 따른 크기 조정 */
  @media (max-width: 767px) {
    max-width: 300px; /* 작은 화면에서 크기 조절 */
    height: 200px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #F6F6F6;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 80%;
  margin: auto 0;
`

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
    /* 화면 크기에 따른 크기 조정 */
  @media (max-width: 767px) {
    max-width: 300px; /* 작은 화면에서 크기 조절 */
  }
`;

const Title = styled.h1`
    color: #4B62F1;
    font-size: 18px;
`

const Sub = styled.h1`
  color: #4B62F1;
  font-size: 13px;
`

const Text = styled.div`
    font-weight: bold;
    font-size: 10px;
`