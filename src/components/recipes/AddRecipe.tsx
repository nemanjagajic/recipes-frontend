import React, { useState } from 'react';
import $t from '../../i18n';
import {Recipe, RecipeInput} from '../../ts/recipeTypes'

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState<RecipeInput>({ description: '', shortDescription: '', title: '' })

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setRecipeData({ ...recipeData, [name]: value })
  }

  const isValid = () => recipeData?.title && recipeData?.shortDescription && recipeData?.description

  return (
    <form className={'content'}>
      <input
        placeholder={$t('recipes.title')}
        name={'title'}
        value={recipeData?.title}
        onChange={onChange}
      />
      <input
        placeholder={$t('recipes.description')}
        name={'description'}
        value={recipeData?.description}
        onChange={onChange}
      />
      <input
        placeholder={$t('recipes.shortDescription')}
        name={'shortDescription'}
        value={recipeData?.shortDescription}
        onChange={onChange}
      />
      <input
        type={'submit'}
        value={$t('recipes.addRecipe')}
        disabled={!isValid()}
      />
    </form>
  );
};

export default AddRecipe;
