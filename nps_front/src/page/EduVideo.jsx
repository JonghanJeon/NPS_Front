import React from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import { FaVideo } from "react-icons/fa";
import { useRef } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const EduVideo = () => {
  const [videoWidth, setVideoWidth] = useState(500);
  const [videoHeight, setVideoHeight] = useState(270);

  const video1Ref = useRef();
  const video2Ref = useRef();
  const video3Ref = useRef();
  const video4Ref = useRef();
  const video5Ref = useRef();
  const video6Ref = useRef();
  const video7Ref = useRef();
  const video8Ref = useRef();

  smoothscroll.polyfill();

    const scrollToDiv = (ref) => {
        const element = ref.current;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' , block: 'start' });
        }
    };

  return (
    <Box>
        <br/>
        <CommonTextContainer>
            <CommonTitle>피싱 관련 영상</CommonTitle>
            <CommonText>"피싱 관련 영상을 시청하여 온라인 안전을 강화하고 개인 정보를 보호하세요."</CommonText>
        </CommonTextContainer>
        <Hr />
        피싱 예방 및 대응요령 바로가기
      <ButtonContainer> 
        <MainButtonBox onClick={() => scrollToDiv(video1Ref)}>
          <FaVideo />
          <Text>금융감독원</Text>
          <Text>보이스피싱 예방 및 대응요령</Text>
        </MainButtonBox>
        <MainButtonBox onClick={() => scrollToDiv(video2Ref)}>
          <FaVideo />
          <Text>유퀴즈</Text>
          <Text>보이스피싱 행동요령</Text>
        </MainButtonBox>
        <MainButtonBox onClick={() => scrollToDiv(video3Ref)}>
          <FaVideo />
          <Text>YTN</Text>
          <Text>보이스피싱 당했다면?<br/>"피해 신고·계좌 정지부터"</Text>
        </MainButtonBox>
        <MainButtonBox onClick={() => scrollToDiv(video4Ref)}>
          <FaVideo />
          <Text>금융위원회</Text>
          <Text>보이스피싱 뿌리뽑겠습니다!<br/>금융분야 대응방안</Text>
        </MainButtonBox>
      </ButtonContainer>
      <br />
      <br />
      피싱 관련 뉴스 바로가기
      <ButtonContainer> 
        <MainButtonBox onClick={() => scrollToDiv(video5Ref)}>
          <FaVideo />
          <Text>YTN</Text>
          <Text>보이스피싱 실제 대화</Text>
        </MainButtonBox>
        <MainButtonBox onClick={() => scrollToDiv(video6Ref)}>
          <FaVideo />
          <Text>SBS</Text>
          <Text>부모님 위해 만든<br/>보이스피싱 총정리</Text>
        </MainButtonBox>
        <MainButtonBox onClick={() => scrollToDiv(video7Ref)}>
          <FaVideo />
          <Text>KBS</Text>
          <Text>요즘 보이스피싱 수법</Text>
        </MainButtonBox>
        <MainButtonBox onClick={() => scrollToDiv(video8Ref)}>
          <FaVideo />
          <Text>알쓸경잡</Text>
          <Text>2023 보이스피싱 신종수법</Text>
        </MainButtonBox>
      </ButtonContainer>
      <br />
      <VideoContainer ref={video1Ref}>
        <Title>보이스피싱 예방 및 대응요령</Title>
        <VideoBox>
          <YouTube
            videoId="eFNe2Ul5kcc" //동영상 아이디
            opts={{
              width: videoWidth,
              height: videoHeight,
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                // playlist: "auAQ_A--c5I", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoBox>
      </VideoContainer>
      <br />
      <VideoContainer ref={video2Ref}>
        <Title>유퀴즈 - 금융감독원이 알려주는 보이스피싱 행동요령</Title>
        <VideoBox>
          <YouTube
            videoId="FbLav4Rmfdg" //동영상 아이디
            opts={{
              width: videoWidth,
              height: videoHeight,
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                // playlist: "auAQ_A--c5I", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoBox>
      </VideoContainer>
      <br />
      <VideoContainer ref={video3Ref}>
        <Title>YTN - 보이스피싱 당했다면?..."피해 신고·계좌 정지부터"</Title>
        <VideoBox>
          <YouTube
            videoId="dH4Tbokoxxw" //동영상 아이디
            opts={{
              width: videoWidth,
              height: videoHeight,
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                // playlist: "auAQ_A--c5I", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoBox>
      </VideoContainer>
      <br />
      <VideoContainer ref={video4Ref}>
        <Title>금융위원회 - 보이스피싱 뿌리뽑겠습니다! 🚨금융분야 대응방안🚨</Title>
        <VideoBox>
          <YouTube
            videoId="iNa5q60-n9U" //동영상 아이디
            opts={{
              width: videoWidth,
              height: videoHeight,
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                // playlist: "auAQ_A--c5I", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoBox>
      </VideoContainer>
      <br />
      <VideoContainer ref={video5Ref}>
        <Title>YTN - 보이스피싱 실제 대화</Title>
        <VideoBox>
          <YouTube
            videoId="PDCKon2qIes" //동영상 아이디
            opts={{
              width: videoWidth,
              height: videoHeight,
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                // playlist: "auAQ_A--c5I", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoBox>
        <VideoBox>
          <YouTube
            videoId="PdNsL2ifbhM" //동영상 아이디
            opts={{
              width: videoWidth,
              height: videoHeight,
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                // playlist: "auAQ_A--c5I", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoBox>
      </VideoContainer> 
      <br />
      <VideoContainer ref={video6Ref}>
        <Title>SBS - 부모님 위해 만든 보이스피싱 총정리</Title>
        <VideoBox>
          <YouTube
            videoId="petqruI9Zsg" //동영상 아이디
            opts={{
              width: videoWidth,
              height: videoHeight,
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                // playlist: "auAQ_A--c5I", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoBox>
      </VideoContainer> 
      <br />
      <VideoContainer ref={video7Ref}>
        <Title>KBS - “이건 진짜 나도 속겠는데?” 소리 절로 나오는 요즘 보이스피싱 수법</Title>
        <VideoBox>
          <YouTube
            videoId="dD303HGRu5c" //동영상 아이디
            opts={{
              width: videoWidth,
              height: videoHeight,
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                // playlist: "auAQ_A--c5I", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoBox>
      </VideoContainer> 
      <br />
      <VideoContainer ref={video8Ref}>
        <Title>알쓸경잡 - 성공확률이 50%?! 2023 보이스피싱 신종수법!</Title>
        <VideoBox>
          <YouTube
            videoId="UK3haY8wg24" //동영상 아이디
            opts={{
              width: videoWidth,
              height: videoHeight,
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                // playlist: "auAQ_A--c5I", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoBox>
      </VideoContainer>
    </Box>
  );
};

export default EduVideo;

const Box = styled.div`
    margin-bottom: 5vh;
    text-align: center; 
`

const ButtonContainer = styled.div`
animation: ${fadeIn} 1s ease;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const VideoContainer = styled.div`
animation: ${fadeIn} 1s ease;
  width: 100%;
  text-align: center;
`;

const VideoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 18px;
`;

const MainButtonBox = styled.div`
  width: 140px; /* 원하는 너비로 조절 */
  height: 140px; /* 원하는 높이로 조절 */
  font-weight: bold;
  color: #4b62f1;
  display: flex; /* 컨텐츠를 세로 중앙으로 정렬하기 위해 flex 컨테이너로 설정 */
  flex-direction: column;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */

  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 767px) {
    width: 90px; /* 작은 화면에서 크기 조절 */
    height: 90px;
  }
`;

const Text = styled.h1`
  font-size: 10px;
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