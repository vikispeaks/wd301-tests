/// <reference types="cypress" />

const todoItems = [
  {
    title: "Sample item 1",
    description: "item 1 description",
    dueDate: "2023-01-09",
  },
  {
    title: "Sample item 2",
    description: "item 2 description",
    dueDate: "2023-01-09",
  },
  {
    title: "Sample item 3",
    description: "item 3 description",
    dueDate: "2023-01-09",
  },
];

const addEntries = () => {
  todoItems.forEach((item) => {
    cy.get("#todoDueDate").type(`${item.dueDate}`);
    cy.get("#todoTitle").type(`${item.title}`);
    cy.get("#todoDescription").type(`${item.description}`);
    cy.get("#addTaskButton").click();
  });
};

describe("Level 4 Milestone", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("STUDENT_SUBMISSION_URL"));
  });

  it("The submit button should have `addTaskButton` as its `id`", () => {
    cy.get("#addTaskButton").should("exist");
  });

  it("Adding some sample items should result in an equal number of .TaskItem elements", () => {
    addEntries();
    cy.get(".TaskItem").should("have.length", todoItems.length);
  });

  it("It should not be possible to add an item without a title or a due date", () => {
    const todoItems = [
      {
        title: "Sample item 1",
        description: "item 1 description",
        dueDate: "2023-01-09",
      },
    ];

    todoItems.forEach((item) => {
      cy.get("#todoTitle").type(`${item.title}`);
      cy.get("#addTaskButton").click();
    });

    cy.get("#todoTitle").clear();

    todoItems.forEach((item) => {
      cy.get("#todoDueDate").type(`${item.dueDate}`);
      cy.get("#todoDescription").type(`${item.description}`);
      cy.get("#addTaskButton").click();
    });

    cy.get(".TaskItem").should("have.length", 0);
  });

  it("should persist task items", () => {
    addEntries();
    cy.reload();
    cy.get(".TaskItem").should("have.length", todoItems.length);
  });

  it("It should be possible to delete tasks", () => {
    addEntries();

    cy.get(".deleteTaskButton").last().click();
    cy.get(".deleteTaskButton").last().click();

    cy.get(".TaskItem").should("have.length", todoItems.length - 2);
  });
});
