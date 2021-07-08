import { useMutation, useQueryClient } from 'react-query';
import recipeService from '../../services/api/recipesService'

export const useAddRecipe = (clearInputText?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(recipeService.addRecipe, {
    onSuccess: () => {
      queryClient.invalidateQueries('recipes');
      clearInputText && clearInputText();
    }
  });
  return { mutate, isLoading, error };
};
