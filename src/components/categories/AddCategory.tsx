import React, { useState } from 'react';
import $t from '../../i18n';
import * as Styled from './AddCategorie.styled'
import { CategoryInput } from '../../ts/categoryTypes'
import { useAddCategory } from '../../hooks/categories/useAddCategory'

const AddCategory = () => {
  const [categoryData, setCategoryData] = useState<CategoryInput>({ description: '', title: '' })

  const clearInput = () => {
    setCategoryData({ description: '', title: '' })
  }

  const { mutate: addCategory, error } = useAddCategory(clearInput)

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setCategoryData({ ...categoryData, [name]: value })
  }

  const isValid = () => categoryData?.title && categoryData?.description

  const handleAddCategory = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    addCategory(categoryData)
  }

  return (
    <Styled.FormWrapper className={'content'}>
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
      <Styled.FormSubmit
        type={'submit'}
        value={$t('categories.publishCategory')}
        disabled={!isValid()}
        onClick={handleAddCategory}
      />
      {typeof error === 'string' && error}
    </Styled.FormWrapper>
  );
};

export default AddCategory;
