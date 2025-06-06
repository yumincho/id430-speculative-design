import styled from "styled-components";
import mainTeaser from "../../assets/imgs/w-main-teaser.png";
import productImg from "../../assets/imgs/w-main-product.png";

// Manage the image list as a JSON-like array here:
const identityImageList = [
  "src/assets/imgs/w-main-identity1.png",
  "src/assets/imgs/w-main-identity2.png",
  "src/assets/imgs/w-main-identity3.png",
  "src/assets/imgs/w-main-identity4.png",
  "src/assets/imgs/w-main-identity5.png",
];

const FirstSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 2.5rem;
  background: #fff;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 420px;
  max-width: 90vw;
  margin-bottom: 2.5rem;
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
  z-index: 2;
  pointer-events: none;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const MainTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-align: center;
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

const IdentitySection = styled.section`
  width: 100%;
  height: 100vh;
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
  padding: 2.5rem 12rem 0 12rem;
  margin-top: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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

const IdentitySlideshowWrapper = styled.div`
  width: fit-content;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const IdentitySlideshowTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  animation: scroll-horizontal 18s linear infinite;

  @keyframes scroll-horizontal {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const IdentityImg = styled.img`
  width: 28vw;
  max-width: 300px;
  min-width: 120px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
`;

export default function Home() {
  return (
    <>
      <FirstSection>
        <ImageWrapper>
          <MainHeadline>inTone</MainHeadline>
          <MainImage src={mainTeaser} alt="inTone main visual" />
        </ImageWrapper>
        <MainTitle>{`입체적인 어휘,\n넓어지는 사고,\n섬세한 소통`}</MainTitle>
      </FirstSection>
      <ProductSection>
        <ProductImage src={productImg} alt="inTone product" />

        <ProductMessage>
          Start the
          <br />
          Evolution
          <br />
          of Speech.
        </ProductMessage>
      </ProductSection>

      {/* Content Section */}
      <IdentitySection>
        <SectionHeader>
          <MainTitle>단 0.24초.</MainTitle>
          <MainSubtitle>
            당신의 생각이 <br />
            반응하는 속도 그대로
          </MainSubtitle>
        </SectionHeader>
        <IdentitySlideshowWrapper>hihi</IdentitySlideshowWrapper>
        <SectionBody>
          원활하고 지연 없는 대화. <br />
          착용하는 순간 당신의 작은 의도까지 자동으로 캐치합니다. <br />
          50ms 미만의 연산 속도를 보장합니다.
        </SectionBody>
      </IdentitySection>

      <IdentitySection>
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
        <IdentitySlideshowWrapper>
          <IdentitySlideshowTrack>
            {identityImageList.map((src, idx) => (
              <IdentityImg
                src={src}
                alt={`person${(idx % src.length) + 1}`}
                key={idx}
              />
            ))}
          </IdentitySlideshowTrack>
        </IdentitySlideshowWrapper>
        <SectionBody>
          감정의 톤, 대화의 맥락, 말의 온도까지.
          <br />
          당신만의 방식으로 말하고, 표현하고, 연결되세요.
        </SectionBody>
      </IdentitySection>

      <IdentitySection>
        <SectionHeader>
          <MainTitle>패션의 아이콘.</MainTitle>
          <MainSubtitle>
            가볍고 편하게
            <br />그 무엇보다 스타일리쉬하게
          </MainSubtitle>
        </SectionHeader>
        <IdentitySlideshowWrapper>hihi</IdentitySlideshowWrapper>
        <SectionBody>
          초경량 소재로 무자극 설계로 하루 종일 착용해도 편안합니다.
          <br />
          inTone과 함께 당신의 개성을 살려보세요
        </SectionBody>
      </IdentitySection>
    </>
  );
}
