import { Navigate, Outlet } from "react-router-dom";
import { useToken } from "@/shared/store";

export const ProtectedRoute = () => {
  const { token } = useToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
};
