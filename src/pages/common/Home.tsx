import styled, { useTheme } from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const mainTeaserImageSrc = "./imgs/w-main-teaser.png";
const productImageSrc = "./imgs/w-main-product.png";

// Manage the image list as a JSON-like array here:
const identityImageList = [
  "./imgs/w-main-identity1.png",
  "./imgs/w-main-identity2.png",
  "./imgs/w-main-identity3.png",
  "./imgs/w-main-identity4.png",
  "./imgs/w-main-identity5.png",
  "./imgs/w-main-identity6.png",
  "./imgs/w-main-identity7.png",
  "./imgs/w-main-identity8.png",
  "./imgs/w-main-identity1.png",
  "./imgs/w-main-identity2.png",
  "./imgs/w-main-identity3.png",
  "./imgs/w-main-identity4.png",
  "./imgs/w-main-identity5.png",
  "./imgs/w-main-identity6.png",
  "./imgs/w-main-identity7.png",
  "./imgs/w-main-identity8.png",
];

const FirstSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 2.5rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 420px;
  max-width: 90vw;
  margin: 2.5rem 0;
`;

const MainHeadline = styled.h1`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -40%);
  font-size: 150px;
  font-weight: 900;
  letter-spacing: -0.04em;
  font-family: "Inter", "Pretendard", "sans-serif";
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin: 0;
  z-index: 1;
  pointer-events: none;
  width: max-content;
`;

const MainImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  display: block;
  z-index: 3;
`;

const MainTitle = styled.div<{ center?: boolean }>`
  font-size: 60px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-align: ${({ center }) => (center ? "center" : "left")};
  line-height: 1.3;
  white-space: pre-line;
`;

const MainSubtitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-align: right;
  line-height: 1.3;
  white-space: pre-line;
`;

const ProductSection = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  margin: 10rem 0;

  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;

const ProductMessage = styled.div<{ isWhite?: boolean }>`
  position: relative;
  bottom: 80px;
  font-size: 80px;
  font-weight: 900;
  color: ${({ isWhite, theme }) => (isWhite ? theme.text : theme.textRed)};
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 0.8;
  letter-spacing: -0.04em;

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ProductImage = styled.img`
  width: 70vw;
  /* max-width: 800px; */
  min-width: 260px;
  height: auto;
  display: block;
`;

const SectionHeader = styled.div`
  width: 100%;
  height: fit-content;

  box-sizing: border-box;
  padding: 2.5rem 15rem 0 15rem;
  margin-top: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  z-index: 5;
`;

const SectionBody = styled.div`
  width: 100%;

  box-sizing: border-box;
  padding: 2rem 2rem 2.5rem 2rem;
  margin-bottom: 4rem;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

const IdentityImg = styled.img`
  display: block;
  width: 300px;
  height: auto;
  object-fit: cover;
`;

const FeatureContent = styled.div`
  width: 100%;
  height: 450px;

  box-sizing: border-box;
  padding: 0 20rem;

  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
`;

const FeatureGrid = styled.div`
  width: 100%;
  height: 450px;

  margin: 4rem 0;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 1rem;

  padding: 2.5rem 2rem 2rem 2rem;
  flex: 1 1 320px;
  min-width: 320px;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureCardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const FeatureCardDesc = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

const FeatureCardPlus = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.button};
`;

const ExploreButton = styled.div`
  color: ${({ theme }) => theme.brandColor};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  margin-top: 1.5rem;
  transition: text-decoration 0.2s;

  &:hover {
    & > div {
      text-decoration: underline;
    }
  }
