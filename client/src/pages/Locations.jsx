import { Link } from "react-router-dom";
import { api } from "../api/api";
import { useState, useEffect } from "react";

const Locations = () => {
    const [locations, setLocations] = useState([]);

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
            const response = await api.delete(`/location/${id}`);
            if (response.status === 200) {
                getLocations();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div>
            <h1 className="text-lg font-semibold text-gray-50 mb-5">Lokasi Bencana</h1>
            <Link to={"add"} className="bg-[#2c7c69] text-white px-5 py-2 rounded-lg">
                Tambah Lokasi
            </Link>
            <div className="mt-5">
                <table className="w-full text-sm text-left text-gray-50">
                    <thead className="text-xs text-gray-50 uppercase bg-[#374953]">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kecamatan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kabupaten
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, index) => (
                            <tr className=" border-b-gray-500" key={location._id}>
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{location.kota}</td>
                                <td className="px-6 py-4">{location.provinsi}</td>
                                <td className="px-6 py-4">{location.tanggal}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        to={`${location._id}`}
                                        className="bg-[#2c7c69] text-white px-5 py-2 rounded-lg"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="bg-[#2c7c69] text-white px-5 py-2 rounded-lg ml-5"
                                        onClick={() => handleDelete(location._id)}
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

export default Locations;
