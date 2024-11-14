import React from "react";
import { CFormInput, CFormLabel, CFormTextarea, CRow, CCol } from "@coreui/react";
import MeasureDropdown from "./MeasureDropdown";

const ProductForm = () => (
  <CRow>
    <CCol md="12" lg="6">
      <div className="mb-3">
        <CFormLabel htmlFor="name">Nombre</CFormLabel>
        <CFormInput type="text" id="name" placeholder="Nombre" />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="cost">Costo de venta</CFormLabel>
        <CFormInput type="text" id="cost" placeholder="Costo de venta" />
      </div>
      <div className="mb-3">
        <CRow>
          <CCol sm="8" md="8" lg="8">
            <CFormLabel htmlFor="sell">Cantidad de venta:</CFormLabel>
            <CFormInput type="text" id="sell" placeholder="Ej. 2" />
          </CCol>
          <CCol sm="4" md="4" lg="4">
            <CFormLabel htmlFor="sell">Medida:</CFormLabel> <br />
            <MeasureDropdown />
          </CCol>
        </CRow>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="cost">Costo</CFormLabel>
        <CFormInput type="text" id="cost" placeholder="Costo" />
      </div>
    </CCol>
    <CCol>
      <div className="mb-3">
        <CFormLabel htmlFor="yield">Rendimiento de Receta:</CFormLabel>
        <CFormInput type="text" id="yield" placeholder="Rendimiento de Receta:" />
      </div>
      <div className="mb-3">
        <CFormInput type="file" id="image" label="Imagen:" />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="recipe">Receta</CFormLabel>
        <CFormTextarea id="recipe" rows={3}></CFormTextarea>
      </div>
    </CCol>
  </CRow>
);

export default ProductForm;
