import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getInvoice } from '../../api';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { style } from './style';

import { Typography } from '@mui/material';

type PropType = {
  open: boolean;
  handleClose: () => void;
  id: number | null;
};

const Invoice: React.FC<PropType> = ({ open, handleClose, id }) => {
  const { data, isSuccess } = useQuery({
    queryKey: ['invoice', id],
    queryFn: () => getInvoice(id as number),
  });

  const [edit, setEdit] = useState(false);

  if (!data && !isSuccess) {
    return null;
  }

  const setClose = () => {
    setEdit(false);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={setClose}
      aria-labelledby='invoice-modal'
      aria-describedby='invoice-modal'
    >
      <Box sx={style}>
        {edit ? (
          <Box
            component='form'
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              label='Name'
              size='small'
              variant='standard'
              defaultValue={data.data.customer_name}
              id='customer_name'
              sx={{ mt: 2 }}
            />
            <TextField
              label='Personal'
              size='small'
              variant='standard'
              defaultValue={data.data.invoice_date}
              id='invoice_date'
              sx={{ mt: 2 }}
            />
            <TextField
              label='Address'
              size='small'
              variant='standard'
              defaultValue={data.data.customer_address}
              id='customer_address'
              sx={{ mt: 2 }}
            />
            <Button
              sx={{ mt: 4 }}
              variant='contained'
              onClick={() => setEdit(false)}
            >
              Save
            </Button>
          </Box>
        ) : (
          <>
            <Typography variant='body1' component='div'>
              {data.data.customer_name}
            </Typography>
            <Typography variant='body1' component='div'>
              {data.data.invoice_date}
            </Typography>
            <Typography variant='body1' component='div'>
              {data.data.customer_address}
            </Typography>

            <Button variant='contained' onClick={() => setEdit(true)}>
              edit
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default Invoice;
