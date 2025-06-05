import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const footstepData = [
  {
    year: "2015",
    title: "Intone의 시작",
    description: "인공지능 기반 음성 인식 기술 연구 시작",
  },
  {
    year: "2016",
    title: "첫 번째 프로토타입",
    description: "실시간 음성 변환 기술 개발 완료",
  },
  {
    year: "2017",
    title: "시리즈 A 투자 유치",
    description: "주요 벤처캐피탈로부터 100억 투자 유치",
  },
  {
    year: "2018",
    title: "글로벌 진출",
    description: "미국, 일본, 유럽 시장 진출",
  },
  {
    year: "2019",
    title: "기술 혁신",
    description: "자연어 처리 기술 특허 획득",
  },
  {
    year: "2020",
    title: "시리즈 B 투자",
    description: "500억 규모 투자 유치",
  },
  {
    year: "2021",
    title: "글로벌 확장",
    description: "전 세계 50개국 서비스 제공",
  },
  {
    year: "2022",
    title: "미래를 향한 도약",
    description: "차세대 AI 음성 기술 개발 착수",
  },
];

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
      <Section>
        <SectionTag>Our Vision</SectionTag>
        <SectionTitle>우리는 더 유능해졌습니다.</SectionTitle>
        <SectionBody>{`발표, 협상, 연애, 상담, 회의, 교육, 뉴스, SNS, 일상 대화까지—\n모든 말하기의 수준이 한 차원 높아졌습니다.\n우리는 이제, 말할수록 사고가 정제되고, 말할수록 사회가 지능화되는 환경에 살고 있습니다.`}</SectionBody>
      </Section>

      {/* Footstep Section */}
      <Section>
        <SectionTag>Our Footstep</SectionTag>
        <SectionTitle>우리의 발자취</SectionTitle>
        <CarouselContainer>
          <StyledSlider {...settings}>
            {footstepData.map((item, index) => (
              <CarouselItem key={index}>
                <Year>{item.year}</Year>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </CarouselItem>
            ))}
          </StyledSlider>
        </CarouselContainer>
      </Section>

      {/* Impact Section */}
      <Section>
        <SectionTag>Our Impact</SectionTag>
        <SectionTitle>우리의 영향력</SectionTitle>
        <SectionBody>{`전 세계 수백만 명의 사용자들이 Intone을 통해 더 나은 소통을 경험하고 있습니다.\n우리의 기술은 교육, 비즈니스, 일상생활의 모든 영역에서 변화를 만들어내고 있습니다.`}</SectionBody>
      </Section>

      {/* Outro Section */}
      <Section>
        <SectionTag>Join Us</SectionTag>
        <SectionTitle>함께 만들어가는 미래</SectionTitle>
        <SectionBody>{`Intone과 함께 더 나은 소통의 미래를 만들어가세요.\n우리는 당신의 목소리를 기다립니다.`}</SectionBody>
      </Section>
    </div>
  );
}

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  gap: 2rem;
`;

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
  padding: 2rem;
  margin: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  height: 200px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
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
