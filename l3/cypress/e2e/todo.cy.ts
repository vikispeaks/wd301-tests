/// <reference types="cypress" />
describe('', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("STUDENT_SUBMISSION_URL"))
  })
  it('Adding some sample items should result in an equal number of .TaskItem elements', () => {
    const todoItems = [
      {title: "Sample item 1", description: "item 1 description", dueDate: "2023-01-09"},
      {title: "Sample item 2", description: "item 2 description", dueDate: "2023-01-09"},
      {title: "Sample item 3", description: "item 3 description", dueDate: "2023-01-09"},
    ]

    todoItems.forEach(item => {
      cy.get('#todoDueDate').type(`${item.dueDate}`)
      cy.get('#todoTitle').type(`${item.title}`)
      cy.get('#todoDescription').type(`${item.description}{enter}`)
    })

    cy.get('.TaskItem')
      .should('have.length', todoItems.length)
  })
  it('It should not be possible to add an item without a title or a due date', () => {
    const todoItems = [
      {title: "Sample item 1", description: "item 1 description", dueDate: "2023-01-09"},
    ]

    todoItems.forEach(item => {
      cy.get('#todoTitle').type(`${item.title}{enter}`)
    })

    cy.get('#todoTitle').clear()

    todoItems.forEach(item => {
      cy.get('#todoDueDate').type(`${item.dueDate}`)
      cy.get('#todoDescription').type(`${item.description}{enter}`)
    })

    cy.get('.TaskItem')
      .should('have.length', 0)
  })
})
