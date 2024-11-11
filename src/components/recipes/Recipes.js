import React, { useEffect, useState } from "react";
import recipeExample from "../../assets/recipes.json";
import { CCard } from "@coreui/react";
import RecipeBanner from "./RecipeBanner";
import RecipeGrid from "./RecipeGrid";
import RecipeModal from "./RecipeModal";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showIndex, setShowIndex] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleShowMore = (index) => {
    setShowIndex(index);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  
  useEffect(() => {
    console.log(recipeExample.recipes);
    setData(recipeExample.recipes);
  }, []);

  const handleSearch = (ev) => {
    setSearchInput(ev.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  

  return (
    <>
      <input
        type="text"
        placeholder="Buscar receta"
        value={searchInput}
        onChange={handleSearch}
        className="mb-2"
      />

      <RecipeGrid
        handleShowMore={handleShowMore}
        filteredData={filteredData}
        openModal={openModal}
      />
      <RecipeModal visible={isModalOpen} 
        closeModal={closeModal}
      />
      {showIndex != null && (
        <CCard>
          <RecipeBanner recipe={data[showIndex]} />
        </CCard>
      )}
      
    </>
  );
};

export default Recipes;
