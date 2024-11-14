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
import { cilCart } from "@coreui/icons";
import recipeExample from "../../assets/recipes.json";

const Cart = () => {
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeExample.recipes);
    setFilteredRecipes(recipeExample.recipes);
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
      <CButton onClick={handleVisibility}>
        <div  
        >
          <CIcon icon={cilCart} /> 
        </div>
      </CButton>
      <CModal
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="Carro"
      >
        <CModalHeader>Carro</CModalHeader>

        <CFormInput
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-3"
        />

        <CModalBody>
          {filteredRecipes.length > 0 ? (
            <CartCard recipes={filteredRecipes} />
          ) : (
            <h5>No se encontraron resultados</h5>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cerrar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Cart;
