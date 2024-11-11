import React, { useState } from 'react' 
import CartCard from './CartCard'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCart } from '@coreui/icons'

const Cart = () => {
    const [visible, setVisible] = useState(false)
    const handleVisibility= ()=>{
        setVisible(!visible);
    }
  return (<>
    <CButton onClick={handleVisibility}> 
     
    <div className="badge text-bg-primary text-wrap p-1" style={{width: 3+'rem'}}>

    <CIcon icon={cilCart}/>
        Carrito
</div>
        </CButton>
    <CModal
      alignment="center"
      scrollable
      visible={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="Carro"
    >
    <CModalHeader>
        Carro
    </CModalHeader>
    <CModalBody>

        <CartCard/>
    </CModalBody>
    <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
        Cerrar
        </CButton> 
      </CModalFooter>
            
    </CModal>
  </>
  )
}

export default Cart