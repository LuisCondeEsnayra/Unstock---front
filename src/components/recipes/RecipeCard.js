import {
  CCardBody,
  CRow,
  CCol,
  CButton,
  CCardHeader,
  CCardFooter,
} from "@coreui/react";
import classes from "./recipeCard.module.css";

const RecipeCard = (props) => {
  const { name, image } = props.recipe;

  return (
    <div onClick={props.handleShowMore}>
      <h5>{name}</h5>
      <img src={image} alt={name} className={`${classes.recipeImage}  `} />
    </div>
  );
};

export default RecipeCard;
