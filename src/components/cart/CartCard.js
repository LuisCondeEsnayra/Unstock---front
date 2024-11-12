import { CTable, CTableBody } from "@coreui/react";
import React from "react";
import CartTable from "./CartTable";

const CartCard = (props) => {
  return (
    <CTable hover>
      <CTableBody>
        {props.recipes.map((recipe) => (
          <CartTable key={recipe.id} recipe={recipe} />
        ))}
      </CTableBody>
    </CTable>
  );
};

export default CartCard;
