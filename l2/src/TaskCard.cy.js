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

  it("shows correct information when given the `title`, `completedAtDate`, and `assigneeName` props", () => {
    const props = {
      title: "Finish React course",
      completedAtDate: "12th April",
      assigneeName: "Vignesh Rajendran",
    };

    cy.mount(<TaskCard {...props} />);
    cy.contains(props.title);
    cy.contains(`Completed on: ${props.completedAtDate}`);
    cy.contains(`Assignee: ${props.assigneeName}`);
  });

  it("shows correct information when given the `title`, `dueDate`, and `assigneeName` props", () => {
    const props = {
      title: "Finish React course",
      dueDate: "20th April",
      assigneeName: "Vignesh Rajendran",
    };

    cy.mount(<TaskCard {...props} />);
    cy.contains(props.title);
    cy.contains(`Due on: ${props.dueDate}`);
    cy.contains(`Assignee: ${props.assigneeName}`);
  });
});
