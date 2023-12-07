import React from "react";
import { Route, Navigate } from "react-router-dom";
// import { getAuthToken } from "./your-auth-utils"; // Replace with your actual auth utility
import Cookies from "js-cookie";

const AuthRoute = ({ path, element }) => {
    const token = Cookies.get("token");
    const isAuthenticated = !!token; // Check if the user is authenticated
    return isAuthenticated ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/auth-login" replace />
    );
};

export default AuthRoute;
