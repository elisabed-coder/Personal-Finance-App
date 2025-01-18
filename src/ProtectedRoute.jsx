import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Components/Context/useAuth";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
