import React, { useState } from "react";
import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CDropdownMenu,
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CRow,
  CCol,
} from "@coreui/react";

const RecipeModal = (props) => {
  const [medida, setMedida] = useState("");
  const options = [
    {
      value: "gr",
      label: "Gramos",
    },
    {
      value: "ml",
      label: "Mililitros",
    },
    {
      value: "piezas",
      label: "Piezas",
    },
  ];
  const handleMeasure = (measure) => {
    setMedida(measure);
  };
  return (
    <CModal
      alignment="center"
      scrollable
      visible={props.visible}
      onClose={() => props.closeModal()}
      aria-labelledby="Carro"
    >
      <CModalHeader>Productos</CModalHeader>
      <CModalBody>
        <CForm>
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
                <CFormInput type="text" id="sell" placeholder="Ej. 2" />{" "}
              </CCol>
              <CCol sm="4" md="4" lg="4">
                <CFormLabel htmlFor="sell">Medida:</CFormLabel>
                <br />
                <CDropdown>
                  <CDropdownToggle color="secondary">
                    {medida.length > 0 ? medida : "Medida"}
                  </CDropdownToggle>
                  <CDropdownMenu>
                    {options.map((option, i) => (
                      <CDropdownItem
                        key={i}
                        onClick={() => {
                          handleMeasure(option.value);
                        }}
                      >
                        {option.label}
                      </CDropdownItem>
                    ))}
                  </CDropdownMenu>
                </CDropdown>
              </CCol>
            </CRow>
          </div>

          <div className="mb-3">
            <CFormLabel htmlFor="cost">Costo</CFormLabel>
            <CFormInput type="text" id="cost" placeholder="Costo" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="yield">Rendimiento de Receta:</CFormLabel>
            <CFormInput
              type="text"
              id="yield"
              placeholder="Rendimiento de Receta:"
            />
          </div>
          <div className="mb-3">
            <CFormInput type="file" id="image" label="Imagen:" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="recipe">Receta</CFormLabel>
            <CFormTextarea id="recipe" rows={3}></CFormTextarea>
          </div>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => props.closeModal()}>
          Cerrar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default RecipeModal;
