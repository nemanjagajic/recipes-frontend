import React, { useState } from 'react';
import $t from '../../i18n';
import { RecipeInput } from '../../ts/recipeTypes'
import * as Styled from './AddRecipe.styled'
import { useAddRecipe } from '../../hooks/recipes/useAddRecipe'
import { useFetchCategories } from '../../hooks/categories/useFetchCategories'

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState<RecipeInput>({ description: '', shortDescription: '', title: '', categories: [], coverImage: null, images: [] })

  const clearInput = () => {
    setRecipeData({ description: '', shortDescription: '', title: '', categories: [], coverImage: null, images: [] })
    const element = document.getElementById('category') as HTMLSelectElement
    if (element) {
      element.value = 'default'
    }
  }

  const { mutate: addRecipe, error } = useAddRecipe(clearInput)

  const { data: categories } = useFetchCategories()

  const onChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any) => {
    const { name, value } = e.currentTarget
    setRecipeData({ ...recipeData, [name]: name === 'categories' ? [value] : value })
  }

  const handleAddImage = (e: React.FormEvent<HTMLInputElement>, isCoverImage = false) => {
    // @ts-ignore
    const image = e.target.files[0];
    if (isCoverImage) {
      setRecipeData({ ...recipeData, coverImage: image })
      return
    }
    setRecipeData(prevRecipeData => ({ ...recipeData, images: [...prevRecipeData.images, image] }))
  };

  const handleAddRecipe = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    addRecipe(recipeData)
  }

  const isValid = () => recipeData?.title && recipeData?.shortDescription && recipeData?.description && recipeData?.categories.length > 0

  return (
    <Styled.FormWrapper className={'content'}>
      <Styled.FormInput
        placeholder={$t('recipes.title')}
        name={'title'}
        value={recipeData?.title}
        onChange={onChange}
      />
      <Styled.FormInput
        placeholder={$t('recipes.shortDescription')}
        name={'shortDescription'}
        value={recipeData?.shortDescription}
        onChange={onChange}
      />
      <Styled.FormTextarea
        placeholder={$t('recipes.description')}
        name={'description'}
        value={recipeData?.description}
        onChange={onChange}
      />
      <Styled.FormSelect
        id={'category'}
        name={'categories'}
        onChange={onChange}
        defaultValue={'default'}
      >
        <option disabled value={'default'}>{$t('recipes.selectOption')}</option>
        {categories?.map(category => {
          return <option key={category._id} value={category._id}>{category.title}</option>
        })}
      </Styled.FormSelect>
      <input
        type="file"
        name="coverImage"
        accept=".png, .jpg"
        onChange={e => handleAddImage(e, true)}
      />
      <input
        type="file"
        name="images"
        accept=".png, .jpg"
        multiple
        onChange={handleAddImage}
      />
      <Styled.FormSubmit
        type={'submit'}
        value={$t('recipes.publishRecipe')}
        disabled={!isValid()}
        onClick={handleAddRecipe}
      />
      {typeof error === 'string' && error}
    </Styled.FormWrapper>
  );
};

export default AddRecipe;
