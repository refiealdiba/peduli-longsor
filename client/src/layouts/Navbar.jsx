import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="flex justify-end items-center px-3 py-2 bg-[#374953] text-gray-50 rounded-lg mb-5">
            <button className="bg-[#2c7c69] text-white px-5 py-2 rounded-lg" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Navbar;
