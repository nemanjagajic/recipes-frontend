import { useQuery } from 'react-query'
import recipesService from '../../services/api/recipesService'
import { Recipe } from '../../ts/recipeTypes';

export const useFetchRecipes = () => {
  const { data, error, isLoading, isFetching } = useQuery<Recipe[]>(
    'recipes',
    recipesService.getAllRecipes
  );
  return { data, error, isLoading, isFetching };
};
