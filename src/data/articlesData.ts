export interface ArticleData {
  id: string;
  title: string;
  content: string;
  author?: string;
  date?: string;
  imageUrl?: string;
  excerpt?: string;
}

export const articlesWhiteData: Record<string, ArticleData> = {
  'article-1': {
    id: 'article-1',
    title: 'The Future of Sustainable Design',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Design Team',
    date: '2024-01-15',
    excerpt: 'Exploring innovative approaches to sustainable design in modern web development.'
  },
  'article-2': {
    id: 'article-2',
    title: 'Innovation in User Experience',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'UX Research',
    date: '2024-01-20',
    excerpt: 'How user-centered design principles are shaping the future of digital products.'
  },
  'article-3': {
    id: 'article-3',
    title: 'The Art of Minimalism',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    author: 'Creative Director',
    date: '2024-01-25',
    excerpt: 'Understanding how less can be more in contemporary design philosophy.'
  },
  'article-4': {
    id: 'article-4',
    title: 'Digital Transformation Stories',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    author: 'Technology Team',
    date: '2024-02-01',
    excerpt: 'Real-world examples of successful digital transformation initiatives.'
  }
};

export const articlesDarkData: Record<string, ArticleData> = {
    'article-1': {
      id: 'article-1',
      title: 'The Future of Sustainable Design',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Design Team',
      date: '2024-01-15',
      excerpt: 'Exploring innovative approaches to sustainable design in modern web development.'
    },
    'article-2': {
      id: 'article-2',
      title: 'Innovation in User Experience',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'UX Research',
      date: '2024-01-20',
      excerpt: 'How user-centered design principles are shaping the future of digital products.'
    },
    'article-3': {
      id: 'article-3',
      title: 'The Art of Minimalism',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      author: 'Creative Director',
      date: '2024-01-25',
      excerpt: 'Understanding how less can be more in contemporary design philosophy.'
    },
    'article-4': {
      id: 'article-4',
      title: 'Digital Transformation Stories',
      content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      author: 'Technology Team',
      date: '2024-02-01',
      excerpt: 'Real-world examples of successful digital transformation initiatives.'
    }
  };

export function getWhiteArticleById(id: string): ArticleData | null {
  return articlesWhiteData[id] || null;
}

export function getAllWhiteArticles(): ArticleData[] {
  return Object.values(articlesWhiteData);
} 

export function getDarkArticleById(id: string): ArticleData | null {
    return articlesDarkData[id] || null;
  }
  
  export function getAllDarkArticles(): ArticleData[] {
    return Object.values(articlesDarkData);
  } 