import React from "react";
import pageNotFoundImg from "/error-404.png";
import { Link } from "react-router";

const PageError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center md:px-0 p-8">
      <img src={pageNotFoundImg} alt="" />
      <h2 className="md:text-4xl text-2xl font-bold mb-4">OPPS!! page not found!</h2>
      <p className="text-gray-500 text-lg mb-6">
        The page you are looking for is not available.
      </p>
      <Link to="/" className="btn bg-blue-500 text-white px-5 py-2 rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default PageError;
