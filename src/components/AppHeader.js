import React, { useEffect, useRef } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  CContainer, 
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem, 
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {  
  cilMenu, 
} from "@coreui/icons";

import { AppBreadcrumb } from "./index";
import Cart from "./cart/Cart";
import { setAuthenticated, toggleSidebar } from "../store";

const AppHeader = () => {
  const headerRef = useRef(); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      headerRef.current &&
        headerRef.current.classList.toggle(
          "shadow-sm",
          document.documentElement.scrollTop > 0
        );
    });
  }, []);

  const handleLogout = () => {
    dispatch(setAuthenticated(false));
    navigate("/login", { replace: true });
  };

  const navOptions = ["Dashboard","Recetas","Insumos"]
  const handleNavItems=(item)=>{
    
    navigate("/"+item, { replace: true });
  }

  return (
    <CHeader position="sticky" className="mb-4 p-0 bg-success" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => {
            dispatch(toggleSidebar());
          }}
          style={{ marginInlineStart: "-14px" }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex">
       
         {navOptions.map(item=> <CNavItem>
            <CNavLink onClick={()=>{handleNavItems(item.toLowerCase())}}>{item}</CNavLink>
          </CNavItem> )}
        </CHeaderNav>
        <CHeaderNav className="ms-auto">
          <CNavItem>
            <Cart />
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          {/* <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li> */}
          {/* <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === "dark" ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === "auto" ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === "light"}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode("light")}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === "dark"}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode("dark")}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === "auto"}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode("auto")}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CNavItem>
            <CButton color="dark ms-3" onClick={handleLogout}>
              Salir
            </CButton>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      <CContainer className="px-4" fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;