import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { navigateAndReload } from '../../utils/helpers'
import $t from '../../i18n'
import * as Styled from './Dashboard.styled'
import AddRecipe from '../../components/recipes/AddRecipe'
import AddCategory from '../../components/categories/AddCategory'
import Navbar from '../../components/shared/Navbar'
import Switcher from '../../components/shared/Switcher'

enum ADD_FORM_TYPE {
  ADD_RECIPE,
  ADD_CATEGORY
}

const Dashboard = () => {
  const history = useHistory()

  const [selectedForm, setSelectedForm] = useState<ADD_FORM_TYPE>(ADD_FORM_TYPE.ADD_RECIPE)

  const logOut = () => {
    localStorage.removeItem('token')
    navigateAndReload(history, '/auth')
  }

  return (
    <Styled.Wrapper>
      <Navbar
        itemsFromLeft={[{ title: $t('dashboard.mainPage'), onClick: () => history.push('/')}]}
        itemsFromRight={[{ title: $t('auth.buttons.logOut'), onClick: logOut }]}
      />
      <Switcher
        switcherOptions={[
          {
            title: 'Add Recipe',
            onClick: () => setSelectedForm(ADD_FORM_TYPE.ADD_RECIPE),
            isSelected: selectedForm ===  ADD_FORM_TYPE.ADD_RECIPE
          },
          {
            title: 'Add Category',
            onClick: () => setSelectedForm(ADD_FORM_TYPE.ADD_CATEGORY),
            isSelected: selectedForm ===  ADD_FORM_TYPE.ADD_CATEGORY
          }
        ]}
        selectedOption={selectedForm}
      />
      {selectedForm === ADD_FORM_TYPE.ADD_RECIPE ? (
        <AddRecipe />
      ) : (
        <AddCategory />
      )}
    </Styled.Wrapper>
  );
};

export default Dashboard;
