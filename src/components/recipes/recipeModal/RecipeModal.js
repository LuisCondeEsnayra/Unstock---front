import React, { useState, useEffect } from "react";
import {
  CModal,
  CModalHeader,
  CModalBody,
  CContainer,
  CButton,
  CModalFooter,
} from "@coreui/react";
import ProductForm from "./ProductForm";
import QuantitiesCard from "./QuantitiesCard";
import AddedIngredients from "./AddedIngredients";
import CreateRecipeButton from "./CreateRecipeButton";
import SearchableMultiSelect from "./SearchableMultiSelect";
import consumablesData from "../../../assets/consumables.json";

const RecipeModal = (props) => {
  // State for ingredient, quantity, type, added ingredients, and product data
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
    console.log(ingredient, quantity, type);
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
    }
  };

  // Check if "Crear Receta" button should be enabled (all fields + ingredients)
  const checkFormCompletion = () => {
    return (
      productData.productName !== "" &&
      productData.cost > 0 &&
      productData.type !== "" &&
      productData.sellQuantity > 0 &&
      productData.yieldRecipe > 0 &&
      productData.image !== "" &&
      productData.recipe !== "" &&
      productData.sellCost > 0 &&
      addedIngredients.length > 0
    );
  };

  // Whenever addedIngredients or productData changes, check if the form is complete
  useEffect(() => {
    const formComplete = checkFormCompletion();
    setIsFormDisabled(!formComplete); // Enable/disable "Crear receta" button based on form completion
    handleInputChange();
  }, [addedIngredients, productData, ingredient, quantity, type]); // Re-run when addedIngredients or productData change

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
    setAddedIngredients([]); // Reset added ingredients
    props.closeModal(); // Close the modal after submitting
  };

  return (
    <CModal
      alignment="center"
      scrollable
      size="xl"
      visible={props.visible}
      onClose={() => {
        props.closeModal();
        setAddedIngredients([]); // Reset added ingredients when modal closes
      }}
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
              handleInputChange={handleInputChange}
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

          {/* Clear Ingredients Button */}
          <CButton
            className="btn-outline-light ms-2"
            disabled={addedIngredients.length === 0}
            onClick={() => {
              setAddedIngredients([]); // Clear ingredients
              setIsFormDisabled(true); // Disable "Crear receta" button
            }}
          >
            Borrar
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
