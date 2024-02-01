import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        alert("User Logged In Successfully!");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      alert("Please Enter Correct Credentials!");
    }
  };

  return (
    <div className="w-9/12 md:w-5/12 mx-auto flex flex-col gap-10 border border-gray-900 justify-center items-center mt-20 py-5 rounded">
      <p className="text-lg">Login to freeCodeCamp</p>

      <form
        className="flex flex-col gap-10 w-11/12 md:w-5/6 lg:w-2/3 xl:w-1/2"
        onSubmit={handleSubmit}
      >
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
            className="bg-yellow-400 hover:bg-yellow-500 text-sm xl:text-base px-24 w-64 lg:w-56 xl:w-64 py-3 mx-auto rounded-lg "
          >
            Login
          </button>
          <div className="flex items-center justify-center mt-3 gap-1">
            <p className="text-sm">Don't have an account yet?</p>
            <Link to="/register" className="text-indigo-950 font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
