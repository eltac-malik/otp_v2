import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserInfo } from "@/shared/store";

export const ProtectedRoute = () => {
  const { userInfo } = useUserInfo();
  return userInfo !== null && userInfo?.access_token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
