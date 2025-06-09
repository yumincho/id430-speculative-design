import { useParams, Navigate } from "react-router-dom";
import {
  getDarkArticleById,
  getWhiteArticleById,
} from "../../data/articlesData";
import Markdown from "react-markdown";
import styled, { useTheme } from "styled-components";
import { H1, InfoBox, Strong, Text } from "../../components/common";

const AiSummaryBox = styled(InfoBox)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-bottom: 2rem;
`;

export default function Article() {
  const theme = useTheme();

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/stories" replace />;
  }

  const article =
    theme.mode === "white" ? getWhiteArticleById(id) : getDarkArticleById(id);

  if (!article) {
    return (
      <div>
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
      </div>
    );
  }

  const articleContent =
    typeof article.content === "string" ? (
      <Markdown>{article.content}</Markdown>
    ) : (
      article.content
    );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 48px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <H1>{article.title}</H1>
      <ThumbnailImg src={`../${article.imageUrl}`} alt={article.title} />
      {article.aiSummary && (
        <AiSummaryBox style={{ fontSize: "14px", color: theme.text }}>
          <Text>
            <Strong>🤖 AI Summary</Strong>
          </Text>
          <Text>{article.aiSummary}</Text>
        </AiSummaryBox>
      )}
      {articleContent}
    </div>
  );
}
