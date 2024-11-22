// AddedIngredients.js
import React from 'react';
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react';

const AddedIngredients = ({ addedIngredients }) => {
  return (
    <CRow className="mt-4">
      <CCol>
        <CCard>
          <CCardHeader>Ingredientes Añadidos</CCardHeader>
          <CCardBody>
            {addedIngredients.map((item, index) => (
              <div key={index} className="mb-2">
                <strong>{item.ingredient}</strong> - {item.quantity} ({item.type})
              </div>
            ))}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AddedIngredients;
