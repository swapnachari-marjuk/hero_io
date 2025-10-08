import React, { useEffect, useState } from "react";
import InstalledCard from "../Components/InstalledCard";
import LoadingPage from "./LoadingPage";

const Installation = () => {
  const [installedApps, setInstalledApp] = useState();
  useEffect(() => {
    const existingAppsList = JSON.parse(localStorage.getItem("installedApp"));
    if (existingAppsList) {
      setInstalledApp(existingAppsList);
    }
  }, []);

  const [sort, setSort] = useState("none");
  const handleSort = (() => {
    if (sort === "download-asc") {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sort === "download-desc") {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installedApps;
    }
  })();

  const onUninstall = (id) => {
    const updatedList = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApp", JSON.stringify(updatedList));
    setInstalledApp(updatedList);
  };

  if (!installedApps) {
    return <LoadingPage/>;
  }
  return (
    <div className="p-20">
      <div className="text-center space-y-3 mb-3">
        <h1 className="text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center py-5">
          <h3 className="text-2xl font-bold">
            Installed Apps ({installedApps.length}){" "}
          </h3>
          <label className="from-control w-full max-w-xs">
            <select
              className="select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="none">Sort</option>
              <option value="download-asc">Low-&gt;High</option>
              <option value="download-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>

        <div className="space-y-5">
          {handleSort.map((installedApp) => (
            <InstalledCard
              onUninstall={onUninstall}
              key={installedApp.id}
              installedApp={installedApp}
            ></InstalledCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
