import React from "react";
import { Download, Star } from "lucide-react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, ratingAvg, downloads,id } = app;
//   const params = useParams()
//   console.log(params);
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card bg-base-100 shadow-sm hover:transform hover:scale-105 ease-linear duration-1000">
        <figure className="px-10 h-40 pt-10">
          <img
            src={image}
            alt="apps"
            className="rounded-xl w-full h-full object-contain"
          />
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
    </Link>
  );
};

export default AppCard;
