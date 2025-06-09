import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 100px;

  box-sizing: border-box;
  background: transparent;
  padding: 2.5rem 0;
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

const NavItem = styled.div`
  cursor: pointer;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1.13rem;
  letter-spacing: 0.01em;
  transition: color 0.18s, border-bottom 0.18s;
  border-bottom: 1px solid ${({ $isActive, theme }) => 
    $isActive ? theme.text : 'transparent'};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/home') {
      return location.pathname === '/home' || location.pathname === '/';
    }
    return location.pathname.includes(path);
  };

  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to={"/home"} $isActive={isActive('/home')}>inTone</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"store"} $isActive={isActive('store')}>Store</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"history"} $isActive={isActive('history')}>Brand History</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"stories"} $isActive={isActive('stories')}>Stories</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}
