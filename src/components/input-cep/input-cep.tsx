import React, { useState } from 'react';

import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Box, IconButton, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import ReactInputMask from 'react-input-mask';

import { Creators } from 'redux/reducers/addresses';

import { StyledPaper } from './styles';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAddressRequest: Creators.getAddressRequest,
  },
  dispatch,
);
const connector = connect(mapStateToProps, mapDispatchToProps);

type InputCepProps = ConnectedProps<typeof connector>

const InputCep = ({ getAddressRequest }: InputCepProps) => {
  const [value, setValue] = useState('');

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }

  function onSubmit() {
    getAddressRequest(value);
  }

  return (
    <Box maxWidth="800px" width="100%" padding={{ md: '20px', sm: '10px', xs: '10px' }}>
      <StyledPaper>
        <ReactInputMask mask="99999-999" value={value} onChange={handleChange}>
          {() => (
            <InputBase type="tel" fullWidth placeholder="Digite um CEP para procurar o endereço" />
          )}
        </ReactInputMask>
        <IconButton onClick={onSubmit}>
          <Search />
        </IconButton>
      </StyledPaper>
    </Box>
  );
};

export default connector(InputCep);
