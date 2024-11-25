import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {  cilFastfood } from "@coreui/icons";
import recipeExample from "../../assets/recipes.json";
import consumablesData from "../../assets/consumables.json"; // Assuming consumables data is imported

const Cart = () => {
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [consumables, setConsumables] = useState([]);

  useEffect(() => {
    setRecipes(recipeExample.recipes);
    setFilteredRecipes(recipeExample.recipes);
    setConsumables(consumablesData); // Assuming consumables data is fetched or imported
  }, []);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredRecipes(filtered);
  };

  return (
    <>
      <CButton   onClick={handleVisibility}>
        <CIcon  size="xxl"  icon={cilFastfood} />
      </CButton>
      <CModal
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="Ordenes"
      >
        <CModalHeader>Ordenes</CModalHeader>

        <CFormInput
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-3"
        />

        <CModalBody>
          {filteredRecipes.length > 0 ? (
            <CartCard recipes={filteredRecipes} consumables={consumables} />
          ) : (
            <h5>No se encontraron resultados</h5>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setVisible(false)}>
            Ordenar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Cart;
