import React from 'react'
import { CCardBody, CCardHeader, CRow ,CCol} from "@coreui/react";

const RecipeBanner = (props) => {
    const { name, image, sell, type, ingredients, recipe } = props.recipe;
  return (
    <>
    <CCardHeader>
      <h5 className="text-center">{name}</h5>
    </CCardHeader>
  <CCardBody>
    <CRow className="justify-content-center">
      <CCol xs="auto" className="text-center">
        <img  style={{maxHeight:"40vh", maxWidth:"300px"}}  src={image} alt={name}/>
      </CCol>
      <CCol>
        <CRow>
          <h5>Descripción</h5>
          <p>
            Venta: {sell} {type}
          </p>
          <p>
            Rendimiento de Receta: {sell} {type}
          </p>
        </CRow>
        <CRow>
          <CCol>
            <h5>Ingredientes</h5>
            <ul className="mx-5">
              {ingredients.map((ingredient, i) => (
                <li key={i}>
                  {ingredient.quantity} {ingredient.measure} de {ingredient.ingredient}
                </li>
              ))}
            </ul>
          </CCol>
        </CRow>
        <CRow>
          <h5>Receta</h5>
          <p>{recipe}</p>
        </CRow>
      </CCol>
    </CRow> 
  </CCardBody>
  </>
  )
}

export default RecipeBanner