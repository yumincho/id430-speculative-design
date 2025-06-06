import styled from "styled-components";
import mainTeaser from "../../assets/imgs/w-main-teaser.png";
import productImg from "../../assets/imgs/w-main-product.png";

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

const MainSubtitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-align: center;
  line-height: 1.3;
  margin: 10rem 0;
  white-space: pre-line;
`;

const ProductSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-sizing: border-box;
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

export default function Home() {
  return (
    <>
      <FirstSection>
        <ImageWrapper>
          <MainHeadline>inTone</MainHeadline>
          <MainImage src={mainTeaser} alt="inTone main visual" />
        </ImageWrapper>
        <MainSubtitle>{`입체적인 어휘,\n넓어지는 사고,\n섬세한 소통`}</MainSubtitle>
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
    </>
  );
}
