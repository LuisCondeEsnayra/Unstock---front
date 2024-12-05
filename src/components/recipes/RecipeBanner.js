import React, { useEffect, useState } from "react";
import { CCardBody, CCardHeader, CRow, CCol } from "@coreui/react";

import consumablesData from "../../assets/consumables.json";

const RecipeBanner = (props) => {
  const { name, image, sell, type, ingredients, recipe, yields ,sellCost} = props.recipe;

  function transformToSnakeCase(str) {
    return str
      .toLowerCase() // Convert to lowercase
      .normalize("NFD") // Normalize accented characters
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks (accents)
      .replace(/\s+/g, "_"); // Replace spaces with underscores
  }
 
  const calculateIngredientCost = (ingredient) => {
    const consumable = consumablesData.find(
      (item) => item.name === transformToSnakeCase(ingredient.ingredient)
    );
    
    if (consumable) { 
      const pricePerUnit =  parseFloat(consumable.price / consumable.quantity); 
      return pricePerUnit * ingredient.quantity;
    }

    return 0;  
  };
 
  const recipeCost = () => {
    let total = 0;
    ingredients.forEach((ingredient) => {
      total += calculateIngredientCost(ingredient);
      console.log(total)
    });
    return total;
  };

  const [recipeTotalCost, setRecipeTotalCost] = useState(0);

  useEffect(() => {
    setRecipeTotalCost(recipeCost());
  }, [ingredients]); 
  
  return (
    <>
      <CCardHeader>
        <h5 className="text-center">{name}</h5>
      </CCardHeader>
      <CCardBody>
        <CRow className="justify-content-center">
          <CCol xs="auto" className="text-center">
            <img
              style={{ maxHeight: "40vh", maxWidth: "300px" }}
              src={image}
              alt={name}
            />
          </CCol>
          <CCol>
            <CRow>
              <h5>Descripción</h5>
              <div className="col-6">
                <p>
                  Cantidad de venta: {sell} {type}
                </p>
                <p>
                  Rendimiento de receta: {yields} {type}
                </p>
              </div>
              <div className="col-6">
                <p>Precio de venta({sell} {type}): ${sellCost}</p>
                <p>Costo de receta({yields} {type}): ${recipeTotalCost.toFixed(2)}</p>
              </div>
            </CRow>
            <CRow>
              <CCol>
                <h5>Ingredientes</h5>
                <ul className="mx-5">
                  {ingredients.map((ingredient, i) => (
                    <li key={i}>
                      {ingredient.quantity} {ingredient.measure} de{" "}
                      {ingredient.ingredient}
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
  );
};

export default RecipeBanner;
