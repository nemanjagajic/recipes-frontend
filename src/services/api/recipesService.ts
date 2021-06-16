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
      // @ts-ignore
      recipeData.append('categories[]', recipe.categories)

      if (recipe.coverImage) recipeData.append('coverImage', recipe.coverImage)
      recipe.images.forEach(image => {
        recipeData.append('images', image)
      })

      const { data } = await request.post(API_ENDPOINTS.RECIPES, recipeData)
      return data;
    } catch(e) {
      throw e.response.data.message
    }
  }
}
export default new RecipesService()
