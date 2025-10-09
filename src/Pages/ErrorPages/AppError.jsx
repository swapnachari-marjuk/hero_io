import React from "react";
import { Link, useNavigate } from "react-router";
import appNotFoundImg from "/App-Error.png";

const AppError = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <img src={appNotFoundImg} alt="" />
      <h2 className="md:text-4xl text-xl font-bold  mb-4">
        OPPS!! APP NOT FOUND
      </h2>
      <p className="text-gray-500 text-lg mb-6">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link
        onClick={()=>{navigate(-1)}}
        className="btn bg-blue-500 text-white px-5 py-2 rounded-lg"
      >
        Go Back
      </Link>
    </div>
  );
};

export default AppError;
