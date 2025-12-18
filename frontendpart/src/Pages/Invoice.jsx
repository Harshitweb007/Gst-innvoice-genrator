import { useEffect, useState } from "react";
import { authFetch } from "../api";

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    authFetch("/admin/invoice-count").then(setInvoices);
  }, []);

  return (
    <div>
      <h2>Invoices Per User</h2>
      <ul>
        {invoices.map((inv, i) => (
          <li key={i}>
            {inv.name} ({inv.email}) → {inv.invoiceCount} invoices
          </li>
        ))}
      </ul>
    </div>
  );
}
