import "./App.css";
import router from "./Pages/router";
import { RouterProvider } from "react-router-dom"; // Correct package import

function App() {
  return <RouterProvider router={router} />;
}

export default App;
