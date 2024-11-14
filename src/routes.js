import React from "react"; 
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard")); 

// Base
const Recipes = React.lazy(() => import("./views/base/recipes/Recipes")); 
 
const routes = [
  { path: "/", exact: true, name: "Login Page",},
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/recipes", name: "Recipes", element: Recipes },
];

export default routes;
