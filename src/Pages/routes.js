import { createBrowserRouter } from "react-router-dom";
import bills from "./bills";
import Budget from "./budget";
import Home from "./homePage";
import Pots from "./pots";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "budget",
        element: <Budget />,
      },
      {
        path: "Pots",
        element: <Pots />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
