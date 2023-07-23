import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Header from './layout/Header';
import InvoiceList from './pages/InvoiceList';
import theme from './styles/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <InvoiceList />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(<App />);
