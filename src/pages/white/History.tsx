import styled, { createGlobalStyle } from "styled-components";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const footstepData = [
  {
    year: "2044",
    title: "🧠 사고 확장형 언어 인터페이스 첫 공개",
    description:
      "신경언어학회 논문 발표. 감정·사고를 연동하는 표현 증강 모델로 주목.",
    image: "https://placehold.co/400x200?text=2044",
  },
  {
    year: "2045",
    title: "📘 글로벌 교육 시스템에 채택",
    description:
      "핀란드·싱가포르·한국 고급교육과정에 'lexical intelligence' 기반 커리큘럼 도입.",
    image: "https://placehold.co/400x200?text=2045",
  },
  {
    year: "2047",
    title: "🏛 세계지식포럼 기술 혁신 선정",
    description:
      "정책·토론·공공소통 전반에 도입. 사고 전달 정확도 43.7배 향상.",
    image: "https://placehold.co/400x200?text=2047",
  },
  {
    year: "2050",
    title: "🏆 AILA Best Tech Award 수상",
    description: "표현 설계형 언어모델로 인류 언어능력 진화의 기점으로 평가됨.",
    image: "https://placehold.co/400x200?text=2050",
  },
  {
    year: "2051~2053",
    title: "💰 132조 원 규모 글로벌 공동 개발",
    description: "72개국과 공동 연구. 차세대 표현 인프라 구축 프로젝트 본격화.",
    image: "https://placehold.co/400x200?text=2051-2053",
  },
  {
    year: "2052",
    title: "🌐 UN 공용 표현 표준 채택",
    description: "외교·조약·국제 회의에서 intone 기반 표현 가이드 적용.",
    image: "https://placehold.co/400x200?text=2052",
  },
  {
    year: "2053",
    title: "🧩 WHO 치료 프로토콜 지정",
    description:
      "인지·언어 불안장애 치료에 활용. 비판적 사고 훈련 효과 74.8배 상승.",
    image: "https://placehold.co/400x200?text=2053",
  },
  {
    year: "2055",
    title: "🪶 도입국 112개국, 누적 사용자 78억 명 돌파",
    description: "표현력 진화의 표준으로 자리잡음",
    image: "https://placehold.co/400x200?text=2055",
  },
];

const impactCards = [
  {
    image: "https://placehold.co/400x260",
    text: "아이들은 사고를 확장하고, 표현의 스펙트럼을 넓히며 지적 성장을 이룹니다.",
  },
  {
    image: "https://placehold.co/400x260",
    text: "직장인은 논리적이고 신뢰감 있는, 교양 있는 커뮤니케이션을 완성합니다.",
  },
  {
    image: "https://placehold.co/400x260",
    text: "노년층은 감정을 정제하며, 더 깊고 진심 어린 대화를 시작합니다.",
  },
];

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  gap: 2rem;
  box-sizing: border-box;

  @media (max-width: 800px) {
    max-width: 98vw;
    padding: 0 0.5rem;
  }
`;

const VisionSection = styled(Section)`
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const VisionText = styled.div`
  flex: 2;
`;

const VisionImageWrapper = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VisionImage = styled(motion.img)`
  width: 320px;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const HandwrittenFont = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
`;

const Handwritten = styled.span`
  font-family: "Dancing Script", cursive;
  font-size: 1.2em;
  color: rgb(255, 90, 0);
  vertical-align: middle;
`;

