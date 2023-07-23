export type InvoicesType = {
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
};

export type Pagination = {
  currentPage: number;
  perPage: number;
  pages: number;
};

export type InvoiceListType = {
  data: InvoicesType[];
  pagination: Pagination;
};

export type InvoiceType = {
  data: InvoicesType;
};
