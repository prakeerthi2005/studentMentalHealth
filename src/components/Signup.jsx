import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
    username: "",
  });

  const [errorMessages, setErrorMessages] = useState([]); // To store error messages

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = () => {
    const errors = [];
    const { username, fullname, email, password } = formData;
  
    // Username validation: must be at least 5 characters and cannot be only numeric
    if (username.length < 5 || !isNaN(username)) {
      errors.push("Username must be at least 5 characters long and cannot be only numeric.");
    }
  
    // Full Name validation: must only contain alphabets and spaces
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(fullname)) {
      errors.push("Full name must only contain alphabets and spaces.");
    }
  
    // Email validation: must be in a valid format and end with .com or .in
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in)$/;
    if (!emailPattern.test(email)) {
      errors.push("Email must be in a valid format and end with .com or .in.");
    }
  
    // Password validation: must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      errors.push(
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character."
      );
    }
  
    return errors;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const errors = validateInput();
    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    try {
      console.log("Attempting to send request...");
      const response = await axios.post("http://localhost:9090/addUser", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response received:", response);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error caught:", error);
      const serverError = [];
      if (error.response && error.response.status === 409) {
        serverError.push("An account with this email already exists.");
      } else {
        serverError.push("An error occurred during registration. Please try again.");
      }
      setErrorMessages(serverError);
    }

    // Reset form data
    setFormData({
      email: "",
      fullname: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="font-sans bg-gray-100 min-h-screen p-10">
        <div className="mt-20 max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-center text-blue-600 text-3xl mb-6">Signup</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Display error messages as a list */}
            {errorMessages.length > 0 && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <ul className="list-disc pl-5">
                  {errorMessages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}

            <label htmlFor="username" className="mb-1 text-black">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mb-3 p-2 border text-black rounded"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="fullname" className="mb-1 text-black">
              Full Name:
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="mb-3 p-2 border text-black rounded"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="mb-1 text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mb-3 p-2 border text-black rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password" className="mb-1 text-black">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mb-3 p-2 border text-black rounded"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="bg-green-600 text-white py-2 rounded hover:bg-blue-500 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
