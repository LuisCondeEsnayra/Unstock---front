import React from "react";
import { CRow, CCol, CCard } from "@coreui/react";
import RecipeCard from "./RecipeCard";
import classes from "./RecipesGrid.module.css";

const RecipeGrid = (props) => {
  return (
    <CRow className={`${classes.cardHeight} overflow-auto `}>
      {props.filteredData.map((recipe, index) => (
        <CCol key={index} xs="12" sm="6" md="3" className="  mb-4 text-center">
          <div className="w-100 ps-2">
            <RecipeCard
              recipe={recipe}
              handleShowMore={() => props.handleShowMore(index)}
            />
          </div>
        </CCol>
      ))}
    </CRow>
  );
};

export default RecipeGrid;
