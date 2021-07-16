import { useMutation, useQueryClient } from "react-query";
import categoryService from '../../services/api/categoryService'
import { useAlert } from "react-alert"
import $t from '../../i18n'

export const useAddCategory = (clearInputText?: Function) => {
  const queryClient = useQueryClient()
  const alert = useAlert()

  const { mutate, isLoading, error } = useMutation(categoryService.addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
      clearInputText && clearInputText();
      alert.success($t('categories.successfullyPublishedCategory'));
    }
  });
  return { mutate, isLoading, error };
};
