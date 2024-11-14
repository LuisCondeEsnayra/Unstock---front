import React from 'react'
import RecipesComponent from '../../../components/recipes/Recipes'
import Banner from '../../../components/Banner'

const Recipes = () => {
  return (
    <>
        <Banner text= "Recetas"/>
        <RecipesComponent/>
    </>
  )
}

export default Recipes