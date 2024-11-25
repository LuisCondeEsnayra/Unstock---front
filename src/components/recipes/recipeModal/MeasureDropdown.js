import React, { useState } from "react";
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CFormLabel, CRow } from "@coreui/react";

const MeasureDropdown = ({ setType }) => {
  const [medida, setMedida] = useState("");
  const options = [
    { value: "gr", label: "Gramos" },
    { value: "ml", label: "Mililitros" },
    { value: "piezas", label: "Piezas" },
  ];

  const handleMeasure = (measure) => {
    setMedida(measure.label); // Update the local state for display
    setType(measure.value); // Pass the selected value back to ProductForm
  };

  return (
    <>
      <CRow>
        <CFormLabel htmlFor="cantidad">Cantidad:</CFormLabel>
      </CRow>
      <CRow>
        <CDropdown id="cantidad">
          <CDropdownToggle >
            {medida.length > 0 ? medida : "Medida"}
          </CDropdownToggle>
          <CDropdownMenu>
            {options.map((option, i) => (
              <CDropdownItem key={i} onClick={() => handleMeasure(option)}>
                {option.label}
              </CDropdownItem>
            ))}
          </CDropdownMenu>
        </CDropdown>
      </CRow>
    </>
  );
};

export default MeasureDropdown;
