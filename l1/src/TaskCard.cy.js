import React from 'react'
import TaskCard from './TaskCard'

describe('<TaskCard />', () => {
  it('renders name', () => {
    cy.mount(<TaskCard assigneeName="Avishek"/>)
    cy.contains("Avishek")
  })
  it('renders due date and does not renders completed on date', () => {
    cy.mount(<TaskCard dueDate="22nd March" />)
    cy.contains("Due on: 22nd March", { matchCase: false })
    cy.contains("completed on: 22nd March", { matchCase: false }).should('not.exist')
  })
  it('renders completed on date and does not renders due date', () => {
    cy.mount(<TaskCard completedAtDate="22nd March" />)
    cy.contains("Completed on: 22nd March", { matchCase: false })
    cy.contains("Due on: 22nd March", { matchCase: false }).should('not.exist')
  })
})