import React from 'react';

import { Box, Typography } from '@material-ui/core';
import SkeletonAddress from './address-skeleton';

import { Image } from './styles';

export interface AddressProps {
  loading?: boolean
}

const Address = ({ loading }: AddressProps) => (
  <Box height="250px" width="calc(100% - 20px)" alignItems="center" bgcolor="#fff" maxWidth="500px" padding="10px" borderRadius="10px" marginTop="30px">
    <Typography variant="h6">
      Endereço
    </Typography>

    <Box display="flex" marginTop="10px">
      <Image src="localizacao.png" />
      <Box flex="1">
        <Typography color="primary" variant="h5">Rua Elis Abraaão</Typography>
        <Typography color="primary" variant="h5">Bairo Paulo Godoy</Typography>
        <Typography color="primary" variant="h5">São Paulo/SP</Typography>
      </Box>

      {loading && <SkeletonAddress />}
    </Box>
  </Box>
);

export default Address;
