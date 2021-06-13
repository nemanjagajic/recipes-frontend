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

  addRecipe = async (recipe: RecipeInput) => {
    try {
      const recipeData = new FormData()
      recipeData.append('title', recipe.title)
      recipeData.append('description', recipe.description)
      recipeData.append('shortDescription', recipe.shortDescription)
      recipeData.append('categories', JSON.stringify(recipe.categories))
      // @ts-ignore
      if (recipe.image) recipeData.append('image', recipe.image)

      const { data } = await request.post(API_ENDPOINTS.RECIPES, recipeData)
      return data;
    } catch(e) {
      throw e.response.data.message
    }
  }
}
export default new RecipesService()
