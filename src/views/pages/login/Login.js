import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from '../../../store'

const Login = () => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch= useDispatch()

  const handleUser = (ev) => {
    setUser(ev.target.value);
  }  
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  }  
  
  const handleSubmit = (ev) => {
  
    ev.preventDefault();
    if (password === "utch" && user.toLowerCase() === "admin") { 
      dispatch(setAuthenticated(true))
      navigate("/", {replace:true})
          
    } 
    if (password === "gastro" && user.toLowerCase() === "cliente") { 
      dispatch(setAuthenticated(true))
      navigate("/", {replace:true})
          
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Inicio de sesión</h1>
                    <p className="text-body-dark">Inicia sesión en tu cuenta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Usuario"
                        autoComplete="username"
                        onChange={handleUser}
                        value={user}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="current-password"
                        onChange={handlePassword}
                        value={password}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol>
                        <CButton color="primary" className="px-4" type='submit'>
                          Iniciar sesión
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Registrarse</h2> 
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Registrate!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
