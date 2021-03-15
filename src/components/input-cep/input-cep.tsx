import React from 'react';

import { TextField } from '@material-ui/core';
import InputMask from 'react-input-mask';

// import { Container } from './styles';

const InputCep: React.FC = () => (
  <InputMask mask="99/99/9999">
    <TextField type="tel" />
  </InputMask>
);

export default InputCep;
