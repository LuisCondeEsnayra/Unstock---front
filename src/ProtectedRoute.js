// ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'; 


const ProtectedRoute = ({ element: Component }) => {
const isAuthenticated = useSelector((state) => state.isAuthenticated) 
    console.log("test")
  return isAuthenticated ? Component : <Navigate to="/login" replace />;
};

export default ProtectedRoute;