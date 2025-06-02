import { useNavigate } from 'react-router-dom';
import { getAllWhiteArticles } from '../../data/articlesData';
import styles from '../../styles/stories.module.css';

export default function Stories() {
    const articles = getAllWhiteArticles();
    const navigate = useNavigate();
    
    return (
      <div className={styles.Container}>
        {articles.map((article) => (
          <div 
            key={article.id} 
            onClick={() => navigate(`/stories/${article.id}`)}
            className={styles.Story__Container}
          >
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    );
} 