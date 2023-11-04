import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

import Footer from './Footer';
import styled from 'styled-components';
const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />

      <WrapperOutlet>
        <Suspense fallback={<h1>loading....</h1>}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>

      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

const WrapperOutlet = styled.main`
  padding: 20px;
`;

const LayoutWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */

  display: flex;
  grid:
    'header' auto
    'main' 1fr
    'footer' auto
    / 1fr;
  gap: 8px;
  flex-direction: column;
`;

// const HeaderSty = styled.div`
//   grid-area: header;
// `;

// const MainSty = styled.div`
//   grid-area: main;
// `;

// const FooterSty = styled.div`
//   grid-area: footer;
// `;
