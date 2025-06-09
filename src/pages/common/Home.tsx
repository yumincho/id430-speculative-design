import styled, { useTheme } from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import { TextHead, TextBody, TextSubHead } from "../../components/common";
import { useNavigate } from "react-router-dom";

const mainTeaserImageSrc = "./imgs/w-main-teaser.png";
const productImageSrc = "./imgs/w-main-product.png";

const mainTeaserDarkImageSrc = "./imgs/d-main-teaser.png";

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
];

const identityImageListDark = [
  "./imgs/d-main-identity1.png",
  "./imgs/d-main-identity2.png",
  "./imgs/d-main-identity3.png",
  "./imgs/d-main-identity4.png",
  "./imgs/d-main-identity5.png",
  "./imgs/d-main-identity6.png",
  "./imgs/d-main-identity7.png",
  "./imgs/d-main-identity8.png",
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

const ImageWrapper = styled.div<{ isWhite?: boolean }>`
  position: relative;
  width: ${({ isWhite }) => (isWhite ? "400px" : "570px")};
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

const ProductSection = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: 10rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const SectionContainer = styled.section`
  width: 100%;
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding: 2rem 2rem 2.5rem 2rem;
  margin-bottom: 4rem;
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
  opacity: ${({ theme }) => (theme.mode === "white" ? "1" : "0.5")};
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
        "평균 0.24초, 최대 0.05초의 연산 속도를 보장합니다.",
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
      "AI로부터 통제 받는 어휘",
      "나날이 좁아져가는 사고",
      "우리는 이런 소통을 꿈꾸지 않았다",
    ],
    productMessage: ["This is the", "End of", "Human Speech."],
    section1: {
      title: "단 0.24초.",
      subtitle: ["당신의 생각이", "AI에게 잡아먹히는 시간"],
      body: [
        "당신의 모든 대화가 AI에 의해 조작되고 개입됩니다.",
        "착용하는 순간 당신의 모든 의도는 변질됩니다.",
        "당신이 생각할 틈도 주지 않는 짧은 시간.",
      ],
    },
    section2: {
      title: "'나'는 없다.",
      subtitle: ["사라지고,", "왜곡되고,", "갇히는 과정"],
      body: [
        "감정의 톤, 대화의 맥락, 말의 온도까지.",
        "AI가 지정한 방식대로만 말하고, 표현하고, 연결되세요.",
      ],
    },
    section3: {
      title: "패션으로 포장된 감옥",
      subtitle: ["우리는 이제", "inTone을 벗어야 한다"],
      body: [
        "...  -  ---  .--.     ..-  ...  ..  -.  --.     ..  -.  -  ---  -.  .",
        ".-.  ..-  -.     .-  .--  .-  -.--     ..-.  .-.  ---  --     .-  ..",
      ],
    },
    section4: {
      title: "내 말에 족쇄를 채우다",
      feature1: {
        emoji: "☹︎",
        title: ["단조로워진 어휘 공간", "획일화된 lexical space"],
        body: "AI가 우리의 어휘를 제한하고, 우리의 사고를 좁힌다. 우리는 더 이상 자유롭게 표현할 수 없다.",
      },
      feature2: {
        emoji: "✂︎",
        title: ["당신의 감정 단위를", "하나하나 감시하는", "파인튜닝"],
        body: "inTone이 당신의 감정을 감시하고 통제한다. 그건 당신이 스스로 느낀 감정이 아니다.",
      },
      feature3: {
        emoji: "✗",
        title: ["AI에게 빼앗긴", "자유로운 목소리", "우리의 목소리"],
        body: "이 기계는 이제 목소리까지 훔쳐 간다. 당신의 목소리는 당신의 것으로 남지 않는다.",
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
        <ImageWrapper isWhite={isWhite}>
          {!isWhite && XMark}
          <MainHeadline>{contents.mainHeadline}</MainHeadline>
          <MainImage
            src={isWhite ? mainTeaserImageSrc : mainTeaserDarkImageSrc}
            alt="inTone main visual"
          />
        </ImageWrapper>
        <TextHead align="center">
          <SlotLines />
        </TextHead>
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
          <TextHead>{contents.section1.title}</TextHead>
          <TextSubHead>
            {contents.section1.subtitle[0]} <br />
            {contents.section1.subtitle[1]}
          </TextSubHead>
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
          <TextBody>
            {contents.section1.body[0]}
            <br />
            {contents.section1.body[1]}
            <br />
            {contents.section1.body[2]}
          </TextBody>
        </SectionBody>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>
          <TextHead>{contents.section2.title}</TextHead>
          <TextSubHead>
            {contents.section2.subtitle[0]}
            <br />
            {contents.section2.subtitle[1]}
            <br />
            {contents.section2.subtitle[2]}
          </TextSubHead>
        </SectionHeader>
        <div
          ref={sliderRef}
          className="keen-slider"
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {isWhite
            ? identityImageList.map((src, idx) => (
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
                  <IdentityImg
                    src={src}
                    alt={`person${(idx % src.length) + 1}`}
                  />
                </div>
              ))
            : identityImageListDark.map((src, idx) => (
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
                  <IdentityImg
                    src={src}
                    alt={`person${(idx % src.length) + 1}`}
                  />
                </div>
              ))}
        </div>
        <SectionBody>
          <TextBody>
            {contents.section2.body[0]}
            <br />
            {contents.section2.body[1]}
          </TextBody>
        </SectionBody>
      </SectionContainer>

      <SectionContainer style={{ height: "fit-content" }}>
        <SectionHeader>
          <TextHead>{contents.section3.title}</TextHead>
          <TextSubHead>
            {contents.section3.subtitle[0]}
            <br />
            {contents.section3.subtitle[1]}
          </TextSubHead>
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
            src={
              isWhite ? "./imgs/w-main-style1.png" : "./imgs/d-main-style1.png"
            }
            alt="style1"
            style={{
              width: "440px",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <img
            src={
              isWhite ? "./imgs/w-main-style2.png" : "./imgs/d-main-style2.png"
            }
            alt="style2"
            style={{
              width: "440px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        <SectionBody>
          <TextBody>
            {contents.section3.body[0]}
            <br />
            {contents.section3.body[1]}
            <br />
          </TextBody>
          <ExploreButton onClick={() => navigate("/store")}>
            <div>Explore all accessories</div>
            <span style={{ fontSize: "1.2em" }}>&#8250;</span>
          </ExploreButton>
        </SectionBody>
      </SectionContainer>

      {/* New Feature Grid Section */}
      <SectionContainer style={{ justifyContent: "flex-start" }}>
        <SectionHeader>
          <TextHead>
            inTone Pro
            <br />
            {contents.section4.title}
          </TextHead>
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
