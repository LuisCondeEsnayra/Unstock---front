// import React, { useState } from "react";
import React from "react";
import { CForm, CModal, CModalBody, CModalHeader, CContainer } from "@coreui/react";
import ProductForm from "./ProductForm";
import SearchableMultiSelect from "./SearchableMultiSelect";
import consumablesData from "../../../assets/consumables.json"

const RecipeModal = (props) => {
  // const [selectedItems, setSelectedItems] = useState([]);

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
        <CForm>
          <CContainer>
            <ProductForm />
            <SearchableMultiSelect
  options={consumablesData}
  renderItem={(item) => <span>{item.label}</span>}
  onSelect={(selectedItems) => console.log("Selected items:", selectedItems)}
/>

          </CContainer>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default RecipeModal;
