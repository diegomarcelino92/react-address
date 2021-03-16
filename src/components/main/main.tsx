import React from 'react';

import { Box } from '@material-ui/core';

import Info from 'components/info';
import InputCep from 'components/input-cep';
import Address from 'components/address';

import { Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <Box bgcolor="#534bae" width="100%" paddingBottom="30px" display="flex" alignItems="center" flexDirection="column">
      <Info />
      <InputCep />
    </Box>
    <Address />
  </Container>
);

export default Main;
