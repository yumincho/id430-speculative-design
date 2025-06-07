import styled, { useTheme } from "styled-components";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ImgWall,
  TextBody,
  TextHead,
  // TextHighlight,
  TextTag,
  // AnimatedNumber,
  TextDescription,
  TextSubHead,
} from "../../components/common";
// import { useState, useEffect } from "react";

const footstepData = [
  {
    year: "2044",
    title: "🧠 사고 확장형 언어 인터페이스 첫 공개",
    description:
      "신경언어학회 논문 발표. 감정·사고를 연동하는 표현 증강 모델로 주목.",
    image: "./imgs/w-main-identity1.png",
  },
  {
    year: "2045",
    title: "📘 글로벌 교육 시스템에 채택",
    description:
      "핀란드·싱가포르·한국 고급교육과정에 'lexical intelligence' 기반 커리큘럼 도입.",
    image: "./imgs/w-main-identity2.png",
  },
  {
    year: "2047",
    title: "🏛 세계지식포럼 기술 혁신 선정",
    description:
      "정책·토론·공공소통 전반에 도입.\n사고 전달 정확도 43.7배 향상.",
    image: "./imgs/w-main-identity3.png",
  },
  {
    year: "2050",
    title: "🏆 AILA Best Tech Award 수상",
    description: "표현 설계형 언어모델로 인류 언어능력 진화의 기점으로 평가됨.",
    image: "./imgs/w-main-identity4.png",
  },
  {
    year: "2051~2053",
    title: "💰 132조 원 규모 글로벌 공동 개발",
    description:
      "72개국과 공동 연구.\n차세대 표현 인프라 구축 프로젝트 본격화.",
    image: "./imgs/w-main-identity5.png",
  },
  {
    year: "2052",
    title: "🌐 UN 공용 표현 표준 채택",
    description: "외교·조약·국제 회의에서 intone 기반 표현 가이드 적용.",
    image: "./imgs/w-main-identity6.png",
  },
  {
    year: "2053",
    title: "🧩 WHO 치료 프로토콜 지정",
    description:
      "인지·언어 불안장애 치료에 활용.\n비판적 사고 훈련 효과 74.8배 상승.",
    image: "./imgs/w-main-identity7.png",
  },
  {
    year: "2055",
    title: "🪶 도입국 112개국,\n누적 사용자 78억 명 돌파",
    description: "표현력 진화의 표준으로 자리잡음",
    image: "./imgs/w-main-identity8.png",
  },
];

const impactCards = [
  {
    image: "./imgs/w-main-style1.png",
    text: "아이들은 사고를 확장하고, \n표현의 스펙트럼을 넓히며 지적 성장을 이룹니다.",
  },
  {
    image: "./imgs/w-main-style2.png",
    text: "직장인은 논리적이고 신뢰감 있는, \n교양 있는 커뮤니케이션을 완성합니다.",
  },
  {
    image: "./imgs/w-main-teaser.png",
    text: "노년층은 감정을 정제하며, \n더 깊고 진심 어린 대화를 시작합니다.",
  },
];

const Wrapper = styled.div`
  & > *:first-child {
    min-height: calc(100vh - 200px); // 원하는 height
    margin-bottom: 100px;
  }
`;

const Section = styled.div<{ margin?: boolean; background?: boolean }>`
  min-height: 100vh;
  height: fit-content;
  width: 100vw;

  box-sizing: border-box;
  padding: 0 15rem;
  margin: ${({ margin }) => (margin === true ? "20rem 0" : "0")};

  background-color: ${({ background, theme }) =>
    background === true ? theme.backgroundSecondary : theme.background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 800px) {
    max-width: 98vw;
    padding: 0 0.5rem;
  }
`;

const SectionHeader = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

// const AnimatedCounter: React.FC<{ children: string }> = ({ children }) => {
//   // Parse the initial value to separate numbers and units
//   const parseValue = (value: string) => {
//     const match = value.match(/(\d+)억\s*(\d+)만\s*명/);
//     if (!match) return { billions: 30, millions: 1200 };
//     return {
//       billions: parseInt(match[1]),
//       millions: parseInt(match[2].replace(/,/g, "")),
//     };
//   };

//   const [values, setValues] = useState(parseValue(children));
//   const [isAnimatingBillions, setIsAnimatingBillions] = useState(false);
//   const [isAnimatingMillions, setIsAnimatingMillions] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Animate billions
//       setIsAnimatingBillions(true);
//       setTimeout(() => {
//         setValues((prev) => ({
//           ...prev,
//           billions: Math.floor(Math.random() * 10) + 30,
//         }));
//         setIsAnimatingBillions(false);
//       }, 300);

