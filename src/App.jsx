import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeComponent from "./Components/Home/HomeComponent";
import RegistrationComponent from "./Components/Authorization/RegistrationComponent";
import BudgetsComponent from "./Components/Budgets/BudgetsComponent";
import ForgotPasswordComponent from "./Components/Authorization/ForgotPasswordComponent";
import PotsComponent from "./Components/Pots/PotsComponent";
import BillsComponent from "./Components/Bills/BillsComponent";
import TransactionsComponent from "./Components/Transactions/TransactinosComponent";
import LogInComponent from "./Components/Authorization/LogInComponent";
import Layout from "./Components/Layout/Layout";
import ResetPasswordComponent from "./Components/Authorization/ResetPasswordComponent";
import { BudgetProvider } from "./Components/Context/BudgetContext";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LogInComponent />} />
      <Route path="Register" element={<RegistrationComponent />} />
      <Route path="ForgotPassword" element={<ForgotPasswordComponent />} />
      <Route path="ResetPassword" element={<ResetPasswordComponent />} />

      {/* Protected Routes */}
      <Route
        path="/home"
        element={
          <BudgetProvider>
            <Layout />
          </BudgetProvider>
        }
      >
        <Route index element={<HomeComponent />} />
        <Route path="budget" element={<BudgetsComponent />} />
        <Route path="pots" element={<PotsComponent />} />
        <Route path="bills" element={<BillsComponent />} />
        <Route path="transactions" element={<TransactionsComponent />} />
      </Route>

      {/* Catch-all Route */}
      <Route path="*" element={<LogInComponent />} />
    </Routes>
  );
}

export default App;
