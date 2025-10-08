import React from "react";
import logoImg from "/logo.png";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center p-20">
      <div className=" flex text-5xl font-bold text-violet-500">
        <span>L</span>
        <span className="w-10 h-10 ">
          <img className="h-full object-contain animate-spin" src={logoImg} alt="" />
        </span>
        <span>ading</span>
      </div>
    </div>
  );
};

export default LoadingPage;
