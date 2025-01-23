import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import { useContext } from "react";

const ProtectedRoutes = ()=>{
  const { user } = useContext(UserContext)!; // Use non-null assertion
    return user? <Outlet /> : <Navigate to="/login" />;
}
export default ProtectedRoutes;