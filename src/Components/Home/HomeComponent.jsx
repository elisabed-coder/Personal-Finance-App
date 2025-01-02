import BudgetsComponent from "../Budgets/BudgetsComponent";
import PotsComponent from "../Pots/PotsComponent";
import TransactionsComponent from "../Transactions/TransactinosComponent";
import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/", { replace: true }); // Using replace to avoid pushing to history
  };

  return (
    <div>
      <h1>home</h1>
      <button onClick={handleLogOut}>Log out</button>
      <BudgetsComponent />
      <PotsComponent />
      <TransactionsComponent />
    </div>
  );
}

export default HomeComponent;
