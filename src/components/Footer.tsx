import styled from "styled-components";

const description = `
  이 정보는 2055년 03월 19일 기준 최신 정보입니다.
    1. inTone은 음성 데이터, 대화 로그, 사고 분석 알고리즘을 기반으로 맞춤형 어휘 추천, 표현 리프레이징, 사고 구조 가이드를 제공합니다.
    2. 일부 감정 분석 및 고급 언어 생성 기능은 특정 기기 모델 또는 inTone Pro 플랜에서만 제공됩니다.  
    3. 일부 기능은 사용자의 사고/감정 데이터를 기반으로 작동하며, 선택적 개인정보 수집 및 이용 동의가 필요합니다.
    4. 서비스의 정확성과 결과는 사용자의 사용 방식, 언어 습관, 기기 사양, 네트워크 환경에 따라 달라질 수 있습니다.
    5. inTone은 고급 사고 도구이지만, 최종 표현에 대한 책임은 사용자에게 있습니다.
    6. inTone 베이직 에디션은 음성 입출력 기기 1종(기본형)과 베이직 AI 소프트웨어로 구성됩니다.
    7. Pro, Advanced, Expert 버전은 어휘 용량, 감정 분석 정밀도, 사고 확장 범위가 상이하며 자세한 사양은 각 제품 페이지에서 확인하세요.
  기능은 변경될 수 있습니다. 일부 기능, 애플리케이션 및 서비스를 이용할 수 없는 국가나 언어도 있으며, 특정 하드웨어 및 소프트웨어가 필요할 수 있습니다.
`;

const FooterContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 26rem;
  color: #888;
  text-align: center;
  font-size: 12px;
  margin: 5rem 0 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4rem;

  white-space: pre-wrap;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div style={{ textAlign: "left" }}>{description}</div>
      <div style={{ alignSelf: "center" }}>
        ©{new Date().getFullYear() + 30} inTone. All rights reserved.
      </div>
    </FooterContainer>
  );
}
