import { InvoiceListType, InvoicePageType } from '../types/list';

const url = 'https://code-test.sandbox.waya.se';
const USER_KEY = 'UserKey lwf9Dv6mCL5nTn2W';

export const getInvoices = async (page: number): Promise<InvoiceListType> => {
  try {
    const response = await fetch(url + `/api/invoices?page=${page}`, {
      headers: {
        Authorization: USER_KEY,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getInvoice = async (id: number): Promise<InvoicePageType> => {
  try {
    const response = await fetch(url + `/api/invoices/${id}`, {
      headers: {
        Authorization: USER_KEY,
      },
    });
    const jsonData = await response.json();
    return jsonData.data;
  } catch (error) {
    throw error;
  }
};

export const editInvoice = async (
  id: number,
  newData: InvoicePageType
): Promise<InvoicePageType> => {
  try {
    const response = await fetch(url + `/api/invoices/${id}`, {
      headers: {
        Authorization: USER_KEY,
      },
      method: 'PUT',
      body: JSON.stringify(newData),
    });
    const jsonData = await response.json();
    return jsonData.data;
  } catch (error) {
    throw error;
  }
};
