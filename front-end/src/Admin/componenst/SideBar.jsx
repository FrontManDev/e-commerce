import { NavLink } from 'react-router-dom';
import { FiHome, FiUsers, FiShoppingBag, FiPackage, FiList, FiLogOut } from 'react-icons/fi';
import { IoIosNotifications } from "react-icons/io";
import { FaStore } from "react-icons/fa6";
import './SideBar.css';

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <h2 className="sidebar-title">
                Admine Pannel
            </h2>
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <NavLink to="/dashboard"  className={({isActive})=> isActive ? "sidebar-link active" : "sidebar-link"}>
                        <FiHome className="sidebar-icon" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/users" className={({isActive})=> isActive ? "sidebar-link active" : "sidebar-link"}>
                        <FiUsers className="sidebar-icon" />
                        <span>Users</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/adminorders" className={({isActive})=> isActive ? "sidebar-link active" : "sidebar-link"}>
                        <FiShoppingBag className="sidebar-icon" />
                        <span>Orders</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/adminproducts" className={({isActive})=> isActive ? "sidebar-link active" : "sidebar-link"}>
                        <FiPackage className="sidebar-icon" />
                        <span>Products</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/admincategory" className={({isActive})=> isActive ? "sidebar-link active" : "sidebar-link"}>
                        <FiList className="sidebar-icon" />
                        <span>Category</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/notifications" className={({isActive})=> isActive ? "sidebar-link active" : "sidebar-link"}>
                        <IoIosNotifications className="sidebar-icon" />
                        <span>Notifications</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/" className={({isActive})=> isActive ? "sidebar-link active" : "sidebar-link"}>
                        <FaStore className="sidebar-icon" />
                        <span>Store</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/logout" className="sidebar-link">
                        <FiLogOut className="sidebar-icon" />
                        <span>Exit</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}