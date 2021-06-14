import React, { useState } from 'react';
import $t from '../../i18n';
import { RecipeInput } from '../../ts/recipeTypes'
import { useAddRecipe } from '../../hooks/recipes/useAddRecipe'
import { useFetchCategories } from '../../hooks/categories/useFetchCategories'

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState<RecipeInput>({ description: '', shortDescription: '', title: '', categories: [], images: [] })

  const clearInput = () => {
    setRecipeData({ description: '', shortDescription: '', title: '', categories: [], images: [] })
    const element = document.getElementById('category') as HTMLSelectElement
    if (element) {
      element.value = 'default'
    }
  }

  const { mutate: addRecipe, error } = useAddRecipe(clearInput)

  const { data: categories } = useFetchCategories()

  const onChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    setRecipeData({ ...recipeData, [name]: name === 'categories' ? [value] : value })
  }

  const fileSelectHandler = (e: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const image = e.target.files[0];
    setRecipeData(prevRecipeData => ({ ...recipeData, images: [...prevRecipeData.images, image] }))
  };

  const handleAddRecipe = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    addRecipe(recipeData)
  }

  const isValid = () => recipeData?.title && recipeData?.shortDescription && recipeData?.description && recipeData?.categories.length > 0

  return (
    <form className={'content'}>
      <input
        placeholder={$t('recipes.title')}
        name={'title'}
        value={recipeData?.title}
        onChange={onChange}
      />
      <input
        placeholder={$t('recipes.shortDescription')}
        name={'shortDescription'}
        value={recipeData?.shortDescription}
        onChange={onChange}
      />
      <input
        placeholder={$t('recipes.description')}
        name={'description'}
        value={recipeData?.description}
        onChange={onChange}
      />
      <select
        id={'category'}
        name={'categories'}
        onChange={onChange}
        defaultValue={'default'}
      >
        <option disabled value={'default'}>{$t('recipes.selectOption')}</option>
        {categories?.map(category => {
          return <option key={category._id} value={category._id}>{category.title}</option>
        })}
      </select>
      <input
        type="file"
        name="images"
        accept=".png, .jpg"
        multiple
        onChange={fileSelectHandler}
      />
      <input
        type={'submit'}
        value={$t('recipes.addRecipe')}
        disabled={!isValid()}
        onClick={handleAddRecipe}
      />
      {typeof error === 'string' && error}
    </form>
  );
};

export default AddRecipe;
