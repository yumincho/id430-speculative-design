import { article3 as article3WhiteContent } from "../content/articles/white/article-3";
import { article4 as article4WhiteContent } from "../content/articles/white/article-4";
import { article3 as article3DarkContent } from "../content/articles/dark/article-3";
import { article4 as article4DarkContent } from "../content/articles/dark/article-4";

import { article1 as article1WhiteContent } from "../content/articles/white/article-1";
import { article1 as article1DarkContent } from "../content/articles/dark/article-1";
import { article2 as article2WhiteContent } from "../content/articles/white/article-2";
import { article2 as article2DarkContent } from "../content/articles/dark/article-2";

export interface ArticleData {
  id: string;
  title: string;
  content: React.ReactNode;
  catchphrase?: string;
  author?: string;
  date?: string;
  imageUrl?: string;
  excerpt?: string;
  summary?: string;
}

export const articlesWhiteData: Record<string, ArticleData> = {
  "article-1": {
    id: "article-1",
    title: "마음에 더 가까이 닿을 수 있다면",
    content: article1WhiteContent,
    author: "Design Team",
    date: "2024-01-15",
    imageUrl: "./articles/w-stories-a1-1.png",
    summary:
      "이정화, 김태훈 부부는 매일 아침과 저녁, inTone을 켜고 아이와 대화를 시작한다. 그들은 자신들이 완벽한 부모는 아니라고 말한다. 하지만 감정이 부딪힐 때 무너뜨리는 말 대신 다리를 놓는 말을 건네고 싶다는 마음은 분명하다. 말 한마디가 달라질 때, 가족의 하루도 달라진다. 말로 마음을 전하는 법을 배우고 싶은 모든 부모에게, 이들의 경험은 작지만 강한 희망이 된다.",
  },
  "article-2": {
    id: "article-2",
    title: "아이들과 더 나은 미래로",
    content: article2WhiteContent,
    author: "UX Research",
    date: "2024-01-20",
    imageUrl: "./articles/w-stories-a2-1.png",
    excerpt:
      "How user-centered design principles are shaping the future of digital products.",
    summary:
      "싱가포르의 한 초등학교 2학년 교실. 매일 아침 아이들과 함께 inTone Edu를 켜는 짧은 루틴이 교실을 바꿨다. 아이들은 이제 말을 더 자신 있게, 다정하게, 솔직하게 건넨다. 말 한마디에 담긴 감정이 서로를 향해 다가가게 만들고, 교실의 공기는 어느새 부드럽고 따뜻해졌다. 말하는 법이 달라지자, 함께 사는 방식도 달라지고 있다.",
  },
  "article-3": {
    id: "article-3",
    title: "입을 열고 방 밖으로 나서다",
    catchphrase: "나를 넘어 Speak Out",
    content: article3WhiteContent,
    author: "Creative Director",
    date: "2024-01-25",
    imageUrl: "./articles/w-stories-a3-1.png",
    excerpt:
      "Understanding how less can be more in contemporary design philosophy.",
    summary:
      '2년 전 올라온 유튜버 DalnaSays의 첫 번째 영상은 채 삼 분도 되지 않는다. 당시만 해도 이 짧은 영상을 게시하는 것만 해도 두려워서 몇 번이고 삭제할 결심을 했다며, 그는 웃으며 회상한다. 이제 그는 개성 넘치는 말투로 매일 몇만 명의 시청자들과 몇 시간이고 수다를 떠는 200만 유튜버다. 6년 넘게 방 안에 박혀있던 "은둔 청년"이 두려움 없이 입을 열 수 있게 된 이유.',
  },
  "article-4": {
    id: "article-4",
    title: "생각을 던져 세계를 설득하다",
    catchphrase: "세계를 향해 Speak Out",
    content: article4WhiteContent,
    author: "Technology Team",
    date: "2024-02-01",
    imageUrl: "./articles/w-stories-a4-1.png",
    excerpt:
      "Real-world examples of successful digital transformation initiatives.",
    summary:
      "삼십여년 전에 중학교를 겨우 졸업했다. 몇 해 전까지만 해도 평범한 월급쟁이로 살던 정수찬 씨는 늘 ‘말을 잘 못한다’는 말에 얽매여 있었다. 지금은 다르다. IR 피치, 언론 인터뷰, 해외 컨퍼런스 발표까지… 말은 여전히 AI가 다듬어주지만, 생각은 온전히 그의 것이다. 그가 두 번째 삶을 시작할 수 있었던 이유.",
  },
};

