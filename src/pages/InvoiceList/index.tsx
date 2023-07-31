import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import DescriptionIcon from '@mui/icons-material/Description';
import { useQuery } from '@tanstack/react-query';
import { getInvoices } from '../../api';
import { useState } from 'react';
import Invoice from '../Invoice';

const InvoiceList = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);

  const theme = useTheme();

  const handleOpen = (currentId: number) => {
    setId(currentId);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { data } = useQuery({
    queryKey: ['invoicelist', page],
    queryFn: () => getInvoices(page),
    keepPreviousData: true,
  });

  const handleSetPage = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <>
      <List
        sx={{
          padding: 0,
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        {data?.data.map((invoice) => (
          <ListItem
            key={invoice.id}
            onClick={() => handleOpen(invoice.id)}
            sx={{
              cursor: 'pointer',
              color: theme.palette.text.primary,
              '&:hover, &:active, &:focus': {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 2,
                width: 50,
              }}
            >
              <DescriptionIcon
                htmlColor={theme.palette.primary.main}
                fontSize='large'
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={invoice.customer_name}
              secondary={invoice.invoice_date}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              primaryTypographyProps={{
                variant: 'h2',
                color: theme.palette.text.primary,
              }}
              secondaryTypographyProps={{
                variant: 'body2',
                color: theme.palette.secondary.main,
              }}
            />
          </ListItem>
        ))}

        <Pagination count={data?.pagination.pages} onChange={handleSetPage} />

        {!!id && (
          <Invoice open={open} setClose={handleClose} id={id} page={page} />
        )}
      </List>
      <Paper />
    </>
  );
};

export default InvoiceList;
