import React, { Suspense } from 'react';

import { Box } from '@material-ui/core';

import { MAX_WIDTH } from 'configurations/constants';

import InputCep from 'components/input-cep';
import Address from 'components/address';
import Info from 'components/info';

import { Container } from './styles';

const Home: React.FC = () => (
  <>
    <Container>
      <Box
        width={MAX_WIDTH}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        alignItems="center"
      >
        <Info />
        <InputCep />
        <Address />
      </Box>
    </Container>
  </>
);

export default Home;
