import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

const LocationsAdd = () => {
    const navigate = useNavigate();
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/location", {
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

    return (
        <div className="flex flex-col justify-center items-center flex-1 mt-20">
            <h1 className="text-2xl font-semibold mb-6 text-gray-50">Tambah Lokasi</h1>
            <form
                className="px-8 py-10 bg-[#374953] text-gray-50 rounded-lg w-[400px]"
                onSubmit={handleAdd}
            >
                <div className="mb-6">
                    <label htmlFor="kota" className="block mb-2 text-lg">
                        Kota
                    </label>
                    <input
                        type="text"
                        id="kota"
                        className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded text-lg"
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
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#2c7c69] text-white px-6 py-3 rounded-lg text-lg w-full"
                >
                    Simpan
                </button>
            </form>
        </div>
    );
};

export default LocationsAdd;
