import React, { useEffect, useState } from "react";
import recipeExample from "../../assets/recipes.json";
import { CButton, CCard, CRow } from "@coreui/react";
import RecipeBanner from "./RecipeBanner";
import RecipeGrid from "./RecipeGrid";
import RecipeModal from "./recipeModal/RecipeModal";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";

const Recipes = () => {
  const [data, setData] = useState([]); // State to hold the recipes
  const [searchInput, setSearchInput] = useState(""); // For searching recipes
  const [showIndex, setShowIndex] = useState(null); // Index for showing more details
  const [isModalOpen, setModalOpen] = useState(false); // Modal open/close state

  useEffect(() => {
    setData(recipeExample.recipes); // Initialize with the example recipes
  }, []);

  const handleSearch = (ev) => {
    setSearchInput(ev.target.value); // Update search input
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase()) // Filter recipes by name
  );

  const openModal = () => {
    setModalOpen(true); // Open modal to add a new recipe
  };

  const closeModal = () => {
    setModalOpen(false); // Close modal
  };

  // Function to handle the addition of a new recipe
  const handleAddRecipe = (newRecipe) => {
    setData((prevData) => [...prevData, newRecipe]); // Add new recipe to the existing data
    closeModal(); // Close modal after adding the recipe
  };

  return (
    <>
      <CCard className="mb-3 px-2">
        <CRow>
          <div className="col mt-5 ms-4">
            <label htmlFor="search">Buscar Receta:</label>
            <input
              id="search"
              type="text"
              placeholder="Buscar receta"
              value={searchInput}
              onChange={handleSearch}
              className="ms-3"
            />
          </div>
          <div className="col-3 mt-4" >
            <CButton className="text-middle btn-dark"  onClick={openModal}>
              <CIcon icon={cilPlus} />
              <p>Añadir Receta</p>
            </CButton>
          </div>
          <div className="px-4">
            <hr />
          </div>
        </CRow>
        {filteredData.length !== 0 ? (
          <RecipeGrid handleShowMore={setShowIndex} filteredData={filteredData} />
        ) : (
          <h3 className="text-center m-5">No hay recetas para mostrar </h3>
        )}
      </CCard>
      <RecipeModal visible={isModalOpen} closeModal={closeModal} onAddRecipe={handleAddRecipe} />
      {showIndex != null && (
        <CCard>
          <RecipeBanner recipe={data[showIndex]} />
        </CCard>
      )}
    </>
  );
};

export default Recipes;
