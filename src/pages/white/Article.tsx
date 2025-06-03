import { useParams, Navigate } from 'react-router-dom';
import { getWhiteArticleById } from '../../data/articlesData';
import Markdown from 'react-markdown'

export default function Article() {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Navigate to="/stories" replace />;
    }
    
    const article = getWhiteArticleById(id);
    
    if (!article) {
        return (
            <div >
                <h1>Article Not Found</h1>
                <p>The article you're looking for doesn't exist.</p>
            </div>
        );
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 48px', maxWidth: '680px', margin: '0 auto' }}>
            <h1>{article.title}</h1>
            <img src={article.imageUrl} alt={article.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }}/>
            <p style={{ fontSize: '14px', color: '#444' }}>{article.summary}</p>
            <Markdown>{article.content}</Markdown>
        </div>
    );
}