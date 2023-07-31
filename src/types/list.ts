type InvoiceRows = {
  id: number;
  text: string;
  quantity: number;
  price: string;
};

export type InvoicePageType = {
  id: number;
  ocr: number;
  created_at: string;
  due_date: string;
  customer_name: string;
  invoice_date: string;
  customer_address: string;
  customer_zip: string;
  customer_city: string;
  customer_country: string;
  delivery_name: string;
  delivery_address: string;
  delivery_zip: string;
  delivery_city: string;
  delivery_country: string;
  invoice_rows?: InvoiceRows[];
};

export type Pagination = {
  currentPage: number;
  perPage: number;
  pages: number;
};

export type InvoiceListType = {
  data: InvoicePageType[];
  pagination: Pagination;
};

export type InvoiceType = ReadonlyArray<InvoicePageType>;
