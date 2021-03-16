import React from 'react';

import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const SkeletonAddress: React.FC = () => (
  <Box padding="10px" flex="1">
    <Skeleton variant="text" width="100%" height="50px" />
    <Skeleton variant="text" width="100%" height="50px" />
    <Skeleton variant="text" width="100%" height="50px" />
  </Box>
);

export default SkeletonAddress;
