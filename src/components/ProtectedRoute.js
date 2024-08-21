import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
 
    const authenticated = false;
    

    if (!authenticated) {
        return <Navigate to="/login" />;
      }

  return <Outlet/>
}

export default ProtectedRoute
