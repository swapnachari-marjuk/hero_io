import React from "react";
import appleStoreLogo from "../assets/appleStore.png";
import playStoreLogo from "../assets/googlePlay.png";
import heroImg from "../assets/hero.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="lg:max-w-7xl md:max-w-5xl mx-auto text-center ">
          <div className="lg:max-w-3xl  lg:mx-auto space-y-4 p-10 lg:p-20">
            <h1 className="lg:text-7xl text-5xl font-bold">
              We Build <br />{" "}
              <span className="text-violet-600">Productive</span> Apps
            </h1>
            <p className="text-gray-500">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>

            <div className="flex gap-2 mt-6 relative w-fit left-[25%] md:flex-row flex-col">
              <div className="flex items-center btn btn-outline">
                <img
                  className="w-6 h-6 object-contain"
                  src={playStoreLogo}
                  alt=""
                />
                <Link target="_blank" to="https://play.google.com">
                  Google Play
                </Link>
              </div>
              <div className="btn btn-outline">
                <img
                  className="w-6 h-6 object-contain"
                  src={appleStoreLogo}
                  alt=""
                />
                <Link target="_blank" to="https://www.apple.com/app-store">
                  App Store
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto md:px-10 px-5">
          <img
            className="max-w-full object-contain object-center"
            src={heroImg}
            alt=""
          />
        </div>
      </div>
      <div className="md:p-20 p-10 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white text-center space-y-6">
        <h2 className="lg:text-5xl text-3xl font-semibold">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex justify-center gap-7 flex-col md:flex-row">
          <div className="space-y-3 font-light">
            <p>Total Downloads</p>
            <h2 className="text-5xl font-bold">29.6M</h2>
            <p>21% more than last month</p>
          </div>
          <div className="space-y-3 font-light">
            <p>Total Downloads</p>
            <h2 className="text-5xl font-bold">29.6M</h2>
            <p>21% more than last month</p>
          </div>
          <div className="space-y-3 font-light">
            <p>Total Downloads</p>
            <h2 className="text-5xl font-bold">29.6M</h2>
            <p>21% more than last month</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
