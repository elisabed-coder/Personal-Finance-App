import BudgetsComponent from "../Budgets/BudgetsComponent";
import PotsComponent from "../Pots/PotsComponent";
import TransactionsComponent from "../Transactions/TransactinosComponent";

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
