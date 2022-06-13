import { useParams } from 'react-router-dom';

const Invoice = () => {
  const { invoiceId } = useParams();

  return <h2> You have selected {invoiceId} </h2>;
};

export default Invoice;
