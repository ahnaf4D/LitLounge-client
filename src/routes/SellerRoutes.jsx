import { Navigate } from "react-router-dom";
import LoadingPage from "../../pages/LoadingPage";
import useUserData from "../hooks/useUserData";
import useAuth from "../hooks/useAuth";

const SellerRoutes = ({ children }) => {
    const userData = useUserData();
    const { user, loading } = useAuth();
    if (loading || !userData?.role) {
        return <LoadingPage />;
    }
    if (user && userData.role === 'seller') {
        return children;
    }
    return <Navigate to="/dashboard" replace />;
};

export default SellerRoutes;