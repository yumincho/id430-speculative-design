import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function Navigation() {
  const { mode } = useTheme();
  const isWhiteWeb = mode === 'white';

  return (
    <nav style={{ 
      padding: '1rem', 
      borderBottom: '1px solid #ccc',
      marginBottom: '2rem'
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '2rem', 
        margin: 0, 
        padding: 0 
      }}>
        <li>
          <Link to={isWhiteWeb ? '/home' : '/dk/home'} style={{ textDecoration: 'none', color: '#646cff' }}>
            Intone
          </Link>
        </li>
        <li>
          <Link to={isWhiteWeb ? '/store' : '/dk/store'} style={{ textDecoration: 'none', color: '#646cff' }}>
            Store
          </Link>
        </li>
        <li>
          <Link to={isWhiteWeb ? '/history' : '/dk/history'} style={{ textDecoration: 'none', color: '#646cff' }}>
            Brand History
          </Link>
        </li>
        <li>
          <Link to={isWhiteWeb ? '/stories' : '/dk/stories'} style={{ textDecoration: 'none', color: '#646cff' }}>
            Stories
          </Link>
        </li>
      </ul>
    </nav>
  );
} 