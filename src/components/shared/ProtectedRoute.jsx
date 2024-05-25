import React from "react";
import { auth } from "../../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, userLoading, error] = useAuthState(auth);
  const location = useLocation();

  if (userLoading) {
    return <div>Showing Loading Component...</div>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
