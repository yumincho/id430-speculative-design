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
  TextHighlight,
} from "../../components/common";
import { useEffect, useState } from "react";
// import { useState, useEffect } from "react";

const footstepData = {
  white: [
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
      description:
        "표현 설계형 언어모델로 인류 언어능력 진화의 기점으로 평가됨.",
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
      description: "외교·조약·국제 회의에서 inTone 기반 표현 가이드 적용.",
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
  ],
  dark: [
    {
      year: "2046",
      title: "🛑 비인가 발화자 17명, 공식 대화에서 퇴출",
      description:
        "공식 문서와 회의 발언에서 AI 통역기를 사용하지 않은 17명이 '비인가 발화자'로 규정되어 강제 퇴장 조치. 표현 방식의 표준화가 곧 말할 수 있는 자격이 되었고, 이는 발화권에 대한 사회적 격리를 촉진시켰다.",
      image: "./imgs/d-case-unverified.png",
    },
    {
      year: "2047",
      title: "🧬 언어 습관 기반 보험 요율 차별 첫 확인",
      description:
        "통역기 언어 로그를 기반으로 '공격적 표현 습관'이 분석된 사용자에 대해 보험료가 인상된 사례가 보고됨. 언어가 인격을 판단하는 기준이 되며, 표현 방식에 따라 금융 접근권이 차등화되기 시작했다.",
      image: "./imgs/d-case-insurance.png",
    },
    {
      year: "2049",
      title: "📵 무통역 발화 금지 조례 통과",
      description:
        "일부 지역에서는 AI 통역기 비사용 발화를 불쾌한 소음으로 간주, 공공장소에서 직접 발화를 금지하는 조례가 통과됨. 규정 외 언어는 '비인가 발성'으로 분류되어 제재의 대상이 되었다.",
      image: "./imgs/d-case-banvoice.png",
    },
    {
      year: "2051",
      title: "🧠 언어 편향 감지 시스템 도입",
      description:
        "표현이 개인적 편향을 유도할 가능성이 있는지를 사전 판단하는 알고리즘이 정부 기관에 도입됨. 사용자들은 자신의 발화가 왜 수정되었는지 모른 채 '가장 안전한 말'만 선택하게 되었다.",
      image: "./imgs/d-case-biascheck.png",
    },
    {
      year: "2052",
      title: "🎭 발화 필터링 회피 시도, '이중 음성' 등장",
      description:
        "통역기의 필터링을 피해 자기 생각을 암묵적으로 전달하려는 '이중 음성' 사용자들이 등장. 그러나 이들 대부분은 시스템에 의해 감지되었고, 발언권 정지 처분을 받았다.",
      image: "./imgs/d-case-doublevoice.png",
    },
    {
      year: "2053",
      title: "📉 자발적 발화능력 감퇴 보고서 발표",
      description:
        "심리언어학회는 AI 통역기 장기 사용자 집단에서 **언어 창조력과 자발적 발화능력의 급격한 저하**를 확인했다고 발표. 통역기가 뇌의 사고 경로 일부를 대체하고 있다는 우려가 현실이 되었다.",
      image: "./imgs/d-case-decline.png",
    },
    {
      year: "2054",
      title: "🔒 AI에 기록되지 않은 말, 존재하지 않는 것으로 간주",
      description:
        "표현의 검증 기준이 'AI 기록 여부'로 바뀌며, 통역기에 기록되지 않은 말은 법적·행정적으로 효력을 인정받지 못하게 됨. 발화의 존재는 더 이상 사람의 목소리가 아닌, 데이터에 의해 증명된다.",
      image: "./imgs/d-case-nonexistent.png",
    },
    {
      year: "2055",
      title: "💭 통역기 없는 세대와의 대화 실패율 96.7%",
      description:
        "10대 이전 통역기 비사용 세대와, 통역기에 의존한 이후 세대 간 **기본 언어구조의 괴리**가 발생. 서로의 말이 더 이상 해독되지 않으며, 언어의 세대 단절이 공식 보고되었다.",
      image: "./imgs/d-case-generationgap.png",
    },
  ],
};

const impactCards = {
  white: [
    {
      image: "./imgs/w-history-impact1.png",
      text: "**아이들은** 사고를 확장하고, \n표현의 스펙트럼을 넓히며\n지적 성장을 이룹니다.",
    },
    {
      image: "./imgs/w-history-impact2.png",
      text: "**직장인은** 논리적이고 신뢰감 있는, \n교양 있는 커뮤니케이션을 완성합니다.",
    },
    {
      image: "./imgs/w-history-impact3.png",
      text: "**노년층은** 감정을 정제하며, \n더 깊고 진심 어린 대화를 시작합니다.",
    },
  ],
  dark: [
    {
      image: "./imgs/d-history-impact1.png",
      text: "**아이들은** 더는 스스로 문장을 만들지 않습니다. \n사고는 시스템이 설계하고,\n표현을 통제하며 사회적 단일화를 이룹니다.",
    },
    {
      image: "./imgs/d-history-impact2.png",
      text: "**직장인은** AI와 회사의 통제를,\n감시를, 검열을 거부할 수 없습니다.\n허용된 말만이 교양이 되었고,\n이견은 부적절함으로 분류됩니다.",
    },
    {
      image: "./imgs/d-history-impact3.png",
      text: "**노년층은** 이제 소통에서 고립됩니다.\nAI와 기술에 의해 소외되고,\n자신의 언어를 빠르게 잃습니다.",
    },
  ],
};

