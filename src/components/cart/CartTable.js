import { CButton, CTableDataCell, CTableRow } from "@coreui/react";
import React, { useState } from "react";

const CartTable = (props) => {
  const { name, image } = props.recipe;
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const restQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  return (
    <CTableRow>
      <CTableDataCell className="text-center align-middle">
        <img src={image} alt={name} height="100vh" />
      </CTableDataCell>
      <CTableDataCell className="text-center align-middle ">
        {name}
      </CTableDataCell>
      <CTableDataCell className="text-center align-middle">
        <CButton variant="outline" onClick={addQuantity}>
          +
        </CButton>
        <p>{quantity}</p>
        <CButton variant="outline" onClick={restQuantity}>
          -
        </CButton>
      </CTableDataCell>
    </CTableRow>
  );
};

export default CartTable;
