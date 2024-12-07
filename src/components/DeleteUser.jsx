import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DeleteUser(props) {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (props.name === "DeleteUser") {
            try {
                // http://localhost:2000/user/deleteUser
                const response = await axios.delete("http://localhost:9090/deleteUser", {
                    data: email,
                    headers: {
                        "Content-Type": "text/plain",
                    },
                });
                alert("Successfully deleted user", response.data);
                console.log("Successfully deleted user:", response.data);
            } catch (error) {
                console.error("Error deleting user:", error.response?.data || error.message);
            }
        } else {
            try {
                // http://localhost:2000/user/getUser
                const response = await axios.get("http://localhost:9090/getUser", {
                    params: { email },
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                console.log("Success:", response.data);
                navigate("/detailsgot", { state: { user: response.data } });

            } catch (error) {
                console.error("Error fetching user:", error.response?.data || error.message);
            }
        }
        setEmail("");
    };

    const handleChange = (e) => {
        setEmail(e.target.value.trim());
    };

    return (
        <div>
            <div className="font-sans bg-gray-100 min-h-screen p-10">
                <div className="mt-20 max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-center text-blue-600 text-3xl mb-6">{props.name}</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-black">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mb-3 p-2 border text-black rounded"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 rounded hover:bg-blue-500 transition"
                        >
                            {props.name}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
