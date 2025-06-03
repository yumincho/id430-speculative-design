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
            <img src={article.imageUrl} alt={article.title} className={styles.Story__Image} />
            <div className={styles.Story__Content}>
                <h1>{article.title}</h1>
                <p style={{ fontSize: '14px', color: '#fff' }}>{article.summary}</p>
            </div>
          </div>
        ))}
      </div>
    );
} 