import React, { useState } from 'react'
import $t from '../../i18n';
import * as Styled from './AddCategory.styled'
import { CategoryInput } from '../../ts/categoryTypes'
import { useAddCategory } from '../../hooks/categories/useAddCategory'
import ImageSelector from '../shared/ImageSelector'

const AddCategory = () => {
  const [categoryData, setCategoryData] = useState<CategoryInput>({ description: '', title: '', image: null })

  const clearInput = () => {
    setCategoryData({ description: '', title: '', image: null })
  }

  const { mutate: addCategory, error, isLoading } = useAddCategory(clearInput)

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setCategoryData({ ...categoryData, [name]: value })
  }

  const isValid = () => categoryData?.title && categoryData?.description

  const handleAddImage = (e: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const image = e.target.files[0];
    setCategoryData({ ...categoryData, image })
  }

  const handleRemoveImage = () => {
    setCategoryData({ ...categoryData, image: null })
  }

  const handleAddCategory = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    addCategory(categoryData)
  }

  return (
    <Styled.FormWrapper>
      <Styled.FormInput
        placeholder={$t('categories.title')}
        name={'title'}
        value={categoryData?.title}
        onChange={onChange}
      />
      <Styled.FormInput
        placeholder={$t('categories.description')}
        name={'description'}
        value={categoryData?.description}
        onChange={onChange}
      />
      <ImageSelector
        handleAddImage={e => handleAddImage(e)}
        images={categoryData.image ? [categoryData.image] : []}
        handleRemoveImage={handleRemoveImage}
      />
      <Styled.FormSubmit
        type={'submit'}
        value={isLoading ? $t('categories.addingCategory') : $t('categories.publishCategory')}
        disabled={!isValid() || isLoading}
        onClick={handleAddCategory}
      />
      {typeof error === 'string' && error}
    </Styled.FormWrapper>
  );
};

export default AddCategory;
