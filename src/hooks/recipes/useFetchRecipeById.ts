import { useQuery } from 'react-query'
import recipesService from '../../services/api/recipesService'
import { Recipe } from '../../ts/recipeTypes';

export const useFetchRecipeById = (recipeId: string) => {
  const { data, error, isLoading, isFetching } = useQuery<Recipe>(
    'recipe',
    () => recipesService.getRecipeById(recipeId)
  );
  return { data, error, isLoading, isFetching };
};
