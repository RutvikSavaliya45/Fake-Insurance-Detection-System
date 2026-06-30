import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {
        try {
            const res = await registerUser(formData);
            console.log("REGISTER SUCCESS:", res);
            alert("Registration successful!");
        } catch (err) {
            console.log("REGISTER ERROR:", err.response?.data || err.message);
            alert("Registration failed!");
        }
    };

    return (
        <div className="flex items-center justify-center mt-24">

            <div className="bg-zinc-900 p-10 rounded-2xl w-[400px]">

                <h1 className="text-3xl font-bold mb-8 text-center">
                    Register
                </h1>

                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-zinc-800 mb-4 outline-none"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-zinc-800 mb-4 outline-none"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-zinc-800 mb-6 outline-none"
                />

                <button
                    onClick={handleRegister}
                    className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg font-semibold"
                >
                    Register
                </button>

            </div>

        </div>
    );
}

export default Register;