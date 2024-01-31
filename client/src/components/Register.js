import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`,
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("Registration Completed! Now login.");
        navigate("/login");
      } else {
        alert(response.data.message || "Registration failed");
      }
    } catch (err) {
      if (err.response.status === 400) {
        alert("User with this email already exists");
      } else {
        console.log(err);
        alert("Error during registration");
      }
    }
  };

  return (
    <div className="w-9/12 md:w-5/12 mx-auto flex flex-col gap-10 border border-gray-900 justify-center items-center mt-20 py-5 rounded">
      <p className="text-lg">Sign up for freeCodeCamp</p>
      <form
        className="flex flex-col gap-10 w-11/12 md:w-5/6 lg:w-2/3 xl:w-1/2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          className="px-4 py-2 w-64 lg:w-56 xl:w-64 mx-auto rounded-lg text-black text-sm xl:text-base"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          className="px-4 py-2 w-64 lg:w-56 xl:w-64 mx-auto rounded-lg text-black text-sm xl:text-base"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          name="pwd"
          placeholder="Password"
          value={password}
          className="px-4 py-2 w-64 lg:w-56 xl:w-64 mx-auto rounded-lg text-black text-sm xl:text-base"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="mx-auto">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 px-24 w-64 py-3 mx-auto rounded-lg "
          >
            Sign Up
          </button>
          <div className="flex items-center justify-center mt-3 gap-1">
            <p className="text-sm">Already have an account?</p>
            <Link to="/login" className="text-indigo-950 font-semibold">
              Login here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
