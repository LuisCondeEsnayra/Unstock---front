
import React from 'react';
import { CButton } from '@coreui/react';

const CreateRecipeButton = ({ onClick, isDisabled }) => {
  return (
    <CButton
      className="btn-outline-light"
      onClick={onClick}
      disabled={isDisabled}
    >
      Crear receta
    </CButton>
  );
};

export default CreateRecipeButton;
