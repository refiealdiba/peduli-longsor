import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/api";

const Victims = () => {
    const [victims, setVictims] = useState([]);
    const [locations, setLocations] = useState([]);

    const getVictims = async () => {
        try {
            const response = await api.get("/victim");
            setVictims(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getLocations = async () => {
        try {
            const response = await api.get("/location");
            setLocations(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await api.delete(`/victim/${id}`);
            if (response.status === 200) {
                getVictims();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getVictims();
        getLocations();
    }, []);

    const getLocationName = (idLokasi) => {
        const location = locations.find((loc) => loc._id === idLokasi);
        return location ? location.kota : "Lokasi tidak ditemukan";
    };

    return (
        <div>
            <h1 className="text-lg font-semibold text-gray-50 mb-5">Lokasi Bencana</h1>
            <Link to={"add"} className="bg-[#2c7c69] text-white px-5 py-2 rounded-lg">
                Tambah Data
            </Link>
            <div className="mt-5">
                <table className="w-full text-sm text-left text-gray-50">
                    <thead className="text-xs text-gray-50 uppercase bg-[#374953]">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jenis Kelamin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Umur
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Lokasi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {victims.map((victim, index) => (
                            <tr className=" border-b-gray-500" key={victim._id}>
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{victim.nama}</td>
                                <td className="px-6 py-4">{victim.jenisKelamin}</td>
                                <td className="px-6 py-4">{victim.umur}</td>
                                <td className="px-6 py-4">{getLocationName(victim.idLokasi)}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        to={`${victim._id}`}
                                        className="bg-[#2c7c69] text-white px-5 py-2 rounded-lg"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="bg-[#2c7c69] text-white px-5 py-2 rounded-lg ml-5"
                                        onClick={() => handleDelete(victim._id)}
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Victims;