//       // Animate millions with a slight delay
//       setTimeout(() => {
//         setIsAnimatingMillions(true);
//         setTimeout(() => {
//           setValues((prev) => ({
//             ...prev,
//             millions: Math.floor(Math.random() * 10000),
//           }));
//           setIsAnimatingMillions(false);
//         }, 300);
//       }, 150);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <TextHighlight>
//       <AnimatedNumber
//         style={{
//           animation: isAnimatingBillions ? "none" : undefined,
//           width: "26px",
//         }}
//       >
//         {values.billions}
//       </AnimatedNumber>
//       {`억 `}
//       <AnimatedNumber
//         style={{
//           animation: isAnimatingMillions ? "none" : undefined,
//           width: "58px",
//         }}
//       >
//         {values.millions.toLocaleString()}
//       </AnimatedNumber>
//       {`만 명`}
//     </TextHighlight>
//   );
// };

// // First, let's create a new component for the alternating text
// const AlternatingText: React.FC = () => {
//   const words = ["실패", "오해", "대립", "분쟁", "왜곡"];
//   const [text, setText] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setText((prev) => (prev === words.length - 1 ? 0 : prev + 1));
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return <TextHighlight>{words[text]}</TextHighlight>;
// };

const allContents = {
  dark: {
    intro: {
      title: "신인류의 언어,\ninTone",
    },
    vision: {
      tag: "Vision",
      title: "우리는 더 유능해졌습니다.",
      body1: `발표, 협상, 연애, 상담, 회의, 교육, 뉴스, SNS, 일상 대화까지—\n모든 말하기의 수준이 한 차원 높아졌습니다.\n우리는 이제, 말할수록 사고가 정제되고, 말할수록 사회가 지능화되는 환경에 살고 있습니다.`,
      body2: `inTone은 단어 선택을넘어, 사고의 구조 자체를 설계할 수 있는 인류 최초의 말하기 인터페이스입니다.\ninTone은 단지 소통을 돕는 도구가 아니라, 사람들이 스스로를 이해하고 정의하는 방식 자체를 바꿨습니다.\n고차원의 소통 사회가 실현된 것입니다.`,
    },
    footstep: {
      tag: "Footstep",
      title: "세상을 바꾼 언어 인터페이스의 등장.",
      body: `우리는 지난 10년간 표현의 가능성을 넓히는 언어 인터페이스라는 새로운 관점을 사회에 제시했습니다.\n그동안 112개국을 거쳐 78억명 사람들이 새로운 사고를 시작했고,\n지금 이 순간에도, 30억 1,200만 명이 intone을 통해 말하고 있습니다.`,
      cards: footstepData,
    },
    impact: {
      tag: "Impact",
      title: "각자의 말, 각자의 방식, 각자의 목소리로",
      cards: impactCards,
      body: `우리는 이제 서로를 더 잘 이해하고, 각자의 방식으로 연결되며,\n각자의 생각을 더 온전하게 전달할 수 있게 되었습니다.`,
    },
    outro: {
      title: `우리는 더 이상 실패하지 않습니다.`,
      subtitle: `언어는 인류의 고도화된 지능과 진화의 산물이며,\ninTone을 통해 모든 불완전성을 제거하며 완벽하게 지켜내고 있습니다.\ninTone. A new age of expression.`,
    },
  },
  white: {
    intro: {
      title: "신인류의 언어,\ninTone",
    },
    vision: {
      tag: "Vision",
      title: "우리는 더 유능해졌습니다.",
      body1: `발표, 협상, 연애, 상담, 회의, 교육, 뉴스, SNS, 일상 대화까지—\n모든 말하기의 수준이 한 차원 높아졌습니다.\n우리는 이제, 말할수록 사고가 정제되고, 말할수록 사회가 지능화되는 환경에 살고 있습니다.`,
      body2: `inTone은 단어 선택을넘어, 사고의 구조 자체를 설계할 수 있는 인류 최초의 말하기 인터페이스입니다.\ninTone은 단지 소통을 돕는 도구가 아니라, 사람들이 스스로를 이해하고 정의하는 방식 자체를 바꿨습니다.\n고차원의 소통 사회가 실현된 것입니다.`,
    },
    footstep: {
      tag: "Footstep",
      title: "세상을 바꾼 언어 인터페이스의 등장.",
      body: `우리는 지난 10년간 표현의 가능성을 넓히는 언어 인터페이스라는 새로운 관점을 사회에 제시했습니다.\n그동안 112개국을 거쳐 78억명 사람들이 새로운 사고를 시작했고,\n지금 이 순간에도, 30억 1,200만 명이 intone을 통해 말하고 있습니다.`,
      cards: footstepData,
    },
    impact: {
      tag: "Impact",
      title: "각자의 말, 각자의 방식, 각자의 목소리로",
      cards: impactCards,
      body: `우리는 이제 서로를 더 잘 이해하고, 각자의 방식으로 연결되며,\n각자의 생각을 더 온전하게 전달할 수 있게 되었습니다.`,
    },
    outro: {
      title: `우리는 더 이상 실패하지 않습니다.`,
      subtitle: `언어는 인류의 고도화된 지능과 진화의 산물이며,\ninTone을 통해 모든 불완전성을 제거하며 완벽하게 지켜내고 있습니다.\ninTone. A new age of expression.`,
    },
  },
};

