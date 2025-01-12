import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useEffect } from "react";

const MainLayout = () => {
    const navigate = useNavigate();
    const checkToken = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    };

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <div className="bg-[#263842] flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-10">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