export default function History() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="page">
      {/* Intro Section */}
      <Section>
        <SectionHead>
          <TypeAnimation
            sequence={[
              1000, // 1 second delay before starting
              "신인류의 언어,\nIntone",
              1000,
            ]}
            wrapper="div"
            speed={30}
            cursor={true}
            repeat={0}
          />
        </SectionHead>
      </Section>

      {/* Vision Section */}
      <VisionSection>
        <VisionText>
          <SectionTag>Our Vision</SectionTag>
          <SectionTitle>우리는 더 유능해졌습니다.</SectionTitle>
          <SectionBody>{`발표, 협상, 연애, 상담, 회의, 교육, 뉴스, SNS, 일상 대화까지—\n모든 말하기의 수준이 한 차원 높아졌습니다.\n우리는 이제, 말할수록 사고가 정제되고, 말할수록 사회가 지능화되는 환경에 살고 있습니다.`}</SectionBody>
          <SectionBody>{`InTone은 단어 선택을넘어, 사고의 구조 자체를 설계할 수 있는 인류 최초의 말하기 인터페이스입니다.\nInTone은 단지 소통을 돕는 도구가 아니라, 사람들이 스스로를 이해하고 정의하는 방식 자체를 바꿨습니다. 고차원의 소통 사회가 실현된 것입니다.\n이제 우리는,언어를 통해 사고하고, 사고를 통해 성장하는 시대에 진입했습니다.`}</SectionBody>
        </VisionText>
        <VisionImageWrapper>
          <VisionImage
            src="https://placehold.co/400x500?text=Vision+Image"
            alt="Vision"
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </VisionImageWrapper>
      </VisionSection>

      {/* Footstep Section */}
      <Section>
        <SectionTag>Our Footstep</SectionTag>
        <SectionTitle>세상을 바꾼 언어 인터페이스의 등장.</SectionTitle>
        <SectionBody>{`우리는 지난 10년간 표현의 가능성을 넓히는 언어 인터페이스라는 새로운 관점을 사회에 제시했습니다.\n그동안 112개국을 거쳐 78억명 사람들이 새로운 사고를 시작했고,\n지금 이 순간에도, 30억 1,200만 명이 intone을 통해 말하고 있습니다.`}</SectionBody>

        <CarouselContainer>
          <StyledSlider {...settings}>
            {footstepData.map((item, index) => (
              <CarouselItem key={index}>
                <CarouselText>
                  <Year>{item.year}</Year>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </CarouselText>
                <CarouselImage src={item.image} alt={item.title} />
              </CarouselItem>
            ))}
          </StyledSlider>
        </CarouselContainer>
      </Section>

      {/* Impact Section */}
      <Section>
        <SectionTag>Our Impact</SectionTag>
        <SectionTitle>각자의 말, 각자의 방식, 각자의 목소리로</SectionTitle>
        <ImpactCardGrid>
          {impactCards.map((card, idx) => (
            <ImpactCard key={idx}>
              <ImpactCardImage src={card.image} alt={card.text} />
              <ImpactCardOverlay>
                <ImpactCardText>{card.text}</ImpactCardText>
              </ImpactCardOverlay>
            </ImpactCard>
          ))}
        </ImpactCardGrid>
        <SectionBody>{`우리는 이제 서로를 더 잘 이해하고,\n각자의 방식으로 연결되며,\n각자의 생각을 더 온전하게 전달할 수 있게 되었습니다.\n우리는 더 이상 실패하지 않습니다.\n언어는 인류의 고도화된 지능과 진화의 산물이며,\n모든 불완전성을 제거하며 완벽하게 지켜내고 있습니다.`}</SectionBody>
      </Section>

      {/* Outro Section */}
      <Section>
        <HandwrittenFont />
        <SectionHead>
          {`우리는 지금, 인류 언어의 `}
          <Handwritten>Renaissance</Handwritten>
          {`
한가운데에 있습니다.`}
        </SectionHead>
        <SectionHead>{`InTone. A new age of expression.`}</SectionHead>
      </Section>
    </div>
  );
}

const SectionTag = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: rgb(255, 90, 0);
`;

const SectionHead = styled.div`
  font-size: 56px;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 1.2;
  text-align: center;
  min-height: 140px; /* Added to prevent layout shift during typing */
`;

const SectionTitle = styled.div`
  font-size: 56px;
  font-weight: 700;
  white-space: pre-wrap;
`;

const SectionBody = styled.p`
  font-size: 18px;
  white-space: pre-wrap;
  font-weight: 600;
  line-height: 1.5;
`;

const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const StyledSlider = styled(Slider)`
  .slick-dots li button:before {
    color: rgb(255, 90, 0);
  }
  .slick-dots li.slick-active button:before {
    color: rgb(255, 90, 0);
  }
  .slick-prev:before,
  .slick-next:before {
    color: rgb(255, 90, 0);
  }
`;

const CarouselItem = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 400px;
  max-width: 320px;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    z-index: 2;
  }
`;

const CarouselText = styled.div`
  padding: 1.5rem 1.2rem 1rem 1.2rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.95) 80%,
    rgba(255, 255, 255, 0.7) 100%
  );
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Year = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: rgb(255, 90, 0);
  margin-bottom: 0.5rem;
`;

const ItemTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ItemDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

const ImpactCardGrid = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ImpactCard = styled.div`
  background: #f7f7f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
`;

const ImpactCardImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
`;

const ImpactCardOverlay = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 64px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.65) 80%,
    rgba(0, 0, 0, 0.05) 100%
  );
  padding: 20px;
`;

const ImpactCardText = styled.div`
  width: 100%;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  line-height: 1.6;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  width: 100%;
  word-break: keep-all;
`;
