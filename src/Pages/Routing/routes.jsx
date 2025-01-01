import Home from "../Home";
import Budget from "../Budget";
import Pots from "../Pots";
import Bills from "../Bills";
import Layout from "../../Components/Layout/Layout";
import Transactions from "../transactions";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router-dom";
import ForgotPassword from "../ForgotPassword";

const isAuthenticated = () => !!localStorage.getItem("authToken");

const routes = [
  {
    path: "/",
    element: isAuthenticated() ? <Navigate to="/home" /> : <LogIn />,
  },
  { path: "SignUp", element: <SignUp /> },
  { path: "ForgotPassword", element: <ForgotPassword /> },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "budget", element: <Budget /> },
      { path: "pots", element: <Pots /> },
      { path: "bills", element: <Bills /> },
      { path: "transactions", element: <Transactions /> },
    ],
  },
];

export default routes;
