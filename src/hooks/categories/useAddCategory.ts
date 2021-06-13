import { useMutation } from "react-query";
import categoryService from '../../services/api/categoryService'

export const useAddCategory = (clearInputText?: Function) => {

  const { mutate, isLoading, error } = useMutation(categoryService.addCategory, {
    onSuccess: () => {
      clearInputText && clearInputText();
    }
  });
  return { mutate, isLoading, error };
};
