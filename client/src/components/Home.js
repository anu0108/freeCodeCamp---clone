import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiMicrosoft } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { motion } from "framer-motion";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/course`,
          {
            withCredentials: true,
          }
        );

        setCourses(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return userID ? (
    <>
      <div className="min-h-screen px-3 lg:px-10 py-20">
        <p className="text-indigo-950 font-bold text-lg text-center">
          New Courses are Live!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-x-4 gap-y-16 mt-10 place-items-center ">
          {courses.map((course) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-gray-300 w-44 lg:w-48 h-20 sm:h-24 text-indigo-950 px-1.5 sm:px-5 py-1 rounded flex flex-col justify-between cursor-pointer"
            >
              <p className="text-sm sm:text-base font-semibold">
                {course.name}
              </p>
              <div className="flex justify-between font-semibold">
                <p className="text-xs">Rs 599</p>
                <p className="text-xs">Duration-{course.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className=" flex flex-col w-full min-h-screen">
      <div className="w-5/6 lg:w-4/6 xl:w-3/6 flex flex-col gap-8 sm:gap-10 mx-auto mt-14 sm:mt-20">
        <p className="text-indigo-950 font-bold text-3xl sm:text-4xl">
          Learn to code — for free.
        </p>
        <p className="text-indigo-950 font-bold text-3xl sm:text-4xl">
          Build projects.
        </p>
        <p className="text-indigo-950 font-bold text-3xl sm:text-4xl">
          Earn certifications.
        </p>
        <div>
          <p className="text-indigo-950 font-medium text-xl sm:text-2xl">
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
            jobs at tech companies including:
          </p>
          <div className="flex mt-4 items-center gap-14 sm:gap-24 lg:gap-28">
            <FaApple className="text-gray-600 h-16 w-16" />
            <FaGoogle className="text-gray-600 h-14 w-14 mt-1" />
            <SiMicrosoft className="text-gray-600 h-14 w-14 mt-1" />
            <FaSpotify className="text-gray-600 h-14 w-14 mt-1" />
            <FaAmazon className="text-gray-600 h-14 w-14 mt-1" />
          </div>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 px-16 sm:px-32 py-4 mx-auto rounded">
          <p className="font-semibold text-lg">Get Started(it's free)</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
