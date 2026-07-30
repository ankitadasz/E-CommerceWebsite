import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};