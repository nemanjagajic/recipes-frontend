import { useQuery } from 'react-query'
import recipesService from '../../services/api/recipesService'
import { Recipe } from '../../ts/recipeTypes';

export const useFetchRecipes = (categoryId: string) => {
  const { data, error, isLoading, isFetching } = useQuery<Recipe[]>(
    'recipes',
    () => recipesService.getRecipesByCategory(categoryId)
  );
  return { data, error, isLoading, isFetching };
};