const introGifList = [
  "./videos/w-history-intro-1.gif",
  "./videos/w-history-intro-2.gif",
  "./videos/w-history-intro-3.gif",
];

const introGifListDark = [
  "./videos/d-history-intro-1.gif",
  "./videos/d-history-intro-2.gif",
  "./videos/d-history-intro-3.gif",
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
  position: relative;

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

const TextwithHighlight = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const highlightedText = part.slice(2, -2);
          return <TextHighlight key={index}>{highlightedText}</TextHighlight>;
        }
        return part;
      })}
    </>
  );
};

const AlternatingText = ({ words }: { words: string[] }) => {
  const [text, setText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 1500); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return <TextHighlight>{words[text]}</TextHighlight>;
};

const allContents = {
  dark: {
    intro: {
      title: "설계된 언어,\ninTone",
    },
    vision: {
      tag: "Illusion",
      title: "우리는 차이를 버렸습니다.",
      body1: `발표, 협상, 연애, 상담, 회의, 교육, 뉴스, SNS, 일상 대화까지—\n모든 말하기의 형식이 하나로 통일되었습니다.\n우리는 이제, 말할수록 감정이 제거되고, 말할수록 사회가 단일화되는 환경에 살고 있습니다.`,
      body2: `inTone은 단어 선택을 돕는 것이 아니라, **사고의 구조를 규격화하는** 최초의 말하기 시스템입니다.\ninTone은 사람들의 자아를 표현하는 방식을 **'정답화'**했고,\n그 결과, 다양한 말들은 조용히 사라졌습니다.`,
    },
    footstep: {
      tag: "Consequence",
      title: "주체성을 잃은 우리. 우리의 말.",
      body: `우리는 표현의 주체임을 포기하고, 표현의 기준을 따르게 되었습니다.\n112개국에서 시작된 언어의 정제는, 78억 명을 대상으로 확장되었고,\n지금 이 순간에도, 30억 1,200만 명이 '자신의 말' 대신 '시스템의 언어'를 출력하고 있습니다.`,
      cards: footstepData.dark,
    },
    impact: {
      tag: "Symptom",
      title: "각자의 말은 사라지고,\n각자의 침묵만 남았습니다.",
      cards: impactCards.dark,
      body: `우리는 이제 서로의 진심을 들을 수 없습니다.\n각자의 생각은 통역기의 필터를 통과하며,\n서로의 '패턴'만을 이해하게 되었습니다.`,
    },
    outro: {
      title: `우리는 더 이상 말하지 않습니다.`,
      words: ["말", "표현", "생각", "판단", "선택"],
      subtitle: `언어는 인류의 본능이었지만,\ninTone은 그 본능을 통제 가능한 입력값으로 바꾸었습니다.\n\ninTone. A new age of regulation.`,
    },
  },
  white: {
    intro: {
      title: "신인류의 언어,\ninTone",
    },
    vision: {
      tag: "Vision",
      title: "우리는 더 유능해졌습니다.",
      body1: `발표, 협상, 연애, 상담, 회의, 교육, 뉴스, SNS, 일상 대화까지—\n모든 말하기의 수준이 한 차원 높아졌습니다.\n우리는 이제, **말할수록 사고가 정제되고, 말할수록 사회가 지능화**되는 환경에 살고 있습니다.`,
      body2: `**inTone**은 단어 선택을넘어, 사고의 구조 자체를 설계할 수 있는 인류 최초의 말하기 인터페이스입니다.\ninTone은 단지 소통을 돕는 도구가 아니라, 사람들이 스스로를 이해하고 정의하는 방식 자체를 바꿨습니다.\n고차원의 소통 사회가 실현된 것입니다.`,
    },
    footstep: {
      tag: "Footstep",
      title: "세상을 바꾼 언어 인터페이스의 등장.",
      body: `우리는 지난 10년간 표현의 가능성을 넓히는 언어 인터페이스라는 새로운 관점을 사회에 제시했습니다.\n그동안 112개국을 거쳐 78억명 사람들이 새로운 사고를 시작했고,\n지금 이 순간에도, 30억 1,200만 명이 inTone을 통해 말하고 있습니다.`,
      cards: footstepData.white,
    },
    impact: {
      tag: "Impact",
      title: "각자의 말, 각자의 방식, 각자의 목소리로",
      cards: impactCards.white,
      body: `우리는 이제 서로를 더 잘 이해하고, 각자의 방식으로 연결되며,\n각자의 생각을 더 온전하게 전달할 수 있게 되었습니다.`,
    },
    outro: {
      title: `우리는 더 이상 실패하지 않습니다.`,
      words: ["실패", "오해", "대립", "분쟁", "왜곡"],
      subtitle: `언어는 인류의 고도화된 지능과 진화의 산물이며,\ninTone을 통해 모든 불완전성을 제거하며 완벽하게 지켜내고 있습니다.\n\ninTone. A new age of expression.`,
    },
  },
};

