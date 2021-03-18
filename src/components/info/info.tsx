import React from 'react';

import { Box, Typography } from '@material-ui/core';

const Info: React.FC = () => (
  <Box
    padding="30px 10px 20px 10px"
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Typography
      component="h2"
      variant="h3"
      color="secondary"
    >
      Procure e encontre CEPs pelo Brasil

    </Typography>
    <Box
      component="p"
      color="#fff"
      fontSize="22px"
    >
      Digite o CEP desejado no campo abaixo e encontre o endereço

    </Box>
  </Box>
);

export default Info;
