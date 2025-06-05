import styled from "styled-components";

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
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

export const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 28px;
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
