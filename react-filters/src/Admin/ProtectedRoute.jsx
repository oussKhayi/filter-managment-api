import Cookies from "js-cookie";
ProtectedRoute = ({ element, ...props }) => {
    const token = Cookies.get("token");

    if (!token) {
        // Redirect to the login page if the user is not authenticated
        return <Navigate to="/auth-login" />;
    }

    // User is authenticated, allow access to the protected route
    return <Route {...props} element={element} />;
};
