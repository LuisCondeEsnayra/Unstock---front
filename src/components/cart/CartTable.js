import { CButton, CTableDataCell, CTableRow } from "@coreui/react";
import React, { useState } from "react";

const CartTable = (props) => {
  const { name, image, ingredients } = props.recipe;
  const [quantity, setQuantity] = useState(0);

  function transformToSnakeCase(str) {
    // Convert the string to lowercase, replace spaces with underscores, and normalize accented characters
    return str
      .toLowerCase()                  // Convert to lowercase
      .normalize('NFD')                // Normalize accented characters
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks (accents)
      .replace(/\s+/g, "_");           // Replace spaces with underscores
  }
  // Check available stock for ingredients
  const checkStock = (ingredientName) => {
    const ingredientSnake =transformToSnakeCase(ingredientName)
    const ingredient = props.consumables.find(item => item.name === ingredientSnake); 
    console.log(ingredientSnake)
    console.log(ingredient)
    return ingredient ? ingredient.stock : 0;
  };

  const addQuantity = () => {
    // Check if all ingredients are in stock before adding
    const insufficientStock = ingredients.some(ingredient => {
      const stockAvailable = checkStock(ingredient.ingredient);
      return stockAvailable < quantity + 1;
    });

    if (!insufficientStock) {
      setQuantity(quantity + 1);
    } else {
      alert("Stock is insufficient for this item!");
    }
  };

  const restQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <CTableRow>
      <CTableDataCell className="text-center align-middle">
        <img src={image} alt={name} height="100vh" />
      </CTableDataCell>
      <CTableDataCell className="text-center align-middle ">{name}</CTableDataCell>
      <CTableDataCell className="text-center align-middle">
        <CButton variant="outline" onClick={addQuantity}>+</CButton>
        <p>{quantity}</p>
        <CButton variant="outline" onClick={restQuantity}>-</CButton>
      </CTableDataCell>
    </CTableRow>
  );
};

export default CartTable;
