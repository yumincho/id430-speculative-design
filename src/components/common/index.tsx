import styled from "styled-components";

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 1rem 1.5rem;
  border-radius: 12px;
  color: ${({ theme }) => theme.text};
`;

export const Quote = styled.blockquote`
  border-left: 4px solid #ccc;
  padding-left: 1rem;
  margin: 1rem 0;
  font-style: italic;
  font-size: 14px;
  color: ${({ theme }) => theme.quote};
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  line-height: 1.5;
`;

export const TextReverse = styled.div`
  color: ${({ theme }) => theme.textReverse};
  font-size: 14px;
  line-height: 1.5;
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.text};
`;

export const NegativeStrong = styled.strong`
  color: ${({ theme }) => theme.textRed};
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 44px;
  line-height: 1.4;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 22px;
  line-height: 1.4;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  line-height: 1.4;
`;
