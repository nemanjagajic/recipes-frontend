import React, {useState} from 'react';
import $t from '../../i18n';
import {Recipe} from '../../ts/types'

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState<Recipe>({ description: '', shortDescription: '', title: '' })

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setRecipeData({ ...recipeData, [name]: value })
  }

  const isValid = () => recipeData?.title && recipeData?.shortDescription && recipeData?.description

  return (
    <form className={'content'}>
      <input
        placeholder={$t('recipe.title')}
        name={'title'}
        value={recipeData?.title}
        onChange={onChange}
      />
      <input
        placeholder={$t('recipe.description')}
        name={'description'}
        value={recipeData?.description}
        onChange={onChange}
      />
      <input
        placeholder={$t('recipe.shortDescription')}
        name={'shortDescription'}
        value={recipeData?.shortDescription}
        onChange={onChange}
      />
      <input
        type={'submit'}
        value={$t('recipe.addRecipe')}
        disabled={!isValid()}
      />
    </form>
  );
};

export default AddRecipe;
