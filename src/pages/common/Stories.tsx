import {
  getAllDarkArticles,
  getAllWhiteArticles,
} from "../../data/articlesData";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/stories.module.css";
import styled, { useTheme } from "styled-components";
import { useMemo } from "react";
import { H2, H3, Text } from "../../components/common";
import type { ThemeMode } from "../../components/styles/theme";

const ArticlePreview = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  width: 100%;
  height: 360px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  position: relative;
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out;
  }
`;

const ArticlePreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  ${({ theme }) => `
    mask-image: linear-gradient(
    to bottom,
    ${theme.backgroundReverse}FF,
    ${theme.backgroundReverse}FF,
    rgba(0, 0, 0, 0)
  );
  `}
`;

const ArticlePreviewContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 12px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  box-sizing: border-box;
`;

const ArticleTitle = styled(H2)`
  margin: 0;
`;

const Header = styled.div`
  justify-items: center;
`;

const headerInfo: Record<ThemeMode, { title: string; description: string }> = {
  white: {
    title: "모든 스토리",
    description:
      "inTone과 함께, 신인류의 언어를 맞이한 사람들의 이야기를 들어보세요.",
  },
  dark: {
    title: "'진짜' 스토리",
    description: "속지 마세요. inTone은 불행과 절망의 시작입니다.",
  },
};

export default function Stories() {
  const navigate = useNavigate();
  const theme = useTheme();

  const articles = useMemo(
    () =>
      theme.mode === "white" ? getAllWhiteArticles() : getAllDarkArticles(),
    [theme.mode]
  );

  return (
    <div className={styles.Container}>
      <Header>
        <H3>{headerInfo[theme.mode].title}</H3>
        <Text>{headerInfo[theme.mode].description}</Text>
      </Header>
      {articles.map((article) => (
        <ArticlePreview
          key={article.id}
          onClick={() => navigate(`/stories/${article.id}`)}
        >
          <ArticlePreviewImage src={article.imageUrl} alt={article.title} />
          <ArticlePreviewContent>
            <ArticleTitle>{article.title}</ArticleTitle>
            <Text>{article.summary}</Text>
          </ArticlePreviewContent>
        </ArticlePreview>
      ))}
    </div>
  );
}
