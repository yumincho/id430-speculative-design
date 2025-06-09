# Project: inTone

Speculaltive design @ ID KAIST, 2025 Spring, by Team 졸업레츠고 (Hyewon Lee, Ihchae Ryu, Yumin Cho).

## 🎙️ inTone: 더 이상 스스로 말할 필요 없는 시대

**inTone**은 모든 발화를 AI가 매개하는 미래를 상상하는 프로젝트입니다. 사람들은 이제 자신의 감정이나 사고를 직접 표현하지 않고, AI가 대신 정제하고 전달해주는 언어 인터페이스 <AI 통역기>에 의존합니다. 이 인터페이스가 정의한 <고급언어>는 점차 표준이 되어, 신인류의 기본 소양이자 매너가 되었고, 사람들은 점점 덜 사고하고, 말하기의 주체로서 자신을 상실해갑니다. 프로젝트는 언어가 더는 순수한 자아 표현의 도구가 아니라, AI의 규칙과 알고리즘에 의해 구성되는 구조물로 변화한 세계를 보여줍니다. 실제 제품 사이트처럼 구성된 **inTone**의 세계관은 화이트웹(공식 서사)과 다크웹(저항의 서사)으로 이중 구조를 띠며, 언어 주권 상실에 대한 문제의식을 제기합니다.

# How to Start

SPA 어플리케이션을 GitHub pages로 배포하기 위해, `.env.example`의 `base`를 사용합니다.

```shell
cp .env.example .env
```

빌드 때에는 `base`가 필요하지 않으므로 값을 할당하지 않은 변수를 사용합니다.

```shell
echo "VITE_SOME_OTHER_KEY=" >> .env.production
```

`npm` 또는 `pnpm`으로 필요한 패키지를 설치하고 실행할 수 있습니다.

```shell
pnpm install
```

```shell
pnpm dev
```
