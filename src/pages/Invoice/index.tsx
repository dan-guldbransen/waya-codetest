import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { editInvoice, getInvoice } from '../../api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { InvoicePageType } from '../../types/list';
import Text from './Text';
import theme from '../../theme';
import { Divider } from '@mui/material';

type PropType = {
  open: boolean;
  setClose: () => void;
  id: number;
  page: number;
};

const Invoice: React.FC<PropType> = ({ open, setClose, id, page }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['invoice', id],
    queryFn: () => getInvoice(id),
  });

  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<InvoicePageType | null>(null);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['invoice'] });
    data && setFormData(data);
  }, [id, data, queryClient]);

  if (!formData) {
    return null;
  }

  if (isLoading) {
    return (
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const handleSubmit = async () => {
    await editInvoice(id, formData);
    queryClient.refetchQueries({ queryKey: ['invoicelist', page] });
    setClose();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value }: { id: string; value: any } = e.target;
    setFormData((prevState): any => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <Modal
      open={open}
      onClose={setClose}
      aria-labelledby='invoice-modal'
      aria-describedby='invoice-modal'
    >
      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: 8,

          outline: 'none',
          background: theme.palette.background.paper,
          width: '100%',
          maxWidth: 850,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontSize: '2rem',
                width: '100%',
              }}
            >
              Invoice to:
              <Typography
                variant='h2'
                component='span'
                sx={{ fontWeight: 700, fontSize: '2rem', ml: 2 }}
              >
                {formData?.customer_name}
              </Typography>
            </Typography>
          </Grid>
          <Divider
            sx={{
              border: '2px solid',
              borderColor: theme.palette.primary.main,
              width: '100%',
              mb: 4,
              mt: 1,
            }}
          />
          <Box
            sx={{ display: 'flex', flexDirection: 'row', width: '100%', mb: 4 }}
          >
            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Text
                InputProps={{ disableUnderline: true }}
                label='Ocr'
                value={formData?.ocr}
              />
              <Text
                label='Created At'
                value={formData?.created_at}
                InputProps={{ disableUnderline: true }}
              />
            </Grid>

            <Grid
              item
              xs={2.5}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Text
                label='Invoice Date'
                value={formData?.invoice_date}
                InputProps={{ disableUnderline: true }}
              />

              <Text
                label='Due Date'
                value={formData?.due_date}
                id='due_date'
                type='date'
                onChange={handleOnChange}
              />
            </Grid>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'row', width: '100%', mb: 4 }}
          >
            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'start',
              }}
            >
              <Text
                label='Name'
                value={formData?.customer_name}
                id='customer_name'
                onChange={handleOnChange}
              />
              <Text
                label='Address'
                defaultValue={formData?.customer_address}
                id='customer_address'
                onChange={handleOnChange}
              />
              <Text
                label='Zip code'
                defaultValue={formData?.customer_zip}
                id='customer_zip'
                onChange={handleOnChange}
              />
              <Text
                label='City'
                defaultValue={formData?.customer_city}
                id='customer_city'
                onChange={handleOnChange}
              />
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
              }}
            >
              <Text
                label='Country'
                defaultValue={formData?.customer_country}
                id='customer_country'
                onChange={handleOnChange}
              />
              <Text
                defaultValue={formData?.delivery_name}
                id='delivery_name'
                label='Delivery Name'
                onChange={handleOnChange}
              />
              <Text
                label='Delivery Address'
                defaultValue={formData?.delivery_address}
                id='delivery_address'
                onChange={handleOnChange}
              />
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'end',
              }}
            >
              <Text
                label='Delivery Zip code'
                defaultValue={formData?.delivery_zip}
                id='delivery_zip'
                onChange={handleOnChange}
              />
              <Text
                label='Delivery City'
                defaultValue={formData?.delivery_city}
                id='delivery_city'
                onChange={handleOnChange}
              />
              <Text
                label='Delivery Country'
                defaultValue={formData?.delivery_country}
                id='delivery_country'
                onChange={handleOnChange}
              />
            </Grid>
          </Box>

          {formData?.invoice_rows?.map((row, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Grid
                item
                xs={1}
                sx={{
                  display: 'flex',
                  flexDirecton: 'column',
                }}
              >
                <Text
                  label='ID'
                  value={row.id}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>

              <Grid
                item
                xs={7}
                sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
              >
                <Text
                  label='Text'
                  value={row.text}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>

              <Grid
                item
                xs={2}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <Text
                  label='Quantity'
                  value={row.quantity}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>

              <Grid item xs={2}>
                <Text
                  label='Price'
                  value={row.price}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
            </Box>
          ))}

          <Box sx={{ display: 'flex', width: '100%' }}>
            <Button
              sx={{
                mt: 4,
                mr: 2,
                border: '1px solid',
                borderColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                '&:hover, &:active, &:focus': {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
              variant='contained'
              fullWidth
              onClick={setClose}
            >
              Close
            </Button>
            <Button
              disabled={formData === data}
              sx={{ mt: 4, ml: 2 }}
              variant='contained'
              fullWidth
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
};

export default Invoice;
