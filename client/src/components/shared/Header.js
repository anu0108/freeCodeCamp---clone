import React from "react";
import logo from "../../assets/fcc_primary_large.svg";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetUserID } from "../../hooks/useGetUserID";
import { LuSearch } from "react-icons/lu";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, removeCookies] = useCookies(["access_token"]);
  const userID = useGetUserID();
  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    if (userID) {
      removeCookies("access_token");

      window.localStorage.removeItem("userID");

      alert("User Logged out successfully!");
      window.location.href = "/login";
    }
  };
  return (
    <nav className="flex justify-between bg-[#0a0a23] text-white px-10">
      <div className="hidden items-center lg:flex lg:flex-row lg:justify-end  ">
        <div className="flex space-x-2 rounded-md border border-[#3b3a3a] p-1">
          <LuSearch className=" h-5 w-5 self-center text-white" />
          <input
            type="search"
            name=""
            id=""
            className="w-full border-none bg-[#0a0a23] text-sm p-2 font-bold  "
            placeholder="Search Courses"
          />
        </div>
        {/* <Location /> */}
      </div>
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="h-8 w-36 mt-1 md:h-14  md:w-48 lg:mr-40"
        ></img>
      </Link>

      <div>
        <Link to="/login">
          <button className="bg-[#ffbf00] hover:bg-yellow-500 font-semibold text-xs sm:text-sm md:text-base text-black h-5 w-14 sm:h-6 sm:w-16 md:h-10 md:w-20 rounded mt-2.5 sm:mt-1.5 md:mt-2.5">
            Sign In
          </button>
        </Link>
        {/* <Link onClick={handleLogout}>Logout</Link> */}
      </div>
    </nav>
  );
};

export default Header;