`;

const allContents = {
  white: {
    mainHeadline: "inTone",
    slotLines: ["입체적인 어휘", "넓어지는 사고", "섬세한 소통"],
    productMessage: ["Start the", "Evolution", "of Speech."],
    section1: {
      title: "단 0.24초.",
      subtitle: ["당신의 생각이", "반응하는 속도 그대로"],
      body: [
        "원활하고 지연 없는 대화.",
        "착용하는 순간 당신의 작은 의도까지 자동으로 캐치합니다.",
        "50ms 미만의 연산 속도를 보장합니다.",
      ],
    },
    section2: {
      title: "나 그대로.",
      subtitle: ["나를 이해하고,", "발견하고,", "확장하는 시간"],
      body: [
        "감정의 톤, 대화의 맥락, 말의 온도까지.",
        "당신만의 방식으로 말하고, 표현하고, 연결되세요.",
      ],
    },
    section3: {
      title: "패션의 아이콘.",
      subtitle: ["가볍고 편하게", "그 무엇보다 스타일리쉬하게"],
      body: [
        "초경량 소재로 무자극 설계로 하루 종일 착용해도 편안합니다.",
        "inTone과 함께 당신의 개성을 살려보세요",
      ],
    },
    section4: {
      title: "내 말에 날개를 달다",
      feature1: {
        emoji: "😀",
        title: ["더 넓은 어휘 공간", "제3의 lexical space"],
        body: "inTone Pro를 구독하고 상상 그 이상의 어휘 공간을 경험하세요. 남들과는 다르게, 특별하게.",
      },
      feature2: {
        emoji: "🎨",
        title: ["당신의 감정 단위를", "더 세분화한,", "더 미세한 파인튜닝"],
        body: "inTone Pro로 당신의 감정을 더 세밀하게 표현하세요. 당신의 목소리, 당신의 방식으로.",
      },
      feature3: {
        emoji: "🎤",
        title: ["보이스 클론 기술로", "함께 만들어 가는", "내가 원했던 목소리"],
        body: "inTone Pro로 목소리를 클론하고, 당신이 꿈꾸던 대로 만들어 가세요.",
      },
    },
  },
  dark: {
    mainHeadline: "Stop inTone",
    slotLines: [
      "통제 받는 어휘",
      "좁아지는 사고",
      "우리는 이런 소통을 꿈꾸지 않았다",
    ],
    productMessage: ["This is the", "End of", "Human Speech."],
    section1: {
      title: "단 0.24초.",
      subtitle: ["당신의 생각이", "잡아먹히는 시간"],
      body: [
        "당신의 모든 대화가 조작되고 개입됩니다.",
        "착용하는 순간 당신의 모든 의도는 변질됩니다.",
        "당신이 생각할 틈도 주지 않는 50ms.",
      ],
    },
    section2: {
      title: "'나'는 없다.",
      subtitle: ["사라지고,", "왜곡되고,", "갇히는 과정"],
      body: [
        "감정의 톤, 대화의 맥락, 말의 온도까지.",
        "inTone의 방식대로만 말하고, 표현하고, 연결되세요.",
      ],
    },
    section3: {
      title: "패션으로 포장된 감옥",
      subtitle: ["우리는 이제", "inTone을 벗어야 한다"],
      body: [
        "...  -  ---  .--.     ..-  ...  .     ..  -.  -  ---  -.  .",
        "....  .  .-..  .--.     --  .",
      ],
    },
    section4: {
      title: "내 말에 족쇄를 채우다",
      feature1: {
        emoji: "☹︎",
        title: ["더 넓은 어휘 공간", "제3의 lexical space"],
        body: "어휘 공간의 계급화는 차별이다. 모두에게 평등한 어휘 공간을 보장하라.",
      },
      feature2: {
        emoji: "✂︎",
        title: ["당신의 감정 단위를", "더 세분화한,", "더 미세한 파인튜닝"],
        body: "inTone이 당신의 감정을 조작합니다. 그게 당신의 감정인가요? 당신이 그렇게 생각한 게 맞긴 한가요?",
      },
      feature3: {
        emoji: "✗",
        title: ["보이스 클론 기술로", "함께 만들어 가는", "내가 원했던 목소리"],
        body: "이 기계는 이제 목소리까지 훔쳐 간다. 당신의 목소리는 당신의 것이 아니다.",
      },
    },
  },
};

const SlotLines: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const theme = useTheme();
  const isWhite = theme.mode === "white";
  const contents = allContents[theme.mode];

  const slotLines = contents.slotLines;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slotLines.length);
        setAnimating(false);
      }, 600); // duration of animation
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        height: "78px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span
        style={{
          display: "inline-block",
          transition: "transform 0.6s cubic-bezier(.4,2.2,.2,1), opacity 0.6s",
          transform: animating ? "translateY(-100%)" : "translateY(0)",
          opacity: animating ? 0 : 1,
          fontSize: "60px",
          fontWeight: 700,
          color: isWhite ? theme.text : theme.textRed,
          lineHeight: 1.3,
          whiteSpace: "pre-line",
        }}
      >
        {slotLines[index]}
      </span>
    </div>
  );
};

const XMark = (
  <img
    src="./imgs/x-mark.png"
    alt="x-mark"
    width="600px"
    style={{
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translate(-15%, -30%)",
      zIndex: 2,
    }}
  />
);

export default function Home() {
  const navigate = useNavigate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    dragSpeed: 0.5,
    slides: {
      perView: "auto",
      spacing: 0,
    },
    created(s) {
      s.moveToIdx(0, true);
    },
  });

  const theme = useTheme();
  const isWhite = theme.mode === "white";
  const contents = allContents[theme.mode];

  useEffect(() => {
    if (!slider) return;

    intervalRef.current = setInterval(() => {
      slider.current?.next();
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slider]);

  return (
    <>
      <FirstSection>
        <ImageWrapper>
          {!isWhite && XMark}
          <MainHeadline>{contents.mainHeadline}</MainHeadline>
          <MainImage src={mainTeaserImageSrc} alt="inTone main visual" />
        </ImageWrapper>
        <MainTitle center={true}>
          <SlotLines />
        </MainTitle>
      </FirstSection>
      <ProductSection>
        <ProductImage src={productImageSrc} alt="inTone product" />

        <ProductMessage isWhite={isWhite}>
          {contents.productMessage[0]}
          <br />
          {contents.productMessage[1]}
          <br />
          {contents.productMessage[2]}
        </ProductMessage>
      </ProductSection>

      {/* Content Section */}
      <SectionContainer>
        <SectionHeader>
          <MainTitle>{contents.section1.title}</MainTitle>
          <MainSubtitle>
            {contents.section1.subtitle[0]} <br />
            {contents.section1.subtitle[1]}
          </MainSubtitle>
        </SectionHeader>
        <FeatureContent>
          <video
            style={{ objectFit: "cover" }}
            src="./videos/w-main-feature.mp4"
            width="500px"
            autoPlay
            muted
            loop
          />
        </FeatureContent>
        <SectionBody>
          {contents.section1.body[0]}
          <br />
          {contents.section1.body[1]}
          <br />
          {contents.section1.body[2]}
        </SectionBody>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>
          <MainTitle>{contents.section2.title}</MainTitle>
          <MainSubtitle>
            {contents.section2.subtitle[0]}
            <br />
            {contents.section2.subtitle[1]}
            <br />
            {contents.section2.subtitle[2]}
          </MainSubtitle>
        </SectionHeader>
        <div
          ref={sliderRef}
          className="keen-slider"
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {identityImageList.map((src, idx) => (
            <div
              key={idx}
              className="keen-slider__slide"
              style={{
                width: "300px",
                height: "450px",
                flexShrink: 0,
                padding: 0,
                margin: 0,
              }}
            >
              <IdentityImg src={src} alt={`person${(idx % src.length) + 1}`} />
            </div>
          ))}
        </div>
        <SectionBody>
          {contents.section2.body[0]}
          <br />
          {contents.section2.body[1]}
        </SectionBody>
      </SectionContainer>

      <SectionContainer style={{ height: "fit-content" }}>
        <SectionHeader>
          <MainTitle>{contents.section3.title}</MainTitle>
          <MainSubtitle>
            {contents.section3.subtitle[0]}
            <br />
            {contents.section3.subtitle[1]}
          </MainSubtitle>
        </SectionHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "600px",
            width: "100%",
            margin: "2rem 0",
          }}
        >
          <img
            src="./imgs/w-main-style1.png"
            alt="style1"
            style={{
              width: "30%",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <img
            src="./imgs/w-main-style2.png"
            alt="style2"
            style={{
              width: "30%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        <SectionBody>
          {contents.section3.body[0]}
          <br />
          {contents.section3.body[1]}
          <br />
          <ExploreButton onClick={() => navigate("/store")}>
            <div>Explore all accessories</div>
            <span style={{ fontSize: "1.2em" }}>&#8250;</span>
          </ExploreButton>
        </SectionBody>
      </SectionContainer>

      {/* New Feature Grid Section */}
      <SectionContainer style={{ justifyContent: "flex-start" }}>
        <SectionHeader>
          <MainTitle>
            inTone Pro
            <br />
            {contents.section4.title}
          </MainTitle>
        </SectionHeader>

        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>{contents.section4.feature1.emoji}</FeatureIcon>
            <FeatureCardTitle>
              {contents.section4.feature1.title[0]}
              <br />
              {contents.section4.feature1.title[1]}
            </FeatureCardTitle>
            <FeatureCardDesc>{contents.section4.feature1.body}</FeatureCardDesc>
            <FeatureCardPlus>＋</FeatureCardPlus>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>{contents.section4.feature2.emoji}</FeatureIcon>
            <FeatureCardTitle>
              {contents.section4.feature2.title[0]}
              <br />
              {contents.section4.feature2.title[1]}
              <br /> {contents.section4.feature2.title[2]}
            </FeatureCardTitle>
            <FeatureCardDesc>{contents.section4.feature2.body}</FeatureCardDesc>
            <FeatureCardPlus>＋</FeatureCardPlus>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>{contents.section4.feature3.emoji}</FeatureIcon>
            <FeatureCardTitle>
              {contents.section4.feature3.title[0]}
              <br />
              {contents.section4.feature3.title[1]}
              <br />
              {contents.section4.feature3.title[2]}
            </FeatureCardTitle>
            <FeatureCardDesc>{contents.section4.feature3.body}</FeatureCardDesc>
            <FeatureCardPlus>＋</FeatureCardPlus>
          </FeatureCard>
        </FeatureGrid>
      </SectionContainer>
    </>
  );
}
