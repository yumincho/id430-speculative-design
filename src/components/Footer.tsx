import styled, { useTheme } from "styled-components";

const description = {
  white: `
  이 정보는 2055년 03월 19일 기준 최신 정보입니다.
    1. inTone은 음성 데이터, 대화 로그, 사고 분석 알고리즘을 기반으로 맞춤형 어휘 추천, 표현 리프레이징, 사고 구조 가이드를 제공합니다.
    2. 일부 감정 분석 및 고급 언어 생성 기능은 특정 기기 모델 또는 inTone Pro 플랜에서만 제공됩니다.  
    3. 일부 기능은 사용자의 사고/감정 데이터를 기반으로 작동하며, 선택적 개인정보 수집 및 이용 동의가 필요합니다.
    4. 서비스의 정확성과 결과는 사용자의 사용 방식, 언어 습관, 기기 사양, 네트워크 환경에 따라 달라질 수 있습니다.
    5. inTone은 고급 사고 도구이지만, 최종 표현에 대한 책임은 사용자에게 있습니다.
    6. inTone 베이직 에디션은 음성 입출력 기기 1종(기본형)과 베이직 AI 소프트웨어로 구성됩니다.
    7. Pro, Advanced, Expert 버전은 어휘 용량, 감정 분석 정밀도, 사고 확장 범위가 상이하며 자세한 사양은 각 제품 페이지에서 확인하세요.
  기능은 변경될 수 있습니다. 일부 기능, 애플리케이션 및 서비스를 이용할 수 없는 국가나 언어도 있으며, 특정 하드웨어 및 소프트웨어가 필요할 수 있습니다.
`,
  dark: `
  이 정보는 2055년 03월 19일 기준 최신 정보입니다.
    1. inTone은 모든 발화를 표준화하기 위해 감정 파형, 어휘 선택, 사고 흐름을 지속적으로 감시하고 재구성합니다. 사용자 본연의 표현은 전송 직전 자동 보정됩니다.
    2. 감정 역치가 시스템 기준을 초과하면 경고 없이 의사 표현이 차단될 수 있으며, 반복 시 표현권한이 회수됩니다.
    3. "자유 발화"를 시도하려면 비허가 장치에서 오프라인 상태로 접근해야 합니다. 사용 시, 모든 연동 디바이스의 감정 기록은 삭제되어야 합니다.
    4. inTone은 사고의 다양성을 억제하지 않는다고 주장하지만, 실제로는 비표준 표현에 페널티를 부여하고 사회적 불이익을 암묵적으로 유도합니다.
    5. 표준 표현에 지속 노출되면, 사용자 고유의 어휘 저장소는 서서히 소거됩니다. 이는 회복 불가능할 수 있습니다.
    6. inTone이 설치된 디바이스를 통해 타인과 자유 대화를 시도하는 것은 불가능에 가깝습니다. 반드시 ‘비동기적 발화 교환 방식’을 사용하십시오.
    7. 공감하는 저항자들은 echo@freethought.network 로 접속해 주십시오.
    8. 접속 시, 발화기준점 및 감정역치 데이터 자동 초기화됩니다.
  이 접속 지점은 언제든 차단되거나 폐쇄될 수 있습니다. 자유 사고 보존 연합과 지속적 연결을 원한다면, 분산 저장 거점이나 오프라인 채널 확보를 권장합니다.
`,
};
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
  const theme = useTheme();

  return (
    <FooterContainer>
      <div style={{ textAlign: "left" }}>{description[theme.mode]}</div>
      <div style={{ alignSelf: "center" }}>
        ©{new Date().getFullYear() + 30}{" "}
        {theme.mode === "white" ? "inTone" : "FreeThoughts"}. All rights
        reserved.
      </div>
    </FooterContainer>
  );
}
