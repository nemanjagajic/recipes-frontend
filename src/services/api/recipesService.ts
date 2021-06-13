import request from '../request'
import {RecipeInput} from '../../ts/recipeTypes'

const API_ENDPOINTS = {
  RECIPES: '/api/recipes',
}

class RecipesService {
  getAllRecipes = async () => {
    try {
      const { data } = await request.get(API_ENDPOINTS.RECIPES);
      return data;
    } catch (e) {
      throw e.response.data.message
    }
  }

  addRecipe = async (category: RecipeInput) => {
    try {
      const { data } = await request.post(API_ENDPOINTS.RECIPES, category)
      return data;
    } catch(e) {
      throw e.response.data.message
    }
  }
}
export default new RecipesService()
