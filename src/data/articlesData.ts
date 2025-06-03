import whiteA3Image_1 from '../assets/imgs/w-stories-a3-1.png';
import article1WhiteContent from '../content/articles/white/article-1.md?raw';
import article2WhiteContent from '../content/articles/white/article-2.md?raw';
import article3WhiteContent from '../content/articles/white/article-3.md?raw';
import article4WhiteContent from '../content/articles/white/article-4.md?raw';

export interface ArticleData {
  id: string;
  title: string;
  content: string;
  catchphrase?: string;
  author?: string;
  date?: string;
  imageUrl?: string;
  excerpt?: string;
  summary?: string;
}

export const articlesWhiteData: Record<string, ArticleData> = {
  'article-1': {
    id: 'article-1',
    title: 'The Future of Sustainable Design',
    content: article1WhiteContent,
    author: 'Design Team',
    date: '2024-01-15',
    excerpt: 'Exploring innovative approaches to sustainable design in modern web development.'
  },
  'article-2': {
    id: 'article-2',
    title: 'Innovation in User Experience',
    content: article2WhiteContent,
    author: 'UX Research',
    date: '2024-01-20',
    excerpt: 'How user-centered design principles are shaping the future of digital products.'
  },
  'article-3': {
    id: 'article-3',
    title: '입을 열고 방 밖으로 나서다',
    catchphrase: '나를 넘어 Speak Out',
    content: article3WhiteContent,
    author: 'Creative Director',
    date: '2024-01-25',
    imageUrl: whiteA3Image_1,
    excerpt: 'Understanding how less can be more in contemporary design philosophy.',
    summary: '2년 전 올라온 유튜버 DalnaSays의 첫 번째 영상은 채 삼 분도 되지 않는다. 당시만 해도 이 짧은 영상을 게시하는 것만 해도 두려워서 몇 번이고 삭제할 결심을 했다며, 그는 웃으며 회상한다. 이제 그는 개성 넘치는 말투로 매일 몇만 명의 시청자들과 몇 시간이고 수다를 떠는 200만 유튜버다. 6년 넘게 방 안에 박혀있던 "은둔 청년"이 두려움 없이 입을 열 수 있게 된 이유.'
  },
  'article-4': {
    id: 'article-4',
    title: '생각을 던져 세계를 설득하다',
    catchphrase: '세계를 향해 Speak Out',
    content: article4WhiteContent,
    author: 'Technology Team',
    date: '2024-02-01',
    excerpt: 'Real-world examples of successful digital transformation initiatives.',
    summary: '삼십여년 전에 중학교를 겨우 졸업했다. 몇 해 전까지만 해도 평범한 월급쟁이로 살던 정수찬 씨는 늘 ‘말을 잘 못한다’는 말에 얽매여 있었다. 지금은 다르다. IR 피치, 언론 인터뷰, 해외 컨퍼런스 발표까지… 말은 여전히 AI가 다듬어주지만, 생각은 온전히 그의 것이다. 그가 두 번째 삶을 시작할 수 있었던 이유.'
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