import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useSelector, useDispatch } from "react-redux";
import { setLocations } from "../redux/slices/locationSlice";
const VictimsAdd = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const locations = useSelector((state) => state.location.locations);

    const getLocations = async () => {
        try {
            const response = await api.get("/location");
            dispatch(setLocations(response.data));
        } catch (error) {
            console.log(error);
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/victim", {
                nama: e.target.nama.value,
                jenisKelamin: e.target.jenisKelamin.value,
                umur: e.target.umur.value,
                idLokasi: e.target.lokasi.value,
            });
            if (response.status === 200) {
                navigate("/victims");
            }
            console.log(e.target.lokasi.value);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center flex-1 mt-20">
            <h1 className="text-2xl font-semibold mb-6 text-gray-50">Tambah Data Korban</h1>
            <form
                className="px-8 py-10 bg-[#374953] text-gray-50 rounded-lg w-[400px]"
                onSubmit={handleAdd}
            >
                <div className="mb-6">
                    <label htmlFor="nama" className="block mb-2 text-lg">
                        Nama
                    </label>
                    <input
                        type="text"
                        id="nama"
                        className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded text-lg"
                        name="nama"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="jenisKelamin" className="block mb-2 text-lg">
                        Jenis Kelamin
                    </label>
                    <select
                        id="jenisKelamin"
                        className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded text-lg"
                        name="jenisKelamin"
                    >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="umur" className="block mb-2 text-lg">
                        Umur
                    </label>
                    <input
                        type="text"
                        id="umur"
                        className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded text-lg"
                        name="umur"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="lokasi" className="block mb-2 text-lg">
                        Lokasi
                    </label>
                    <select
                        id="lokasi"
                        className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded text-lg"
                        name="lokasi"
                    >
                        {locations.map((location) => (
                            <option value={location._id} key={location._id}>
                                {location.kota}
                            </option>
                        ))}
                    </select>
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

export default VictimsAdd;
