import {
  getAllDarkArticles,
  getAllWhiteArticles,
} from "../../data/articlesData";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/stories.module.css";
import styled, { useTheme } from "styled-components";
import { useMemo } from "react";
import { Text } from "../../components/common";

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

const ArticleTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 36px;
  line-height: 1.4;
  margin: 0;
`;

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
