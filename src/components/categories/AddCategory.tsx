import React, { useState } from 'react';
import $t from '../../i18n';
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
    <form className={'content'}>
      <input
        placeholder={$t('categories.title')}
        name={'title'}
        value={categoryData?.title}
        onChange={onChange}
      />
      <input
        placeholder={$t('categories.description')}
        name={'description'}
        value={categoryData?.description}
        onChange={onChange}
      />
      <input
        type={'submit'}
        value={$t('categories.addCategory')}
        disabled={!isValid()}
        onClick={handleAddCategory}
      />
      {error}
    </form>
  );
};

export default AddCategory;
