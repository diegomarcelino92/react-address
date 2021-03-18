import React from 'react';

import SnackBar from 'components/snackbar';

import Layout from 'components/layout';
import Home from 'views/home';

const App: React.FC = () => (
  <>
    <Layout>
      <Home />
    </Layout>

    <SnackBar />
  </>
);

export default App;
