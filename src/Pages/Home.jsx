import React from "react";
import useAppData from "../Hooks/useAppData";

import { Link } from "react-router";
import Banner from "../Components/Banner";
import AppCard from "../Components/AppCard";
const Home = () => {
  const { appData } = useAppData();
  const trendingApp = appData.slice(0, 8);
  // console.log(trendingApp);
  return (
    <>
      <Banner />
      <div className="bg-gray-100 p-10">
        <h2 className="text-center text-5xl font-semibold my-5">
          Trending Apps
        </h2>
        <p className="text-center text-gray-500 ">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid lg:grid-cols-4 gap-8 py-10">
          {trendingApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>

        <Link
          to="/allApps"
          className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] relative md:left-[45%] left-[35%]"
        >
          Show All
        </Link>
      </div>
    </>
  );
};

export default Home;
