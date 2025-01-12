import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

const AuthLayout = ({ type }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Fungsi untuk membuat user baru
    const createUser = async (e) => {
        e.preventDefault();
        try {
            await api.post("/user/register", {
                username: username,
                password: password,
            });
            alert("Registration successful!");
            navigate("/login", { replace: true });
        } catch (error) {
            console.log(error);
            alert("Failed to register. Please try again.");
        }
    };

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/user/login", {
                username: username,
                password: password,
            });
            localStorage.setItem("token", response.data.token);
            alert("Login successful!");
            navigate("/", { replace: true });
        } catch (error) {
            console.log(error);
            alert("Failed to login. Please check your credentials.");
        }
    };

    return (
        <div className="flex bg-[#263842] min-h-screen">
            <div className="flex justify-center items-center flex-1">
                {type === "login" ? (
                    <form
                        className="bg-[#374953] p-8 rounded-lg text-gray-50 w-[400px]"
                        onSubmit={loginUser}
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#2c7c69] text-white px-4 py-3 rounded-lg text-lg"
                        >
                            Login
                        </button>
                        <p className="mt-4 text-sm text-center">
                            Don`t have an account?{" "}
                            <a href="/register" className="text-[#2c7c69] underline">
                                Register here
                            </a>
                        </p>
                    </form>
                ) : (
                    <form
                        className="bg-[#374953] p-8 rounded-lg text-gray-50 w-[400px]"
                        onSubmit={createUser}
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded"
                                placeholder="Choose a username"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#263842] text-gray-50 px-4 py-3 rounded"
                                placeholder="Create a password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#2c7c69] text-white px-4 py-3 rounded-lg text-lg"
                        >
                            Register
                        </button>
                        <p className="mt-4 text-sm text-center">
                            Already have an account?{" "}
                            <a href="/login" className="text-[#2c7c69] underline">
                                Login here
                            </a>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AuthLayout;
