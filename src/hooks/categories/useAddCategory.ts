import { useMutation, useQueryClient } from "react-query";
import categoryService from '../../services/api/categoryService'

export const useAddCategory = (clearInputText?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(categoryService.addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
      clearInputText && clearInputText();
    }
  });
  return { mutate, isLoading, error };
};
