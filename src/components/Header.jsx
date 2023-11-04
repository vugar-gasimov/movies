import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Clapperboard } from 'lucide-react';

const Header = () => {
  return (
    <HeaderNav>
      <Logo>
        <span role="img" aria-label="computer icon">
          <Clapperboard size={28} color="#fdd03b" />
        </span>
        GoWatch
      </Logo>
      <NavLinkStyled to="/"> Home </NavLinkStyled>
      <NavLinkStyled to="/movies"> Movies </NavLinkStyled>
      <NavLinkStyled to="/about"> About </NavLinkStyled>
      <NavLinkStyled to="/register"> Sign up </NavLinkStyled>
    </HeaderNav>
  );
};

export default Header;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.8) 100%
  );
  color: #fff;
  width: -webkit-fill-available;
`;

const Logo = styled.p`
  font-weight: 700;
  color: #fdd03b;
  margin: 0;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  margin-left: 20px;
  border: 2px solid #cdcdcd;
  padding: 0.4rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  cursor: pointer;
  display: inline-block;
  height: 3rem;
  color: #fdd03b;
  border: 1px solid transparent;

  &.active {
    color: #212121;
    background-color: #fdd03b;
    border-color: #fdd348;
  }

  &:hover:not(.active) {
    color: #fff;
    background-color: #fdd03b;
    border-color: transparent;
  }
`;