export default function History() {
  const theme = useTheme();
  // const isWhite = theme.mode === "white";
  const content = allContents[theme.mode];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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
    <Wrapper>
      {/* Intro Section */}
      <Section>
        <SectionHead>
          <TypeAnimation
            sequence={[1000, content.intro.title, 1000]}
            wrapper="div"
            speed={30}
            cursor={true}
            repeat={0}
          />
        </SectionHead>
      </Section>

      {/* Vision Section */}
      <Section margin={true}>
        <SectionHeader>
          <TextTag>{content.vision.tag}</TextTag>
          <TextHead align="center">{content.vision.title}</TextHead>
        </SectionHeader>

        <ImgWall src="./imgs/w-main-identity1.png" />
        <TextBody>{content.vision.body1}</TextBody>
        <ImgWall src="./imgs/w-main-identity2.png" />
        <TextBody>{content.vision.body2}</TextBody>
      </Section>

      {/* Footstep Section */}
      <Section margin={true} background={true}>
        <SectionHeader>
          <TextTag>{content.footstep.tag}</TextTag>
          <TextHead>{content.footstep.title}</TextHead>
        </SectionHeader>

        <TextBody>{content.footstep.body}</TextBody>

        <CarouselContainer>
          <StyledSlider {...settings}>
            {content.footstep.cards.map((item, index) => (
              <CarouselItem key={index}>
                <CarouselText>
                  <TextTag>{item.year}</TextTag>
                  <TextBody align="left">{item.title}</TextBody>
                  <TextDescription align="left">
                    {item.description}
                  </TextDescription>
                </CarouselText>
                <CarouselImage src={item.image} alt={item.title} />
              </CarouselItem>
            ))}
          </StyledSlider>
        </CarouselContainer>
      </Section>

      {/* Impact Section */}
      <Section margin={true}>
        <SectionHeader>
          <TextTag>{content.impact.tag}</TextTag>
          <TextHead>{content.impact.title}</TextHead>
        </SectionHeader>

        <ImpactCardGrid>
          {content.impact.cards.map((card, idx) => (
            <ImpactCard key={idx}>
              <ImpactCardImage src={card.image} alt={card.text} />
              <ImpactCardOverlay>
                <ImpactCardText>{card.text}</ImpactCardText>
              </ImpactCardOverlay>
            </ImpactCard>
          ))}
        </ImpactCardGrid>
        <TextBody>{content.impact.body}</TextBody>
      </Section>

      {/* Outro Section */}
      <Section>
        <TextHead>{content.outro.title}</TextHead>
        <TextSubHead align="center">{content.outro.subtitle}</TextSubHead>
      </Section>
    </Wrapper>
  );
}

const SectionHead = styled.div`
  font-size: 56px;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 1.2;
  text-align: center;
  min-height: 140px; /* Added to prevent layout shift during typing */
`;

const CarouselContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -40px; // Move dots down by 40px
  }

  .slick-dots li button:before {
    color: ${({ theme }) => theme.brandColor};
  }

  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.brandColor};
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme }) => theme.brandColor};
  }
`;

const CarouselItem = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background: ${({ theme }) => theme.background};

  height: 400px;

  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
  z-index: 1;

  cursor: pointer;

  &:hover {
    transform: scale(102%);
    z-index: 5;
  }
`;

const CarouselText = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.3rem;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ImpactCardGrid = styled.div`
  display: flex;

  margin-top: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImpactCard = styled.div`
  background: #f7f7f9;
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
  min-height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.6) 60%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 20px;
`;

const ImpactCardText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.brandColor};
`;
