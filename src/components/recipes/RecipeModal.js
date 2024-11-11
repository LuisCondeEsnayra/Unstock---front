import React, { useState } from 'react'
import { CButton, CForm, CFormInput, CFormLabel, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader,CDropdownMenu, CDropdown, CDropdownToggle, CDropdownItem } from '@coreui/react'

const RecipeModal = (props) => {
    const [medida, setMedida] = useState("")
    const options = [
    {
      value: "gr",
      label: 'Gramos',
    },
    {
      value: "ml",
      label: 'Mililitros',
    },
    {
      value: "piezas",
      label: 'Piezas',
    }, 
 
  ] 
  const handleMeasure=(measure)=>{
    setMedida(measure)
  }
  return (
    <CModal
    alignment="center"
    scrollable
    visible={props.visible}
    onClose={() => props.closeModal()}
    aria-labelledby="Carro"
  >
  <CModalHeader>
      Productos
  </CModalHeader>
  <CModalBody>
  <CForm>
  <div className="mb-3">
    <CFormLabel htmlFor="name">Nombre</CFormLabel>
    <CFormInput type="text"   id="name" placeholder="Nombre"/>
  </div>
  <div className="mb-3">
    <CFormLabel htmlFor="sell">Venta:</CFormLabel>
    <CFormInput type="text"   id="sell" placeholder="Ej. 2"/>  <CDropdown>
  <CDropdownToggle color="secondary">{medida.length>0 ? medida:"Medida"}</CDropdownToggle>
  <CDropdownMenu>
  {options.map(option => (<CDropdownItem onClick={()=>{handleMeasure(option.value)}} >{option.label}</CDropdownItem>)) }
  </CDropdownMenu>
</CDropdown>
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
  )
}

export default RecipeModal