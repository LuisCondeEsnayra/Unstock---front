import React, { useState, useEffect } from "react";
import { CFormInput, CFormLabel, CRow, CCol, CFormTextarea } from "@coreui/react";
import MeasureDropdown from "./MeasureDropdown"; // Assuming MeasureDropdown is correctly defined

const ProductForm = ({ checkCompletion, setProductData, productData }) => {
  const [productName, setProductName] = useState(productData.productName || "");
  const [cost, setCost] = useState(productData.cost || "");
  const [sellQuantity, setSellQuantity] = useState(productData.sellQuantity || "");
  const [yieldRecipe, setYieldRecipe] = useState(productData.yieldRecipe || "");
  const [image, setImage] = useState(productData.image || "");
  const [recipe, setRecipe] = useState(productData.recipe || "");
  const [sellCost, setSellCost] = useState(productData.sellCost || "");
  const [type, setType] = useState(productData.type || "");

  // Function to update product data in the parent component
  const handleInputChange = () => {
    const newProductData = {
      productName,
      cost,
      sellQuantity,
      yieldRecipe,
      image,
      recipe,
      sellCost,
      type,
    };
    setProductData(newProductData); // Update the product data in the parent component
    checkCompletion(); // Notify parent about form changes
  };

  useEffect(() => {
    handleInputChange(); // On initial render or any change, update the parent
  }, [productName, cost, sellQuantity, yieldRecipe, image, recipe, sellCost, type]);

  return (
    <CRow>
      <CCol md="6" className="mb-3">
        {/* Product Name */}
        <CFormLabel htmlFor="name">Nombre</CFormLabel>
        <CFormInput
          type="text"
          id="name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Nombre"
          className="mb-3"
        />

        {/* Sale Cost */}
        <CFormLabel htmlFor="sellCost">Costo de venta</CFormLabel>
        <CFormInput
          type="number"
          id="sellCost"
          value={sellCost}
          min={0}
          onChange={(e) => setSellCost(e.target.value)}
          placeholder="Costo de venta"
          className="mb-3"
        />

        {/* Quantity and Type (Measurement dropdown) */}
        <CRow>
          <CCol>
            <CFormLabel htmlFor="sell">Cantidad de venta</CFormLabel>
            <CFormInput
              type="number"
              id="sell"
              min={0}
              value={sellQuantity}
              onChange={(e) => setSellQuantity(e.target.value)}
              placeholder="Ej. 2"
              className="mb-3"
            />
          </CCol>
          <CCol>
            <MeasureDropdown setType={setType} /> {/* Pass setType function */}
          </CCol>
        </CRow>

        {/* Sell Cost */}
        <CFormLabel htmlFor="cost">Costo</CFormLabel>
        <CFormInput
          type="number"
          id="cost"
          value={cost}
          min={0}
          onChange={(e) => setCost(e.target.value)}
          placeholder="Costo"
          className="mb-3"
        />
      </CCol>

      <CCol>
        {/* Yield of Recipe */}
        <CFormLabel htmlFor="yield">Rendimiento de Receta</CFormLabel>
        <CFormInput
          type="number"
          id="yield"
          min={0}
          value={yieldRecipe}
          onChange={(e) => setYieldRecipe(e.target.value)}
          placeholder="Rendimiento de Receta"
          className="mb-3"
        />

        {/* Image URL */}
        <CFormLabel htmlFor="image">Imagen</CFormLabel>
        <CFormInput
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Imagen URL"
          className="mb-3"
        />

        {/* Recipe Instructions */}
        <CFormLabel htmlFor="recipe">Receta</CFormLabel>
        <CFormTextarea
          id="recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          rows={3}
          className="mb-3"
        />
      </CCol>
    </CRow>
  );
};

export default ProductForm;
