import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setLocations } from "../redux/slices/locationSlice";
import { setVictim } from "../redux/slices/victimSlice";

const VictimsEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const locations = useSelector((state) => state.location.locations);
    const victim = useSelector((state) => state.victim.victim);

    const getLocations = async () => {
        try {
            const response = await api.get("/location");
            dispatch(setLocations(response.data));
        } catch (error) {
            console.log(error);
        }
    };

    const getVictim = async () => {
        try {
            const response = await api.get(`/victim/${id}`);
            dispatch(setVictim(response.data));
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put(`/victim/${id}`, {
                nama: e.target.nama.value,
                jenisKelamin: e.target.jenisKelamin.value,
                umur: e.target.umur.value,
                idLokasi: e.target.lokasi.value,
            });
            if (response.status === 200) {
                navigate("/victims");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocations();
        getVictim();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center flex-1 mt-20">
            <h1 className="text-2xl font-semibold mb-6 text-gray-50">Edit Data Korban</h1>
            <form
                className="px-8 py-10 bg-[#374953] text-gray-50 rounded-lg w-[400px]"
                onSubmit={handleEdit}
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
                        value={victim.nama}
                        onChange={(e) =>
                            dispatch(setVictim((prev) => ({ ...prev, nama: e.target.value })))
                        }
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
                        value={victim.jenisKelamin}
                        onChange={(e) =>
                            dispatch(
                                setVictim((prev) => ({ ...prev, jenisKelamin: e.target.value }))
                            )
                        }
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
                        value={victim.umur}
                        onChange={(e) =>
                            dispatch(setVictim((prev) => ({ ...prev, umur: e.target.value })))
                        }
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
                        value={victim.idLokasi}
                        onChange={(e) =>
                            dispatch(setVictim((prev) => ({ ...prev, idLokasi: e.target.value })))
                        }
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
                    Simpan Perubahan
                </button>
            </form>
        </div>
    );
};

export default VictimsEdit;
