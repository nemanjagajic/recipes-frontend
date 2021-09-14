/// <reference types="cypress" />

describe('Categories page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should fetch and display all categories', () => {
    cy.intercept('*/categories', req => {delete req.headers['if-none-match']}).as('getCategories')
    cy.wait('@getCategories').its('response.body').then(categories => {
      for (const category of categories) {
        cy.contains(category.title)
      }
    })
  })

  it('should fetch and display all recipes in a category when the category item is clicked', () => {
    cy.intercept('*/categories', req => {delete req.headers['if-none-match']}).as('getCategories')
    cy.intercept('*/categories/recipes?categoryId=*', req => {delete req.headers['if-none-match']}).as('getRecipes')
    cy.wait('@getCategories').its('response.body').then(categories => {
      if (categories.length === 0) return
      cy.contains(categories[0].title).click()
    })

    cy.wait('@getRecipes').its('response.body').then(recipes => {
      for (const recipe of recipes) {
        cy.contains(recipe.title)
      }
    })
  })
})
