import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { Box, Typography } from '@material-ui/core';

import { RootState } from 'redux/reducers';

import SkeletonAddress from './address-skeleton';
import { Image } from './styles';

const mapStateToProps = ({ addresses }: RootState) => ({
  address: addresses.getIn(['address']),
  loading: addresses.getIn(['loading']),
});

const connector = connect(mapStateToProps);

type AddressProps = ConnectedProps<typeof connector>

const Address = ({ loading, address }: AddressProps) => (
  <Box
    display="flex"
    alignItems="center"
    height="250px"
    width="calc(100% - 20px)"
    borderRadius="10px"
    marginTop="30px"
    bgcolor="#fff"
    maxWidth="500px"
    padding="10px"
  >
    <Image src="localizacao.png" />
    {address.cep && (
      <Box flex="1">
        <Typography
          color="textPrimary"
          variant="h6"
        >
          {address.logradouro}
        </Typography>

        <Typography
          color="textPrimary"
          variant="h6"
        >
          {`Bairro ${address.bairro}`}
        </Typography>

        <Typography
          color="textPrimary"
          variant="h6"
        >
          {`${address.localidade}/${address.uf}`}
        </Typography>

        <Typography
          color="textSecondary"
          variant="h6"
        >
          {address.cep}
        </Typography>

        <Typography
          color="textSecondary"
          variant="h6"
        >
          {`DDD: (${address.ddd})`}
        </Typography>

        <Typography
          color="textSecondary"
          variant="h6"
        >
          {`SIAFI: ${address.siafi}`}
        </Typography>
      </Box>
    )}

    {loading && <SkeletonAddress />}
  </Box>
);

export default connector(Address);
