import { useQuery } from '@tanstack/react-query';
import { getInvoices } from '../../api';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DescriptionIcon from '@mui/icons-material/Description';
import ListItemText from '@mui/material/ListItemText';
import Pagination from '@mui/material/Pagination';
import Invoice from '../Invoice';
import { useTheme } from '@mui/material';

const InvoiceList = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);
  const theme = useTheme();

  const handleOpen = (currentId: number) => {
    setId(currentId);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

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
      <List>
        {data?.data.map((invoice) => (
          <>
            <ListItem
              key={invoice.id}
              onClick={() => handleOpen(invoice.id)}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemIcon>
                <DescriptionIcon htmlColor={theme.palette.primary.main} />
              </ListItemIcon>
              <ListItemText
                primary={invoice.customer_name}
                secondary={invoice.ocr}
              />
            </ListItem>
          </>
        ))}
        <Pagination
          count={data?.pagination.pages}
          onChange={handleSetPage}
          color='primary'
        />
      </List>
      {!!id && <Invoice open={open} handleClose={handleClose} id={id} />}
    </>
  );
};

export default InvoiceList;
