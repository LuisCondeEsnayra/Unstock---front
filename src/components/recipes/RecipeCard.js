import { CCardBody, CRow, CCol, CButton, CCardHeader, CCardFooter } from "@coreui/react";
import classes from './recipeCard.module.css'

const RecipeCard = (props) => {
  const { name, image  } = props.recipe;

  return ( 
   
        <div onClick={props.handleShowMore} >
        <CCardHeader className="text-center">{name}</CCardHeader>
        <CCardBody>
        <CRow className="p-1 justify-content-center align-items-center" >
          <CCol xs="auto"  >
            <img src={image} alt={name}  className={`${classes.recipeImage}  `} />
            
           
          </CCol>
        </CRow>
        </CCardBody>
        <CCardFooter className="p-3 text-center" > <CButton color="info">Mostrar Más</CButton></CCardFooter>
      </div>
       
  );
};

export default RecipeCard;