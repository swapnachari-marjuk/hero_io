import React, { useState } from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "../Components/AppCard";
import LoadingPage from "./LoadingPage";
import AppError from "./ErrorPages/AppError";

const AllApps = () => {
  const { appData, loading } = useAppData();
  const [search, setSearch] = useState("");
  const searchToUse = search.trim().toLowerCase();
  const filteredApp = search
    ? appData.filter((app) =>
        app.title.trim().toLowerCase().includes(searchToUse)
      )
    : appData;

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className=" space-y-5 max-w-7xl mx-auto py-10 lg:px-0 px-5">
      <div className="text-center">
        <h2 className="font-bold md:text-4xl text-2xl">Our All Applications</h2>
        <p className="text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between md:flex-row flex-col text-center items-center">
        <h3 className="text-2xl font-bold mb-3 md:mb-0">
          All Apps ({filteredApp.length})
        </h3>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search App"
          />
        </label>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {filteredApp.length === 0 ? (
          <div className="lg:col-span-4 md:col-span-2">
            <AppError />
          </div>
        ) : (
          filteredApp.map((app) => <AppCard key={app.id} app={app} />)
        )}
        {/* {filteredApp.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))} */}
      </div>
    </div>
  );
};

export default AllApps;
