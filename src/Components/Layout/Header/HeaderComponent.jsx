import { useState } from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header>
      <h1 onClick={toggle}>finance</h1>
      <nav className={`${open ? "block" : "hidden"} `}>
        <ul>
          <li>
            <Link to="">Overview</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/budget">Budgets</Link>
          </li>
          <li>
            <Link to="/pots">Pots</Link>
          </li>
          <li>
            <Link to="/bills">Recurring Bills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default HeaderComponent;
