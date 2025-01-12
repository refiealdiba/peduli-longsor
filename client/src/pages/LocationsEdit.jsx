import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";

const LocationEdit = () => {
    const { id } = useParams(); // Mengambil ID dari parameter URL
    const navigate = useNavigate();
    const [location, setLocation] = useState({
        kota: "",
        provinsi: "",
        tanggal: "",
    });

    const getLocation = async () => {
        try {
            const response = await api.get(`/location/${id}`);
            if (response.status === 200) {
                setLocation(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put(`/location/${id}`, {
                kota: e.target.kota.value,
                provinsi: e.target.provinsi.value,
                tanggal: e.target.tanggal.value,
            });
            if (response.status === 200) {
                navigate("/locations", { replace: true });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center flex-1 mt-20">
            <h1 className="text-2xl font-semibold mb-6 text-gray-50">Edit Lokasi</h1>
            <form
                className="px-8 py-10 bg-[#374953] text-gray-50 rounded-lg w-[400px]"
                onSubmit={handleEdit}
            >
                <div className="mb-6">
                    <label htmlFor="kota" className="block mb-2 text-lg">
                        Kota
                    </label>
                    <input
                        type="text"
                        id="kota"
                        className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded text-lg"
                        name="kota"
                        value={location.kota}
                        onChange={(e) => setLocation((prev) => ({ ...prev, kota: e.target.value }))}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="provinsi" className="block mb-2 text-lg">
                        Provinsi
                    </label>
                    <input
                        type="text"
                        id="provinsi"
                        className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded text-lg"
                        name="provinsi"
                        value={location.provinsi}
                        onChange={(e) =>
                            setLocation((prev) => ({ ...prev, provinsi: e.target.value }))
                        }
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="tanggal" className="block mb-2 text-lg">
                        Tanggal
                    </label>
                    <input
                        type="date"
                        id="tanggal"
                        className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded text-lg"
                        name="tanggal"
                        value={location.tanggal}
                        onChange={(e) =>
                            setLocation((prev) => ({ ...prev, tanggal: e.target.value }))
                        }
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#2c7c69] text-white px-6 py-3 rounded-lg text-lg w-full"
                >
                    Simpan Perubahan
                </button>
            </form>
        </div>
    );
};

export default LocationEdit;
