import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetUserID } from "../../hooks/useGetUserID";

const Footer = () => {
  const [_, removeCookies] = useCookies(["access_token"]);
  const userID = useGetUserID();
  const handleLogout = () => {
    if (userID) {
      removeCookies("access_token");

      window.localStorage.removeItem("userID");

      alert("User Logged out successfully!");
      window.location.href = "/login";
    }
  };
  return (
    <div className="border-t-2 fixed bottom-0 left-0 right-0 p-3 bg-gray-100 z-10">
      <div className="mx-auto max-w-screen-lg flex justify-between">
        <div className="">
          <p className="text-xs sm:text-base">Developed by Anurag Wadhwa</p>
        </div>
        <Link onClick={handleLogout}>
          <p className="text-xs sm:text-base">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
