import React from 'react';

import { Box } from '@material-ui/core';

import { Text } from './styles';

const Info: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Text>
      Procure e encontre CEPs pelo Brasil

    </Text>
    <Box
      component="p"
      color="#fff"
      fontSize="20px"
    >
      Digite o CEP desejado no campo abaixo e encontre o endereço
    </Box>
  </Box>
);

export default Info;
