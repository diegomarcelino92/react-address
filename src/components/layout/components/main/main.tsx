import React from 'react';

import { Box } from '@material-ui/core';

import Info from 'components/info';
import InputCep from 'components/input-cep';
import Address from 'components/address';

import { Container } from './styles';

const Main: React.FC = ({ children }) => <Container>{children}</Container>;

export default Main;
