import { useMutation, useQueryClient } from 'react-query';
import categoryService from '../../services/api/categoryService'

export const useDeleteCategory = (navigateBack?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(categoryService.deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
      if (navigateBack) navigateBack()
    }
  });
  return { mutate, isLoading, error };
};
