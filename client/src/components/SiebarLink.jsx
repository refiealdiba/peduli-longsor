/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "bg-[#263842] py-4 pl-10 pr-5 rounded-tl-3xl rounded-bl-3xl font-semibold text-lg text-[#2c7c69] border-[#263842] transition-all ease-in-out duration-300"
                    : "font-semibold text-gray-50 pl-10 py-4 pr-5 transition-all ease-in-out duration-300 rounded-tl-3xl rounded-bl-3xl"
            }
        >
            {children}
        </NavLink>
    );
};

export default SidebarLink;
