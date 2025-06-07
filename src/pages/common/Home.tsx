import styled, { useTheme } from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import React, { useState } from "react";

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
`;

const MainImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  display: block;
  z-index: 2;
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

const ProductMessage = styled.div`
  position: relative;
  bottom: 80px;
  font-size: 80px;
  font-weight: 900;
  color: ${({ theme }) => theme.text};
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

const SlotLines: React.FC = () => {
  const slotLines = ["입체적인 어휘", "넓어지는 사고", "섬세한 소통"];
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slotLines.length);
        setAnimating(false);
      }, 400); // duration of animation
    }, 4000);
    return () => clearInterval(interval);
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
          color: theme.text,
          lineHeight: 1.3,
          whiteSpace: "pre-line",
        }}
      >
        {slotLines[index]}
      </span>
    </div>
  );
};

export default function Home() {
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

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
          <MainHeadline>inTone</MainHeadline>
          <MainImage src={mainTeaserImageSrc} alt="inTone main visual" />
        </ImageWrapper>
        <MainTitle center={true}>
          <SlotLines />
        </MainTitle>
      </FirstSection>
      <ProductSection>
        <ProductImage src={productImageSrc} alt="inTone product" />

        <ProductMessage>
          Start the
          <br />
          Evolution
          <br />
          of Speech.
        </ProductMessage>
      </ProductSection>

      {/* Content Section */}
      <SectionContainer>
        <SectionHeader>
          <MainTitle>단 0.24초.</MainTitle>
          <MainSubtitle>
            당신의 생각이 <br />
            반응하는 속도 그대로
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
          원활하고 지연 없는 대화. <br />
          착용하는 순간 당신의 작은 의도까지 자동으로 캐치합니다. <br />
          50ms 미만의 연산 속도를 보장합니다.
        </SectionBody>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>
          <MainTitle>나 그대로.</MainTitle>
          <MainSubtitle>
            나를 이해하고,
            <br />
            발견하고,
            <br />
            확장하는 시간
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
          감정의 톤, 대화의 맥락, 말의 온도까지.
          <br />
          당신만의 방식으로 말하고, 표현하고, 연결되세요.
        </SectionBody>
      </SectionContainer>

      <SectionContainer style={{ height: "fit-content" }}>
        <SectionHeader>
          <MainTitle>패션의 아이콘.</MainTitle>
          <MainSubtitle>
            가볍고 편하게
            <br />그 무엇보다 스타일리쉬하게
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
          초경량 소재로 무자극 설계로 하루 종일 착용해도 편안합니다.
          <br />
          inTone과 함께 당신의 개성을 살려보세요
          <br />
          <ExploreButton>
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
            <br />내 말에 날개를 달다
          </MainTitle>
        </SectionHeader>

        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>😀</FeatureIcon>
            <FeatureCardTitle>
              더 넓은 어휘 공간 <br />
              제3의 lexical space
            </FeatureCardTitle>
            <FeatureCardDesc>
              Engrave your inTone with your initials or favorite emoji — free.
              Only at inTone.
            </FeatureCardDesc>
            <FeatureCardPlus>＋</FeatureCardPlus>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🚚</FeatureIcon>
            <FeatureCardTitle>
              당신의 감정단위를
              <br />
              더 세분화한,
              <br /> 더 미세한 파인튜닝
            </FeatureCardTitle>
            <FeatureCardDesc>
              Choose 2-hour delivery from an inTone Store, free delivery, or
              easy pickup options.
            </FeatureCardDesc>
            <FeatureCardPlus>＋</FeatureCardPlus>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>💳</FeatureIcon>
            <FeatureCardTitle>
              보이스 클론 기술으로
              <br />
              함께 만들어 가는
              <br />
              내가 원했던 목소리
            </FeatureCardTitle>
            <FeatureCardDesc>
              When you choose to check out with inTone Card Monthly
              Installments.
            </FeatureCardDesc>
            <FeatureCardPlus>＋</FeatureCardPlus>
          </FeatureCard>
        </FeatureGrid>
      </SectionContainer>
    </>
  );
}
