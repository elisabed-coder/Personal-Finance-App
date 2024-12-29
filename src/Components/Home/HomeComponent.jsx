import BudgetsComponent from "../Budgets/BudgetsComponent";
import PotsComponent from "../Pots/PotsComponent";
import TransactionsComponent from "../Transactions/TransactinosComponent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function HomeComponent() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/");
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
