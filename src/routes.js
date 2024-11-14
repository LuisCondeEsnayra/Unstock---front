import React from "react";  
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard")); 

// Base
const Recipes = React.lazy(() => import("./views/recipes/Recipes"));  
const Consumables = React.lazy(() => import("./views/consumables/ConsumablesView")); 
 
const routes = [
  { path: "/", exact: true, name: "Login Page",},
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/recetas", name: "Recetas", element: Recipes },
  { path: "/insumos", name: "Insumos", element: Consumables },
];

export default routes;
