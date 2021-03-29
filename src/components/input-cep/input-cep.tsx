import React, { useState } from 'react';

import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  Box,
  CircularProgress,
  Fade,
  IconButton,
  InputBase,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import ReactInputMask from 'react-input-mask';

import { RootState } from 'redux/reducers';
import { Creators } from 'redux/reducers/addresses';

import { StyledPaper } from './styles';

const mapStateToProps = ({ addresses }: RootState) => ({
  loading: addresses.getIn(['loading']),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getAddressRequest: Creators.getAddressRequest,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type InputCepProps = ConnectedProps<typeof connector>;

const InputCep = ({ getAddressRequest, loading }: InputCepProps) => {
  const [value, setValue] = useState('');

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }

  function onSubmit() {
    getAddressRequest(value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && value.length === 9) {
      onSubmit();
    }
  }

  return (
    <Fade in timeout={1000}>
      <Box
        maxWidth="520px"
        width="100%"
        padding={{ md: '20px', sm: '10px', xs: '10px' }}
      >
        <StyledPaper variant="outlined">
          <ReactInputMask
            mask="99999-999"
            value={value}
            onChange={handleChange}
            onKeyDownCapture={handleKeyDown}
            disabled={loading}
          >
            {() => (
              <InputBase
                type="tel"
                fullWidth
                placeholder="Digite um CEP para procurar o endereço"
                onKeyDownCapture={handleKeyDown}
              />
            )}
          </ReactInputMask>
          <IconButton
            onClick={onSubmit}
            disabled={loading}
            aria-label="Produrar"
            title="Procurar"
          >
            {loading && <CircularProgress size={25} />}
            {!loading && <Search />}
          </IconButton>
        </StyledPaper>
      </Box>
    </Fade>
  );
};

export default connector(InputCep);
