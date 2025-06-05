import styled from "styled-components";

export default function History() {
  return (
    <div className="page">
      {/* Intro Section */}
      <Section>
        <SectionHead>{"신인류의 언어,\nIntone"}</SectionHead>
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
        <SectionBody>{`지난 10년간 우리는 인공지능과 인간의 소통을 혁신해왔습니다.\n수많은 도전과 성공을 통해 우리는 더 나은 미래를 향해 나아가고 있습니다.`}</SectionBody>
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
