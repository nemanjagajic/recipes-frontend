import {useMutation, useQueryClient} from 'react-query';
import recipeService from '../../services/api/recipesService'

export const useDeleteRecipe = (navigateBack?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(recipeService.deleteRecipe, {
    onSuccess: () => {
      queryClient.invalidateQueries('recipes');
      if (navigateBack) navigateBack()
    }
  });
  return { mutate, isLoading, error };
};
