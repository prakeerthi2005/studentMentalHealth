import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const loginType = props.loginType;

  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // To store error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = () => {
    const { username, email, password } = loginData;
  
    // Username validation: not only numeric and length >= 5
    const isUsernameValid = isNaN(username) && username.length >= 5;
    if (!isUsernameValid) {
      return "Username must be at least 5 characters long and cannot be only numeric.";
    }
  
    // Email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in)$/;
    if (!emailPattern.test(email)) {
      return "Invalid email address. It should end with .com or .in.";
    }
  
    // Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      return "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }
  
    return null; // All validations passed
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const validationError = validateInput();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    let response;

    try {
      // API URL based on login type
      const url =
        loginType === "user"
          ? "http://localhost:9090/validlogin"
          : loginType === "approver"
          ? "http://localhost:9090/validloginapprover"
          : "http://localhost:9090/validloginadmin";

      // Send the POST request
      response = await axios.post(url, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      // Handle successful login
      if (response.data === "valid") {
        localStorage.setItem("username", loginData.username);

        if (loginType === "user") navigate("/home");
        else if (loginType === "approver") navigate("/approverhome");
        else if (loginType === "admin") navigate("/adminhome");
      } else {
        // Handle invalid credentials
        setErrorMessage(response.data || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("An error occurred during login. Please try again.");
    }

    // Reset form data
    setLoginData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="font-sans bg-gray-100 p-6 md:p-12 min-h-screen pt-16">
        <h1 className="text-center text-blue-600 text-3xl font-bold mb-8 mt-24">
          Login {props.name}
        </h1>

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Display error message */}
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {errorMessage}
            </div>
          )}

          <label htmlFor="username" className="block text-gray-700 mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 p-2 mb-4 rounded"
            value={loginData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border text-slate-900 p-2 mb-4 rounded"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border text-slate-900 p-2 mb-4 rounded"
            value={loginData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
