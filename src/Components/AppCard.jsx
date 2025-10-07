import React from "react";
import { Download, Star } from "lucide-react";

const AppCard = ({ app }) => {
  const { image, title, ratingAvg, downloads } = app;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt="apps" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center gap-15">
          <div className="flex bg-green-300 text-green-600 p-1 rounded-sm">
            <Download size={16} /> {downloads}
          </div>
          <div className="flex bg-orange-300 text-orange-600 p-1 rounded-sm">
            <Star size={16} />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
