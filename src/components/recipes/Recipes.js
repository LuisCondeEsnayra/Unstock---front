import React, { useEffect, useState } from "react";
import recipeExample from "../../assets/recipes.json";
import { CButton, CCard, CCol, CRow } from "@coreui/react";
import RecipeBanner from "./RecipeBanner";
import RecipeGrid from "./RecipeGrid";
import RecipeModal from "./RecipeModal";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showIndex, setShowIndex] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleShowMore = (index) => {
    setShowIndex(index);
  };

  useEffect(() => {
    setData(recipeExample.recipes);
  }, []);

  const handleSearch = (ev) => {
    setSearchInput(ev.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CCard className="my-3">
        <CRow>
          <div className="col   mt-5 ms-4">
            <label for="search">Buscar Receta:</label>
            <input
              id="search"
              type="text"
              placeholder="Buscar receta"
              value={searchInput}
              onChange={handleSearch}
              className="ms-3 "
            />
          </div>
          <div className="col-3 mt-4">
            <CButton className="   text-middle" onClick={openModal}>
              <CIcon icon={cilPlus} />
              <p>Añadir Receta</p>
            </CButton>
          </div>
          <div className="px-4">
            <hr />
          </div>
        </CRow>
        {filteredData.length !== 0 ? (
          <RecipeGrid
            handleShowMore={handleShowMore}
            filteredData={filteredData}
          />
        ) : (
          <h3 className="text-center m-5">No hay recetas para mostrar </h3>
        )}
      </CCard>
      <RecipeModal visible={isModalOpen} closeModal={closeModal} />
      {showIndex != null && (
        <CCard>
          <RecipeBanner recipe={data[showIndex]} />
        </CCard>
      )}
    </>
  );
};

export default Recipes;
