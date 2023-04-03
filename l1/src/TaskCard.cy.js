import React from "react";
import TaskCard from "./TaskCard";

describe("The <TaskCard> component", () => {
  it("shows the name passed with `assigneeName` prop", () => {
    cy.mount(<TaskCard assigneeName="Avishek" />);
    cy.contains("Avishek");
  });

  it('shows only "Due on:" date when given the `dueDate` prop', () => {
    cy.mount(<TaskCard dueDate="22nd March" />);
    cy.contains("Due on: 22nd March", { matchCase: false });
    cy.contains("completed on: 22nd March", { matchCase: false }).should(
      "not.exist"
    );
  });

  it('shows only "Completed on:" date when given the `completedAtDate` prop', () => {
    cy.mount(<TaskCard completedAtDate="22nd March" />);
    cy.contains("Completed on: 22nd March", { matchCase: false });
    cy.contains("Due on: 22nd March", { matchCase: false }).should("not.exist");
  });
});
