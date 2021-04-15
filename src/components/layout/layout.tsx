import React from 'react';

import Header from './components/header';
import Main from './components/main';

type LayoutType<T = Record<string, unknown>> = React.FC<T> & {
  Main: React.ReactNode;
  Header: React.ReactNode;
};

const Layout: LayoutType = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

Layout.Main = Main;
Layout.Header = Header;

export default Layout;
