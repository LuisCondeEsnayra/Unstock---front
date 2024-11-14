import React from "react";  
import Recepies from "../../components/recipes/Recipes.js";  
import Banner from "../../components/Banner.js";

const Dashboard = () => { 

  return (
    <> 
    <Banner text="Dashboard"/>
      <Recepies />
      </>
  );
};

export default Dashboard;
