 
import CIcon from "@coreui/icons-react";
import classes from "./recipeCard.module.css";
import { cilRestaurant } from "@coreui/icons";

const RecipeCard = (props) => {
  const { name, image } = props.recipe;

  return (
    <div onClick={props.handleShowMore} className={classes.card}>
    <h5>{name}</h5>
    <div className={`bg-success ${classes.midBar} text-center`}>
      <div>
        <CIcon className={classes.circleIcon} icon={cilRestaurant} size={"xxl"} />
      </div>
    </div>
    <img src={image} alt={name} className={`${classes.recipeImage}`} />
  </div>
  
  );
};

export default RecipeCard;
