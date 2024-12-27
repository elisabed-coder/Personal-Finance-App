import Home from "./Home";
import Budget from "./Budget";
import Pots from "./Pots";
import Bills from "./Bills";
import Layout from "../Components/Layout/Layout";

const routes = [
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "budget", element: <Budget /> },
      { path: "pots", element: <Pots /> },
      { path: "bills", element: <Bills /> },
    ],
  },
];

export default routes;
