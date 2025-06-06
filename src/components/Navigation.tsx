import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  background: transparent;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
`;

const NavList = styled.div`
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.div``;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1.13rem;
  letter-spacing: 0.01em;
  transition: color 0.18s, border-bottom 0.18s;
  border-bottom: 2px solid transparent;
  &:hover {
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to={"/home"}>Intone</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"store"}>Store</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"history"}>Brand History</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"stories"}>Stories</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}
