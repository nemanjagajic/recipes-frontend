import { useMutation, useQueryClient } from 'react-query';
import recipeService from '../../services/api/recipesService'
import $t from '../../i18n'
import { useAlert } from 'react-alert'

export const useAddRecipe = (clearInputText?: Function) => {
  const queryClient = useQueryClient();
  const alert = useAlert()

  const { mutate, isLoading, error } = useMutation(recipeService.addRecipe, {
    onSuccess: () => {
      queryClient.invalidateQueries('recipes');
      clearInputText && clearInputText();
      alert.success($t('recipes.successfullyPublishedRecipe'));
    }
  });
  return { mutate, isLoading, error };
};
