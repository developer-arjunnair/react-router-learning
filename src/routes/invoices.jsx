import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

const Invoices = () => {
  return (
    <div>
      <nav>
        <ul style={{ listStyle: 'none' }}>
          {getInvoices().map((invoice) => (
            <li key={invoice.number}>
              <Link to={`/invoices/${invoice.number}`}>{invoice.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
