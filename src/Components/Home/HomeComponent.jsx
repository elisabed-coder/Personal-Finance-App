import BudgetsComponent from "../Budgets/BudgetsComponent";
import PotsComponent from "../Pots/PotsComponent";
import TransactionsComponent from "../Transactions/TransactinosComponent";
import { Link } from "react-router-dom";

function HomeComponent() {
  return (
    <div>
      <h1>home</h1>
      <BudgetsComponent />
      <PotsComponent />
      <TransactionsComponent />
    </div>
  );
}

export default HomeComponent;
