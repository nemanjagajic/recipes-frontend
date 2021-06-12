import React, { useState } from 'react';
import $t from '../../i18n';
import { CategoryInput } from '../../ts/categoryTypes'

const AddCategory = () => {
  const [categoryData, setCategoryData] = useState<CategoryInput>({ description: '', title: '' })

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setCategoryData({ ...categoryData, [name]: value })
  }

  const isValid = () => categoryData?.title && categoryData?.description

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
      />
    </form>
  );
};

export default AddCategory;
