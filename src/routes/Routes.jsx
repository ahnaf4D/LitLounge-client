import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../layouts/Dashboard";
import Overview from "../pages/Dashboard/Common/Overview";
import PrivateRoutes from "./PrivateRoutes";
import AddNewProduct from "../pages/Dashboard/Seller/AddNewProduct";
import SellerRoutes from "./SellerRoutes";
import ManageProducts from "../pages/Dashboard/Seller/ManageProducts";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact-us',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                index: true,
                element: <Overview></Overview>
            },
            // seller routes
            {
                path: 'add-new-product',
                element: <SellerRoutes><AddNewProduct></AddNewProduct></SellerRoutes>
            },
            {
                path: 'manage-products',
                element: <SellerRoutes><ManageProducts></ManageProducts></SellerRoutes>
            }
        ]
    }
])
export default router;