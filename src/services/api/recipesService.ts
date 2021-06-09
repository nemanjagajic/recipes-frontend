import request from '../request'

const API_ENDPOINTS = {
  RECIPES: '/api/recipes',
}

class RecipesService {
  getAllRecipes = async () => {
    try {
      const { data } = await request.get(API_ENDPOINTS.RECIPES);
      return data;
    } catch (e) {
      throw e
    }
  }
}
export default new RecipesService()
