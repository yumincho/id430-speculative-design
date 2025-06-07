import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  color: #888;
  text-align: center;
  font-size: 12px;
  margin: 5rem 0 2rem 0;
`;

export default function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear() + 30} inTone. All rights reserved.
    </FooterContainer>
  );
}
