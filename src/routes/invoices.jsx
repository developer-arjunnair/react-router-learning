import { Link, NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

const Invoices = () => {
  return (
    <div>
      <nav>
        <ul style={{ listStyle: 'none' }}>
          {getInvoices().map((invoice) => (
            <li key={invoice.number}>
              <NavLink
                to={`/invoices/${invoice.number}`}
                style={(isActive) => ({
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'green' : 'blue',
                })}
                // className={({ isActive }) => (isActive ? 'red' : 'blue')}
                key={invoice.number}
              >
                {invoice.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
