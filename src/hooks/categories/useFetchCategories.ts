import { useQuery } from 'react-query'
import { Category } from '../../ts/categoryTypes';
import categoryService from '../../services/api/categoryService'

export const useFetchCategories = () => {
  const { data, error, isLoading, isFetching } = useQuery<Category[]>(
    'categories',
    categoryService.getAllCategories
  );
  return { data, error, isLoading, isFetching };
};
