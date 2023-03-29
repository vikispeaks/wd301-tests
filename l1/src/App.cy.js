import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
  })
  it('renders both task lists', () => {
    cy.mount(<App />)
    cy.contains("pending", { matchCase: false })
    cy.contains("done", { matchCase: false })
  })
})