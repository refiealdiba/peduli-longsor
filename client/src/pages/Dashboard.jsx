import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/api";

const Dashboard = () => {
    const [locations, setLocations] = useState([]);
    const [victims, setVictims] = useState([]);

    const getLocations = async () => {
        try {
            const response = await api.get("/location");
            setLocations(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getVictims = async () => {
        try {
            const response = await api.get("/victim");
            setVictims(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocations();
        getVictims();
    }, []);

    return (
        <div>
            <div className="flex gap-5">
                <div className="bg-[#374953] text-white p-5 w-1/2 rounded-xl">
                    <h1 className="text-lg font-semibold">Total Korban</h1>
                    <p className="text-[#2c7c69] font-bold text-xl">{victims.length}</p>
                </div>
                <div className="bg-[#374953] text-white p-5 w-1/2 rounded-xl">
                    <h1 className="text-lg font-semibold">Lokasi Bencana</h1>
                    <p className="text-[#2c7c69] font-bold text-xl">{locations.length}</p>
                </div>
            </div>
            <div className="mt-20 flex flex-col justify-center items-center">
                <svg
                    fill="#2c7c69"
                    width="200px"
                    height="200px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#2c7c69"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
                    </g>
                </svg>
                <h1 className="text-xl font-semibold text-gray-50">Tambah Data Korban</h1>
                <Link to={"/victims"} className="bg-[#2c7c69] text-white px-5 py-2 rounded-lg mt-5">
                    Tambah
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
