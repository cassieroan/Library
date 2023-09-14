import React from 'react'
import NewUser from './NewUser'
import { BrowserRouter } from "react-router-dom"

// TESTS IF IT RENDERS IN GENERAL
describe('<NewUser />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <NewUser />
      </BrowserRouter>
    )
  })
})

// TESTS IF USERNAME FORM INPUT AUTOFOCUSES
it('should autofocus on the username input', () => {
  // see: https://on.cypress.io/mounting-react
  cy.mount(
    <BrowserRouter>
      <NewUser />
    </BrowserRouter>
  )

  cy.focused().should('have.id', 'username');
})

// TESTS TO SEE IF ADD NEW USER IS SPELLED CORRECTLY
it('checks there is an h1 that contains Add new user', () => {
  // see: https://on.cypress.io/mounting-react
  cy.mount(
    <BrowserRouter>
      <NewUser />
    </BrowserRouter>
  )

  cy.get('h1').contains('Add new user');
})

// TESTS TO SEE IF ADD NEW USER IS SPELLED CORRECTLY
it('username input should accept typing', () => {
  // see: https://on.cypress.io/mounting-react
  cy.mount(
    <BrowserRouter>
      <NewUser />
    </BrowserRouter>
  )

  cy.get('#username').type('newguy').should('have.value', 'newguy');
})