import React, { useState } from 'react';
import $t from '../../i18n';
import { RecipeInput } from '../../ts/recipeTypes'
import * as Styled from './AddRecipe.styled'
import { useAddRecipe } from '../../hooks/recipes/useAddRecipe'
import { useFetchCategories } from '../../hooks/categories/useFetchCategories'
import ImageSelector from '../shared/ImageSelector'
import '../../components/recipes/TextEditor.styles.css'

const TEXT_EDITOR_EMPTY_VALUE_AFTER_CHANGES = '<p><br></p>'

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

  const onChangeDescription = (description: string) => {
    if (description === TEXT_EDITOR_EMPTY_VALUE_AFTER_CHANGES) return;
    setRecipeData({ ...recipeData, description })
  }

  const handleAddImages = (e: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const images = e.target.files;
    setRecipeData(prevRecipeData => ({ ...recipeData, images: [...prevRecipeData.images, ...images] }))
  }

  const handleRemoveImage = (index: number) => {
    if (recipeData.images.length < index + 1) return
    const updatedImages = [...recipeData.images].filter((el, i) => index !== i)
    setRecipeData({ ...recipeData, images: updatedImages })
  }

  const handleAddCoverImage = (e: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const image = e.target.files[0];
    setRecipeData({ ...recipeData, coverImage: image })
  }

  const handleRemoveCoverImage = () => {
    setRecipeData({ ...recipeData, coverImage: null })
  }

  const handleAddRecipe = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    addRecipe(recipeData)
  }

  const isValid = () => recipeData?.title && recipeData?.shortDescription && recipeData?.description && recipeData?.categories.length > 0

  return (
    <Styled.FormWrapper>
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
      <Styled.TextEditor
        theme='snow'
        value={recipeData?.description}
        onChange={onChangeDescription}
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
      <ImageSelector
        handleAddImage={e => handleAddCoverImage(e)}
        images={recipeData.coverImage ? [recipeData.coverImage] : []}
        handleRemoveImage={handleRemoveCoverImage}
      />
      <ImageSelector
        multiple={true}
        handleAddImage={e => handleAddImages(e)}
        handleRemoveImage={handleRemoveImage}
        images={recipeData.images}
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