export const articlesDarkData: Record<string, ArticleData> = {
  "article-1": {
    id: "article-1",
    title: "아이 말문 막는 부모들을 고발한다",
    content: article1DarkContent,
    author: "Design Team",
    date: "2024-01-15",
    imageUrl: "./articles/d-stories-a1-1.png",
    excerpt:
      "Exploring innovative approaches to sustainable design in modern web development.",
    summary:
      "inTone AI 통역기가 아이의 감정을 부드럽게 표현하게 돕는다는 명목 아래, 일부 부모가 자녀의 언어를 직접 통제하는 도구로 쓰고 있다. 아이의 자유로운 의사 표현을 막고, 말을 배우는 과정 대신 검열을 강요하는 셈이다. 개발사는 기능 오용에 대해 책임을 회피하지만, 전문가들은 기술의 중립성 주장은 현실을 외면하는 태도라고 지적한다. 가정 내 권력 불균형 속에서, 기술은 아이를 억압하는 통제 수단으로 전락할 위험이 크다.",
  },
  "article-2": {
    id: "article-2",
    title: "Z사는 당장 AI 통역기 사용을 중단하라",
    content: article2DarkContent,
    author: "UX Research",
    date: "2024-01-20",
    imageUrl: "./articles/d-stories-a2-1.png",
    excerpt:
      "How user-centered design principles are shaping the future of digital products.",
    summary:
      "다국적 기업 Z사는 ‘건강한 기업문화’ 명목으로 AI 통역기를 도입했지만, 직원 발언을 검열하고 솔직한 의견을 억누르는 감시 도구로 변질됐다. 신입사원 J씨는 통역기 착용을 거부했다가 공개적으로 문제시됐고, 결국 극단적 선택을 했다. 회사는 사건 이후에도 책임을 회피하며 AI 통역기 사용을 강제하고 있다. 기술이 직원 감시와 검열 수단으로 변한 현실을 냉정하게 직시해야 할 때다.",
  },
  "article-3": {
    id: "article-3",
    title: "‘말’을 빌려주는 기술, ‘재갈’이 되다",
    content: article3DarkContent,
    author: "Creative Director",
    date: "2024-01-25",
    imageUrl: "./articles/d-stories-a3-1.png",
    excerpt:
      "Understanding how less can be more in contemporary design philosophy.",
    summary:
      "AI 통역기 inTone 없이는 말 한 마디 꺼내지 못하는 사람들이 생겨나고 있다. ‘말을 잘하게 해주는 기술’이 오히려 말하는 능력을 마비시키고, 자기표현에 대한 극단적 불신과 공포를 퍼뜨리고 있는 것이다. 우리는 지금, 유창한 문장의 그림자 뒤에서 말하지 못하는 이들이 조용히 사라지고 있다는 사실을 외면하고 있다.",
  },
  "article-4": {
    id: "article-4",
    title: "사라진 목소리: 사람을 번역하고 있다는 착각",
    content: article4DarkContent,
    author: "Technology Team",
    date: "2024-02-01",
    imageUrl: "./articles/d-stories-a4-1.png",
    excerpt:
      "Real-world examples of successful digital transformation initiatives.",
    summary:
      "AI 통역기로 정제된 말투, 또렷한 어조. 그런데 이상하다. 모든 게 매끄러운데, 아무도 그의 진심을 알아채지 못했다. DBC <집중취재 7일>은 inTone을 사용하다 사라진 사람들의 공통된 패턴을 추적하며 묻는다. 우리가 듣고 있던 건 정말 ‘사람’이었을까? 감정을 통역하지 못하는 기술이 지운 목소리의 실체가, 드디어 드러난다.",
  },
};

export function getWhiteArticleById(id: string): ArticleData | null {
  return articlesWhiteData[id] || null;
}

export function getAllWhiteArticles(): ArticleData[] {
  return Object.values(articlesWhiteData);
}

export function getDarkArticleById(id: string): ArticleData | null {
  return articlesDarkData[id] || null;
}

export function getAllDarkArticles(): ArticleData[] {
  return Object.values(articlesDarkData);
}
