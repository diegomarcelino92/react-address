import React from 'react';

import Info from 'components/info';
import InputCep from 'components/input-cep';

import { Box } from '@material-ui/core';

import { Container, Image } from './styles';

const Main: React.FC = () => (
  <Container>
    <Box bgcolor="#534bae" width="100%" display="flex" alignItems="center" flexDirection="column">
      <Info />
      <InputCep />
    </Box>

    <Image src="/location.jpg" />
  </Container>
);

export default Main;
