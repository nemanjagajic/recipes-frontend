import { useMutation } from "react-query";
import recipeService from '../../services/api/recipesService'

export const useAddRecipe = (clearInputText?: Function) => {

  const { mutate, isLoading, error } = useMutation(recipeService.addRecipe, {
    onSuccess: () => {
      clearInputText && clearInputText();
    }
  });
  return { mutate, isLoading, error };
};
