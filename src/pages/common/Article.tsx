import { useParams, Navigate } from "react-router-dom";
import {
  getDarkArticleById,
  getWhiteArticleById,
} from "../../data/articlesData";
import Markdown from "react-markdown";
import { getTheme } from "../../components/styles/theme";
import type { ThemeMode } from "../../contexts/ThemeContext";

export default function Article({ mode }: { mode: ThemeMode }) {
  const isWhiteMode = mode === "white";
  const theme = getTheme(mode);

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/stories" replace />;
  }

  const article = isWhiteMode
    ? getWhiteArticleById(id)
    : getDarkArticleById(id);

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
        maxWidth: "680px",
        margin: "0 auto",
      }}
    >
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt={article.title}
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
      <p style={{ fontSize: "14px", color: theme.textColor }}>
        {article.summary}
      </p>
      {articleContent}
    </div>
  );
}
