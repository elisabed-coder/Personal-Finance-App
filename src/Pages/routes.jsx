import Home from "./Home";
import Budget from "./Budget";
import Pots from "./Pots";
import Bills from "./Bills";
import Layout from "../Components/Layout/Layout";
import Transactions from "./transactions";

const routes = [
  {
    path: "",
    element: <Layout />,
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
