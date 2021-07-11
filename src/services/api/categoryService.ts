import request from '../request'
import {CategoryInput} from '../../ts/categoryTypes'

const API_ENDPOINTS = {
  CATEGORIES: '/api/categories',
}

class RecipesService {
  getAllCategories = async () => {
    try {
      const { data } = await request.get(API_ENDPOINTS.CATEGORIES);
      return data;
    } catch (e) {
      throw e.response.data.message
    }
  }

  addCategory = async (category: CategoryInput) => {
    try {
      const categoryData = new FormData()
      categoryData.append('title', category.title)
      categoryData.append('description', category.description)
      if (category.image) categoryData.append('image', category.image)

      const { data } = await request.post(API_ENDPOINTS.CATEGORIES, categoryData)
      return data;
    } catch(e) {
      throw e.response.data.message
    }
  }

  deleteCategory = async (categoryId: string) => {
    try {
      const {data} = await request.delete(API_ENDPOINTS.CATEGORIES, {data: { categoryId }})
      return data
    } catch (e) {
      throw e.response.data?.message
    }
  }
}
export default new RecipesService()
