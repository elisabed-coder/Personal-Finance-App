import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

// Import components
import HomeComponent from "./Components/Home/HomeComponent";
import SignUpComponent from "./Components/Authorization/SignUp/SignUpComponent";
import ForgotPasswordComponent from "./Components/Authorization/ForgotPasswordComponent.jsx/ForgotPasswordComponent";
import BudgetsComponent from "./Components/Budgets/BudgetsComponent";
import PotsComponent from "./Components/Pots/PotsComponent";
import BillsComponent from "./Components/Bills/BillsComponent";
import TransactionsComponent from "./Components/Transactions/TransactinosComponent";
import LogInComponent from "./Components/Authorization/Login/LogInComponent";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LogInComponent
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setName={setName}
              setEmail={setEmail}
            />
          }
        />
        <Route path="SignUp" element={<SignUpComponent />} />
        <Route path="ForgotPassword" element={<ForgotPasswordComponent />} />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <HomeComponent
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn} // Pass setIsLoggedIn here
                name={name}
                email={email}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="" element={<HomeComponent />} />
        <Route path="budget" element={<BudgetsComponent />} />
        <Route path="pots" element={<PotsComponent />} />
        <Route path="bills" element={<BillsComponent />} />
        <Route path="transactions" element={<TransactionsComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
