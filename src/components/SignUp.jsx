import React from "react";
import loginImg from "../assets/trees.jpg";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

const SignUp = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt="/"
      />
      {/* //object cover will be streaching the image just try removing it from the className */}

      <div className="flex  justify-center items-center h-full ">
        <form className="max-w-[800px] w-full max-auto bg-white p-8 ">
          <h2 className="text-5xl font-bold text-center py-4"> xPENSE</h2>
          <p className="text-center mt-4">Register Form</p>
          <div className="flex justify-between py-8">
            <p className="border shadow-lg hover:shadow:xl px-6 py-2 relative flex item-center">
              <ImFacebook2 className="mr-2" /> Facebook
            </p>
            <p className="border shadow-lg hover:shadow:xl px-6 py-2 relative flex item-center">
              <FcGoogle className="mr-2" /> Google
            </p>
          </div>
          <div className="flex justify-around">
            {/* username email pswd gender job profession */}
            <div className="flex flex-col mb-4">
              <label> Username</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
                required
              />
            </div>
            {/* whole section  div to div for input */}
            <div className="flex flex-col mb-4">
              <label> Email</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label> Password</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
                required
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col ">
              <label>Job/Profession</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col ">
              <label>Age</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="number"
                required
              />
            </div>
            <div className="flex flex-col ">
              <label>Gender</label>
              <select
                className="border relative bg-gray-100 p-2"
                aria-label="Default select example"
              >
                
                <option value="Male" selected>Male</option>
                <option value="Female">Female</option>
                <option value="NA">Not Decided Yet</option>
              </select>
            </div>
          </div>
          <button className="w-full py-3 mt-8 bg-indigo-500 hover:bg-indigo-700 relative text-white">
            Sign In
          </button>
          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" name="" id="" />
            Remember Me
          </p>
          <p className="text-center mt-4">Already a member? Sign In now</p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
