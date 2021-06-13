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
      const { data } = await request.post(API_ENDPOINTS.CATEGORIES, category)
      return data;
    } catch(e) {
      throw e.response.data.message
    }
  }
}
export default new RecipesService()
