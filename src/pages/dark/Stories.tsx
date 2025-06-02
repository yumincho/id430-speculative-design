import { getAllDarkArticles } from "../../data/articlesData";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/stories.module.css";

export default function StoriesDark() {
  const articles = getAllDarkArticles();
  const navigate = useNavigate();
  
  return (
    <div className={styles.Container}>
      {articles.map((article) => (
        <div 
          key={article.id} 
          onClick={() => navigate(`/stories/${article.id}`)}
          className={styles.Story__Container__dark}
        >
          <h3>{article.title}</h3>
        </div>
      ))}
    </div>
  );
  } 