import React from 'react'
import {
    CRow,
    CCol,
    CCard,
    CButton, 
  } from "@coreui/react";
  import RecipeCard from "./RecipeCard";
  import CIcon from "@coreui/icons-react";
  import { cilPlus } from "@coreui/icons";
  import classes from "./RecipesGrid.module.css";

const RecipeGrid = (props) => {
  return (
    <CRow className={`${classes.cardHeight} overflow-auto mb-2`}>
    <CCol
        xs="12"
        sm="6"
        md="4"
        className="d-flex justify-content-center mb-4"
      >
        <CCard className="w-100 text-center" style={{minHeight:"20vh"}}  onClick={props.openModal}>
        <CButton className="w-50 position-absolute top-50 start-50 translate-middle" >
          <CIcon icon={cilPlus} size="3xl"/><p>
            Añadir Receta
          </p>
        </CButton>
        </CCard>
      </CCol>
    {props.filteredData.map((recipe, index) => (
      <CCol
        key={index}
        xs="12"
        sm="6"
        md="4"
        className="d-flex justify-content-center mb-4"
      >
        <CCard className="w-100">
          <RecipeCard
            recipe={recipe} 
            handleShowMore={() => props.handleShowMore(index)} 
          />
        </CCard>
      </CCol>
    ))}      
      
  </CRow>
  )
}

export default RecipeGrid