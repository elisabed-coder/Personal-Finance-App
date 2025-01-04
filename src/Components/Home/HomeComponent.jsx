import BudgetsComponent from "../Budgets/BudgetsComponent";
import PotsComponent from "../Pots/PotsComponent";
import TransactionsComponent from "../Transactions/TransactinosComponent";
import { useNavigate } from "react-router-dom";

function HomeComponent({ isLoggedIn, setIsLoggedIn, name, email }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setName("");
    setEmail("");
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {name || "User"}</h1>
          <p className="text-gray-600">{email}</p>
        </div>
        <button
          onClick={handleLogOut}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Log out
        </button>
      </div>

      <div className="space-y-6">
        <BudgetsComponent />
        <PotsComponent />
        <TransactionsComponent />
      </div>
    </div>
  );
}

export default HomeComponent;
