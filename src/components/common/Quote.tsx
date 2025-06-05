import styled from "styled-components";

export const Qoute = styled.blockquote`
  border-left: 4px solid #ccc;
  padding-left: 1rem;
  margin: 1rem 0;
  font-style: italic;
  color: ${({ theme }) => theme.quote};
`;
