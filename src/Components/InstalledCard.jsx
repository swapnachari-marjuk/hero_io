import { Download, Star } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const InstalledCard = ({ installedApp,onUninstall }) => {
  const { image, title, downloads, ratingAvg, size,id } = installedApp || {};
  const handleUninstallBtn = ()=>{
    onUninstall(id)
    toast.warn("App Uninstalled!")
  }
  return (
    <div className="bg-white rounded-xl p-3 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="w-20 h-20">
          <img className="w-full object-contain rounded-xl" src={image} alt="" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <div className="flex gap-4">
            <div>
              <p className="flex items-center gap-1">
                <Download size={16} color="#07eda1" />
                <span className="text-[#07eda1]">{downloads}</span>
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <Star size={16} color="#ed8e07" />
                <span className="text-[#ed8e07]">{ratingAvg}</span>
              </p>
            </div>
            <p className="text-gray-500">{size} MB</p>
          </div>
        </div>
      </div>
      <button onClick={handleUninstallBtn} className="btn btn-success">Uninstall</button>
    </div>
  );
};

export default InstalledCard;
