import React, { useState } from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "../Components/AppCard";

const AllApps = () => {
  const { appData } = useAppData();
  const [search, setSearch] = useState("");
  const searchToUse = search.trim().toLowerCase();
  // const nameToUse = appData.map(app=> app.title.trim().toLowerCase())
  const filteredApp = search
    ? appData.filter((app) =>
        app.title.trim().toLowerCase().includes(searchToUse)
      )
    : appData;

  // const handleSearch = () =>{

  // }
  return (
    <div className=" space-y-5 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Our All Applications</h2>
        <p className="text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">All Apps</h3>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search App"
          />
        </label>
      </div>
      <div className="grid lg:grid-cols-4 gap-8">
        {filteredApp.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
