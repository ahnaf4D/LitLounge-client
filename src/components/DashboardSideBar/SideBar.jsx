import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    AiOutlineDashboard,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from "react-icons/ai";
import {
    MdOutlineHistory,
    MdOutlineRequestPage,
    MdOutlineNotificationsActive,
} from "react-icons/md";
import { FaRegAddressCard, FaMoneyCheckAlt, FaRegComments } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
    const userData = useUserData();
    const navigate = useNavigate();
    const userRole = userData.role;
    const { logOutUser } = useAuth();

    const adminLinks = [
        { path: "/dashboard", label: "Dashboard Overview", icon: <AiOutlineDashboard /> },
        { path: "/dashboard/orders", label: "Order Management", icon: <MdOutlineHistory /> },
        { path: "/dashboard/requests", label: "Service Requests", icon: <MdOutlineRequestPage /> },
        { path: "/dashboard/manage-products", label: "Product Management", icon: <AiOutlineShoppingCart /> },
        { path: "/dashboard/customers", label: "Customer Management", icon: <FaRegAddressCard /> },
        { path: "/dashboard/transactions", label: "Payment & Transactions", icon: <FaMoneyCheckAlt /> },
        { path: "/dashboard/reports", label: "Reports & Analytics", icon: <BsGraphUp /> },
        { path: "/dashboard/settings", label: "Admin Settings", icon: <AiOutlineUser /> },
        { path: "/dashboard/reviews", label: "Feedback & Reviews", icon: <FaRegComments /> },
    ];

    const customerLinks = [
        { path: "/customer/dashboard", label: "Account Overview", icon: <AiOutlineDashboard /> },
        { path: "/customer/orders", label: "Order Management", icon: <MdOutlineHistory /> },
        { path: "/customer/requests", label: "Custom Requests", icon: <MdOutlineRequestPage /> },
        { path: "/customer/cart", label: "Cart", icon: <AiOutlineShoppingCart /> },
        { path: "/customer/wishlist", label: "Wishlist", icon: <AiOutlineShoppingCart /> },
        { path: "/customer/profile", label: "Profile Management", icon: <AiOutlineUser /> },
        { path: "/customer/notifications", label: "Notifications", icon: <MdOutlineNotificationsActive /> },
        { path: "/customer/support", label: "Feedback & Support", icon: <FaRegComments /> },
    ];

    const links = [...adminLinks, ...customerLinks]

    const handleLogout = async () => {
        await logOutUser();
        navigate("/");
        toast.success("Logged out successfully!");
    };

    return (
        <div className="bg-base-100 flex flex-col lg:flex-row">
            {/* Drawer */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    {/* Mobile Toggle Button */}
                    <label
                        htmlFor="my-drawer"
                        className="btn btn-primary drawer-button text-lg lg:hidden my-4"
                    >
                        Open Menu
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 bg-base-200 text-lg space-y-2 shadow-lg">
                        {/* Logo Section */}
                        <li className="py-4">
                            <Link to="/">
                                <div className="flex items-center">
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        className="w-12 h-12 mr-2"
                                    />
                                    <h1 className="text-2xl font-bold text-indigo-700">
                                        Lit<i className="text-purple-500">Lounge</i>
                                    </h1>
                                </div>
                            </Link>
                        </li>

                        {/* Sidebar Links */}
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className="rounded-lg hover:bg-primary hover:text-white transition"
                            >
                                <NavLink
                                    to={link.path}
                                    end // Ensures active state only applies to exact paths
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-2 ${isActive
                                            ? "bg-primary text-white"
                                            : "text-base-content hover:text-white"
                                        }`
                                    }
                                >
                                    {link.icon}
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}

                        {/* Logout Button */}
                        <li>
                            <button
                                className="btn btn-error w-full flex items-center justify-center gap-2 mt-4"
                                onClick={handleLogout}
                            >
                                <IoLogOutOutline className="text-2xl" /> Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
