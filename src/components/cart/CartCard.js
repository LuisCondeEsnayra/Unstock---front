import { CTable, CTableBody } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import recipeExample from '../../assets/recipes.json'
import CartTable from './CartTable';

const CartCard = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
      setRecipes(recipeExample.recipes)
    
    }, [])
     
    return (
    <CTable hover>
        <CTableBody> 
            {recipes.map(recipe=><CartTable  key={recipe.id} recipe={recipe} />)}
        </CTableBody>
    </CTable>
  )
}

export default CartCard