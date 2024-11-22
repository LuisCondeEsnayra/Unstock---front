import React, { useState, useEffect } from "react";
import { CModal, CModalHeader, CModalBody, CContainer, CButton, CModalFooter } from "@coreui/react";
import ProductForm from "./ProductForm"; 
import QuantitiesCard from "./QuantitiesCard";
import AddedIngredients from "./AddedIngredients";
import CreateRecipeButton from "./CreateRecipeButton"; 
import SearchableMultiSelect from "./SearchableMultiSelect";
import consumablesData from "../../../assets/consumables.json"; 

const RecipeModal = (props) => {
  // State for ingredient, quantity, quantity, type, and added ingredients
  const [ingredient, setIngredient] = useState(""); 
  const [quantity, setQuantity] = useState(""); // quantity (gr, ml, piezas)
  const [type, setType] = useState(""); // Ingredient type (piezas, etc.)
  const [addedIngredients, setAddedIngredients] = useState([]);
  const [productData, setProductData] = useState({
    productName: "",
    cost: "",
    sellQuantity: "",
    yieldRecipe: "",
    image: "",
    recipe: "",
    sellCost: "",
    type: "",
  });
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true); // Disabled state for "Añadir" button
  const [isFormDisabled, setIsFormDisabled] = useState(true); // Disabled state for "Crear receta" button

  // Handler for selecting ingredient from the search
  const handleIngredientSelect = (selectedItems) => {
    if (selectedItems && selectedItems.length > 0) {
      const selectedItem = selectedItems[0];
      setIngredient(selectedItem.label);
      setType(selectedItem.type);
    }
  };

  // Check if all necessary fields are filled to enable "Añadir" button
  const handleInputChange = () => {
    if (ingredient && quantity && type) {
      setIsAddButtonDisabled(false); // Enable button if all fields are filled
    } else {
      setIsAddButtonDisabled(true); // Disable button if any field is missing
    }
  };

  // Add ingredient to the added ingredients list
  const handleAddIngredient = () => {
    if (ingredient && quantity && type) {
      const newIngredient = {
        ingredient,
        quantity,
        type,
      };
      setAddedIngredients((prev) => [...prev, newIngredient]);
      setIngredient(""); // Reset ingredient selection
      setQuantity(""); // Reset quantity
      setType(""); // Reset type
      setIsAddButtonDisabled(true); // Disable "Añadir" button again after adding
      checkFormCompletion(); // Recheck if form is complete
    }
  };

  // Check if "Crear Receta" button should be enabled (all fields + ingredients)
  const checkFormCompletion = () => {
    if (addedIngredients.length > 0 && productData.productName) {
      setIsFormDisabled(false); // Enable "Crear receta" button if ingredients and product data are added
    } else {
      setIsFormDisabled(true); // Disable "Crear receta" button if no ingredients or product data are added
    }
  };

  useEffect(() => {
    // Whenever ingredient, quantity, or type changes, recheck if "Añadir" button should be enabled
    handleInputChange();
  }, [ingredient, quantity, type]);

  // Gather all form data and pass it to parent component
  const handleCreateRecipe = () => {
    const newRecipe = {
      id: Date.now(), // Simple way to generate a unique ID for the recipe
      name: productData.productName,
      image: productData.image, // Add image if it's part of the product data
      recipe: productData.recipe,
      ingredients: addedIngredients,
      sell: productData.sellCost,
      yields: productData.yieldRecipe,
      type: productData.type,
    };

    // Pass the new recipe data to the parent component (Recipes)
    props.onAddRecipe(newRecipe);
    props.closeModal(); // Close the modal after submitting
  };

  return (
    <CModal
      alignment="center"
      scrollable
      size="xl"
      visible={props.visible}
      onClose={() => props.closeModal()}
      aria-labelledby="Carro"
    >
      <CModalHeader>Productos</CModalHeader>
      <CModalBody>
        <CContainer>
          {/* Product Form (ProductForm component) */}
          <ProductForm 
            checkCompletion={checkFormCompletion} 
            setProductData={setProductData}
            productData={productData} // Pass productData to ProductForm for updates
          />

          {/* Ingredient Selection */}
          <div className="mb-3"> 
            <SearchableMultiSelect
              options={consumablesData}
              renderItem={(item) => <span>{item.label}</span>}
              onSelect={handleIngredientSelect}
            />
          </div>

          {/* Quantity and quantity */}
          <div className="mb-3">
            <QuantitiesCard 
              ingredient={ingredient} 
              quantity={quantity}
              setQuantity={setQuantity}
              type={type}
              onChange={handleInputChange}
            />
          </div>

          {/* Add Ingredient Button */}
          <CButton
            className="btn-outline-light"
            onClick={handleAddIngredient}
            disabled={isAddButtonDisabled}
          >
            Añadir
          </CButton>

          {/* Added Ingredients */}
          {addedIngredients.length > 0 && (
            <AddedIngredients addedIngredients={addedIngredients} />
          )}

        </CContainer>
      </CModalBody>
      <CModalFooter>
        <CreateRecipeButton
          onClick={handleCreateRecipe} // Use handleCreateRecipe to submit the recipe
          isDisabled={isFormDisabled} // Disable button based on form completeness
        />
      </CModalFooter>
    </CModal>
  );
};

export default RecipeModal;
