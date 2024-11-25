import React from "react";
import {  CFormInput, CRow } from "@coreui/react";

const QuantitiesCard = ({ ingredient, quantity, setQuantity, type ,handleInputChange}) => {
  return (
    <CRow>
      <div className="col-8">
        <CFormInput
          type="text"
          value={ingredient}
          placeholder="Ingrediente"
          disabled
          onChange={handleInputChange}
        ></CFormInput>
      </div>

      <div className="col-4">
      <CRow>
        <div className="col-8">
          <CFormInput
            type="number"
            value={quantity}
            onChange={(e) =>{ setQuantity(e.target.value)
              handleInputChange()}}
            placeholder="Cantidad"
          />
        </div>
        <div className="col-4">
          {type && <p className="pt-2" >{type}</p>}
        </div>
      </CRow></div>
    </CRow>
  );
};

export default QuantitiesCard;
