import React from "react";
import useAppData from "../Hooks/useAppData";

import { Link } from "react-router";
import Banner from "../Components/Banner";
const Home = () => {
  const { appData } = useAppData();
//   console.log(appData);
  return (
   <>
   <Banner/>
   </>
  );
};

export default Home;