export default function History() {
  const theme = useTheme();
  const isDark = theme.mode === "dark";
  const contents = allContents[isDark ? "dark" : "white"];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            display: "flex",
          }}
        >
          {isDark
            ? introGifListDark.map((gif, idx) => (
                <img
                  key={idx}
                  src={gif}
                  alt="history intro"
                  width="35%"
                  style={{ objectFit: "cover" }}
                />
              ))
            : introGifList.map((gif, idx) => (
                <img
                  key={idx}
                  src={gif}
                  alt="history intro"
                  width="35%"
                  style={{ objectFit: "cover" }}
                />
              ))}
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            display: "flex",
            background: isDark ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.3)",
          }}
        />
        <SectionHead>
          <TypeAnimation
            sequence={[1000, contents.intro.title, 1000]}
            wrapper="div"
            speed={30}
            cursor={true}
            repeat={0}
            style={{
              zIndex: 10,
              color: "white",
            }}
          />
        </SectionHead>
      </Section>

      {/* Vision Section */}
      <Section margin={true}>
        <SectionHeader>
          <TextTag>{contents.vision.tag}</TextTag>
          <TextHead>{contents.vision.title}</TextHead>
        </SectionHeader>

        <ImgWall
          style={{ objectPosition: "top" }}
          height={500}
          src={isDark ? "./imgs/d-history-v1.png" : "./imgs/w-history-v1.png"}
        />
        <TextBody>
          <TextwithHighlight text={contents.vision.body1} />
        </TextBody>
        <ImgWall
          style={{ objectPosition: "top" }}
          height={500}
          src={isDark ? "./imgs/d-history-v2.png" : "./imgs/w-history-v2.png"}
        />
        <TextBody>
          <TextwithHighlight text={contents.vision.body2} />
        </TextBody>
      </Section>

      {/* Footstep Section */}
      <Section margin={true} background={true}>
        <SectionHeader>
          <TextTag>{contents.footstep.tag}</TextTag>
          <TextHead>{contents.footstep.title}</TextHead>
        </SectionHeader>

        <TextBody>{contents.footstep.body}</TextBody>

        <CarouselContainer>
          <StyledSlider {...settings}>
            {contents.footstep.cards.map((item, index) => (
              <CarouselItem key={index}>
                <CarouselText>
                  <TextTag>{item.year}</TextTag>
                  <TextBody align="left">{item.title}</TextBody>
                  <TextDescription align="left">
                    {item.description}
                  </TextDescription>
                </CarouselText>
                {/* <CarouselImage src={item.image} alt={item.title} /> */}
              </CarouselItem>
            ))}
          </StyledSlider>
        </CarouselContainer>
      </Section>

      {/* Impact Section */}
      <Section margin={true}>
        <SectionHeader>
          <TextTag>{contents.impact.tag}</TextTag>
          <TextHead>{contents.impact.title}</TextHead>
        </SectionHeader>

        <ImpactCardGrid>
          {contents.impact.cards.map((card, idx) => (
            <ImpactCard key={idx}>
              <ImpactCardImage src={card.image} alt={card.text} />
              <ImpactCardText>
                <TextwithHighlight text={card.text} />
              </ImpactCardText>
            </ImpactCard>
          ))}
        </ImpactCardGrid>
        <TextBody>{contents.impact.body}</TextBody>
      </Section>

      {/* Outro Section */}
      <Section>
        <TextHead>
          {`우리는 더 이상 `}
          <AlternatingText words={contents.outro.words} />
          {isDark ? "할 수 없습니다." : "하지 않습니다."}
        </TextHead>
        <TextSubHead align="center">{contents.outro.subtitle}</TextSubHead>
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
  z-index: 10;
`;

const CarouselContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.backgroundSecondary};
  margin-bottom: 2rem;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -40px; // Move dots down by 40px
  }

  .slick-dots li {
    width: 20px;
    height: 20px;
  }

  .slick-dots li button:before {
    width: 20px;
    height: 20px;
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

  min-height: 250px;
  /* border-radius: 2rem; */

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

const ImpactCardGrid = styled.div`
  width: 100%;
  display: flex;

  margin-top: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImpactCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.background};
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  height: 400px;
  box-sizing: border-box;
`;

const ImpactCardImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  display: block;
  ${({ theme }) => `
    mask-image: linear-gradient(
    to bottom,
    ${theme.backgroundReverse}FF,
    ${theme.backgroundReverse}FF,
    rgba(0, 0, 0, 0)
  );
  `}
`;

const ImpactCardText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  position: relative;
  padding: 16px;

  white-space: pre-wrap;
  opacity: 0.8;
`;
