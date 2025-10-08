import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAppData from "../Hooks/useAppData";
import { Download, Star, ThumbsUp } from "lucide-react";
import BarComponents from "../Components/BarComponents";
import { toast } from "react-toastify";
import LoadingPage from "./LoadingPage";

const AppDetails = () => {
  const { id } = useParams();
  const { appData, loading } = useAppData();
  const filteredApp = appData.find((app) => app.id === Number(id));

  const [installed, setInstalled] = useState(false);

    useEffect(() => {
    const existingAppsList = JSON.parse(localStorage.getItem("installedApp")) || [];
    const isAlreadyInstalled = existingAppsList.some((app) => app.id === Number(id));
    setInstalled(isAlreadyInstalled);
  }, [id]);
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = filteredApp || {};
  if (loading) {
    return <LoadingPage/>;
  }

  const handleInstallBtn = () => {
    const existingAppsList = JSON.parse(localStorage.getItem("installedApp"));
    let updatedList = [];
    if (existingAppsList) {
    //   const isDuplicate = existingAppsList.some(
    //     (app) => app.id === filteredApp.id
    //   );
    //   if (isDuplicate) {
    //     toast.warn("This App Is Already Installed!");
    //     return;
    //   }
      updatedList = [...existingAppsList, filteredApp];
    } else {
      updatedList.push(filteredApp);
    }
    toast.success("App Installed Successfully.");
    setInstalled(true);
    localStorage.setItem("installedApp", JSON.stringify(updatedList));
  };

  return (
    <div className="md:p-20 p-10">
      <div className="flex gap-10 md:flex-row flex-col border-b-2 border-gray-300 pb-5">
        <div className="h-60 w-60">
          <img className="w-full object-contain" src={image} alt="" />
        </div>
        <div className="flex-1 space-y-5">
          <div className="border-b-2 border-gray-300 space-y-3 pb-5">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-xl font-light text-gray-500">
              Developed By:
              <span className="text-violet-600 font-semibold">
                {companyName}
              </span>
            </p>
          </div>
          <div className="flex justify-between gap-5 lg:w-[60%]">
            <div>
              <Download size={40} color="#51e66a" strokeWidth={3} />
              <p>Download</p>
              <h3 className="font-bold md:text-3xl">{downloads}K</h3>
            </div>
            <div>
              <Star size={40} color="#e68d51" strokeWidth={3} />
              <p>Avg. Rating</p>
              <h3 className="font-bold md:text-3xl">{ratingAvg}K</h3>
            </div>
            <div>
              <ThumbsUp size={40} color="#518ae6" strokeWidth={3} />
              <p>Tot. Reviews</p>
              <h3 className="font-bold md:text-3xl">{reviews}K</h3>
            </div>
          </div>
          <button className="btn text-white bg-[#00D390]" disabled={installed} onClick={handleInstallBtn}>
            {installed ? `Installed` :  <>Install Now <span>{size} MB</span></>} 
          </button>
        </div>
      </div>
      <div className="border-b-2 border-gray-300">
        <BarComponents ratings={ratings} />
      </div>
      <div className="mt-5">
        <h3 className="font-bold text-2xl">Description</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
