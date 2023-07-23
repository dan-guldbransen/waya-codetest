import { InvoiceListType, InvoiceType } from '../types/list';

const url = 'https://code-test.sandbox.waya.se';
const USER_KEY = 'UserKey lwf9Dv6mCL5nTn2W';

export const getInvoices = async (page: number): Promise<InvoiceListType> => {
  try {
    const data = await fetch(url + `/api/invoices?page=${page}`, {
      headers: {
        Authorization: USER_KEY,
      },
    });
    const result: InvoiceListType = await data.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getInvoice = async (id: number): Promise<InvoiceType> => {
  try {
    const data = await fetch(url + `/api/invoices/${id}`, {
      headers: {
        Authorization: USER_KEY,
      },
    });
    const result: InvoiceType = await data.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
