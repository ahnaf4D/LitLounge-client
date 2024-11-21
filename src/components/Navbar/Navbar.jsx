import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleNav = () => setNav(!nav);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const navItems = [
        { id: 1, path: "/", alt: "Home" },
        { id: 2, path: "/products", alt: "Products" },
        { id: 3, path: "/about", alt: "About" },
        { id: 4, path: "/contact-us", alt: "Contact Us" },
    ];

    const linkStyle = (isActive) =>
        isActive
            ? "p-4 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-md m-2 cursor-pointer duration-300"
            : "p-4 rounded-lg text-blue-900 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 m-2 cursor-pointer duration-300";

    return (
        <div className="flex justify-between items-center h-20 px-6 text-blue-900 bg-gradient-to-r from-indigo-50 via-purple-100 to-indigo-50 shadow-lg">
            {/* Logo */}
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="w-12 h-12 mr-2" />
                <h1 className="text-4xl font-bold text-indigo-700 tracking-wide">
                    Lit<i className="text-purple-500">Lounge</i>
                </h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center">
                {navItems.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.id}
                        className={({ isActive }) => linkStyle(isActive)}
                    >
                        {item.alt}
                    </NavLink>
                ))}

                {/* Wishlist and Cart */}
                <div className="flex items-center space-x-6">
                    {/* Wishlist */}
                    <div className="relative cursor-pointer">
                        <AiOutlineHeart size={30} className="text-purple-600 hover:text-purple-500" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            3
                        </span>
                    </div>

                    {/* Cart */}
                    <div className="relative cursor-pointer">
                        <AiOutlineShoppingCart size={30} className="text-purple-600 hover:text-purple-500" />
                        <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            5
                        </span>
                    </div>

                    {/* User Dropdown */}
                    <div className="relative">
                        <FaUserCircle
                            size={30}
                            className="text-purple-600 hover:text-purple-500 cursor-pointer"
                            onClick={toggleDropdown}
                            title="User"
                        />
                        {dropdownOpen && (
                            <ul className="absolute right-0 mt-2 w-40 bg-white text-indigo-900 shadow-lg rounded-lg">
                                <li className="p-3 hover:bg-purple-100 cursor-pointer">
                                    <NavLink to="/profile">Profile</NavLink>
                                </li>
                                <li className="p-3 hover:bg-purple-100 cursor-pointer">
                                    <NavLink to="/orders">Orders</NavLink>
                                </li>
                                <li className="p-3 hover:bg-purple-100 cursor-pointer">
                                    <button onClick={() => alert("Logged Out")}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className="block md:hidden cursor-pointer">
                {nav ? (
                    <AiOutlineClose size={30} className="text-purple-600" />
                ) : (
                    <AiOutlineMenu size={30} className="text-purple-600" />
                )}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={`fixed left-0 top-0 w-[75%] h-full bg-gradient-to-b bg-blue-300 text-white shadow-lg ease-in-out duration-500 md:hidden ${nav ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* User Dropdown for Mobile */}
                <div className="flex justify-center items-center p-6">
                    <div className="relative">
                        <FaUserCircle
                            size={40}
                            className="text-black  cursor-pointer"
                            onClick={toggleDropdown}
                            title="User"
                        />
                        {dropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-40 bg-white text-indigo-900 shadow-lg rounded-lg">
                                <li className="p-3 hover:bg-purple-100 cursor-pointer">
                                    <NavLink to="/profile">Profile</NavLink>
                                </li>
                                <li className="p-3 hover:bg-purple-100 cursor-pointer">
                                    <NavLink to="/orders">Orders</NavLink>
                                </li>
                                <li className="p-3 hover:bg-purple-100 cursor-pointer">
                                    <button onClick={() => alert("Logged Out")}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-2 p-6">
                    {navItems.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className={({ isActive }) =>
                                `${linkStyle(isActive)} block border-b border-purple-300`
                            }
                            onClick={() => setNav(false)} // Close menu on link click
                        >
                            {item.alt}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Wishlist and Cart */}
                <div className="space-y-4 p-6">
                    <div className="flex justify-between items-center bg-purple-500 p-4 rounded-lg hover:bg-purple-600 cursor-pointer">
                        <AiOutlineHeart size={24} className="text-white" />
                        <span>Wishlist (3)</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-500 p-4 rounded-lg hover:bg-purple-600 cursor-pointer">
                        <AiOutlineShoppingCart size={24} className="text-white" />
                        <span>Cart (5)</span>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
