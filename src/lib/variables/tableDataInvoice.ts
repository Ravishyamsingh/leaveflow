/**
 * Sample invoice table data for dashboard demo
 */

export type InvoiceRow = {
  item: string;
  quantity: number;
  rate: number;
  amount: number;
};

const tableDataInvoice: InvoiceRow[] = [
  {
    item: 'Premium Support',
    quantity: 1,
    rate: 9.0,
    amount: 9.0,
  },
  {
    item: 'LeaveFlow Pro - Annual Subscription',
    quantity: 1,
    rate: 299.0,
    amount: 299.0,
  },
  {
    item: 'Integration Services',
    quantity: 2,
    rate: 150.0,
    amount: 300.0,
  },
];

export default tableDataInvoice;
