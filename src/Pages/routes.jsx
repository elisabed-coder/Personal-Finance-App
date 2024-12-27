import Home from "./Home";
import Budget from "./Budget";
import Pots from "./Pots";
import Bills from "./Bills";

const routes = [
  {
    path: "",
    element: <Home />,
    children: [
      { path: "budget", element: <Budget /> },
      { path: "pots", element: <Pots /> },
      { path: "bills", element: <Bills /> },
    ],
  },
];

export default routes;
