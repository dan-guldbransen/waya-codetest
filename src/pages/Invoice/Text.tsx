import React, { memo } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const Text: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      size='small'
      variant='standard'
      sx={{ pr: 4, mb: 2 }}
      {...props}
    />
  );
};

export default memo(Text);
