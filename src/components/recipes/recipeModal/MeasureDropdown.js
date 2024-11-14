import React, { useState } from "react";
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react";

const MeasureDropdown = () => {
  const [medida, setMedida] = useState("");
  const options = [
    { value: "gr", label: "Gramos" },
    { value: "ml", label: "Mililitros" },
    { value: "piezas", label: "Piezas" },
  ];

  const handleMeasure = (measure) => setMedida(measure);

  return (
    <CDropdown>
      <CDropdownToggle color="secondary">
        {medida.length > 0 ? medida : "Medida"}
      </CDropdownToggle>
      <CDropdownMenu>
        {options.map((option, i) => (
          <CDropdownItem key={i} onClick={() => handleMeasure(option.value)}>
            {option.label}
          </CDropdownItem>
        ))}
      </CDropdownMenu>
    </CDropdown>
  );
};

export default MeasureDropdown;
