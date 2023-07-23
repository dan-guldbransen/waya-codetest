import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './layout/Header';
import InvoiceList from './pages/InvoiceList';
import CssBaseline from '@mui/material/CssBaseline';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Header />
      <InvoiceList />
    </QueryClientProvider>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(<App />);
