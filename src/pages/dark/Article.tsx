import { useParams, Navigate } from 'react-router-dom';
import { getDarkArticleById } from '../../data/articlesData';

export default function ArticleDark() {
    const { id } = useParams<{ id: string }>();
    
    if (!id) {
        return <Navigate to="/stories" replace />;
    }
    
    const article = getDarkArticleById(id);
    
    if (!article) {
        return (
            <div >
                <h1>Article Not Found</h1>
                <p>The article you're looking for doesn't exist.</p>
            </div>
        );
    }
    
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
} 