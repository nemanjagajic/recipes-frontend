import { useQuery } from 'react-query'
import recipesService from '../services/api/recipesService'
import { Recipe } from '../ts/types';

export const useFetchRecipes = () => {
  const { data, error, isLoading, isFetching } = useQuery<Recipe[]>(
    'fetchRecipes',
    recipesService.getAllRecipes
  );
  return { data, error, isLoading, isFetching };
};
