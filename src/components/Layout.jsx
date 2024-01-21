import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

import Footer from './Footer';
import styled from 'styled-components';
import Loader from 'Loader/Loader';
const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />

      <WrapperOutlet>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>

      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

const WrapperOutlet = styled.main`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  grid:
    'header' auto
    'main' 1fr
    'footer' auto
    / 1fr;

  flex-direction: column;
`;
