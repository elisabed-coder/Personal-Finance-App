import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Import components
import HomeComponent from "./Components/Home/HomeComponent";
import SignUpComponent from "./Components/Authorization/SignUp/SignUpComponent";
import ForgotPasswordComponent from "./Components/Authorization/ForgotPasswordComponent.jsx/ForgotPasswordComponent";
import BudgetsComponent from "./Components/Budgets/BudgetsComponent";
import PotsComponent from "./Components/Pots/PotsComponent";
import BillsComponent from "./Components/Bills/BillsComponent";
import TransactionsComponent from "./Components/Transactions/TransactinosComponent";
import LogInComponent from "./Components/Authorization/Login/LogInComponent";
import Layout from "./Components/Layout/Layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }, [isLoggedIn, name, email]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <LogInComponent
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setName={setName}
                setEmail={setEmail}
              />
            )
          }
        />
        <Route path="SignUp" element={<SignUpComponent />} />
        <Route path="ForgotPassword" element={<ForgotPasswordComponent />} />

        {/* Protected Routes */}
        {isLoggedIn && (
          <Route path="/home" element={<Layout />}>
            <Route
              index
              element={
                <HomeComponent
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  name={name}
                  email={email}
                />
              }
            />
            <Route path="budget" element={<BudgetsComponent />} />
            <Route path="pots" element={<PotsComponent />} />
            <Route path="bills" element={<BillsComponent />} />
            <Route path="transactions" element={<TransactionsComponent />} />
          </Route>
        )}

        {/* Redirect for unauthorized access */}
        {!isLoggedIn && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
