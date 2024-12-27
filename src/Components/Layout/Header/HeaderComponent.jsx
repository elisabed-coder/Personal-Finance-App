import { Outlet, Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header>
      <h1>finance</h1>
      <nav>
        <h1>finance</h1>
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/">Transactions</Link>
          </li>
          <li>
            <Link to="/">BUdgets</Link>
          </li>
          <li>
            <Link to="/">Pots</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default HeaderComponent;
