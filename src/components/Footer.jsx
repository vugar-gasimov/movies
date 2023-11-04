// Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Clapperboard } from 'lucide-react';
import footerBG from '../images/footer.webp';
const Footer = () => {
  return (
    <FooterNav style={{ background: `url(${footerBG})` }}>
      <Logo>
        <span role="img" aria-label="computer icon">
          <Clapperboard size={28} color="#fdd03b" />
        </span>
        GoWatch
      </Logo>
      <NavLinkStyled to="/movies"> Movies</NavLinkStyled>

      <NavLinkStyled to="/"> Home </NavLinkStyled>
      <NavLinkStyled to="/about"> About </NavLinkStyled>
    </FooterNav>
  );
};

export default Footer;

const FooterNav = styled.nav`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: #fff;
  margin-top: 4rem;
  padding-top: 13rem;

  background-position: center;
  background-size: cover;
  font-size: 1rem;
  width: -webkit-fill-available;
`;

const Logo = styled.p`
  font-weight: 700;
  color: #fdd03b;
  margin: 0;
`;
const NavLinkStyled = styled(Link)`
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
