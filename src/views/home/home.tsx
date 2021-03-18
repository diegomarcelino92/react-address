import React from 'react';

import { Box } from '@material-ui/core';

import InputCep from 'components/input-cep';
import Address from 'components/address';
import Info from 'components/info';

const Home: React.FC = () => (
  <>
    <Box
      bgcolor="#534bae"
      width="100%"
      paddingBottom="30px"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Info />
      <InputCep />
    </Box>
    <Address />
  </>
);

export default Home;
