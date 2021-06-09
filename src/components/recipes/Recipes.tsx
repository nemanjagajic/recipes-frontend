import React from 'react';
import {useFetchRecipes} from '../../hooks/useFetchRecipes'

const Recipes = () => {
  const { data: recipes } = useFetchRecipes()

  return (
    <div>
      {recipes?.map((recipe) => (
        <div>{`${recipe._id}, ${recipe.title}, ${recipe.description}, ${recipe.shortDescription}`}</div>
      ))}
    </div>
  );
};

export default Recipes;
