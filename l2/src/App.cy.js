import React from "react";
import App from "./App";

describe("The <App> component", () => {
  it("renders some text when mounted", () => {
    cy.mount(<App />);
  });
  it('renders both the "pending" and "done" task lists', () => {
    cy.mount(<App />);
    cy.contains("pending", { matchCase: false });
    cy.contains("done", { matchCase: false });
  });
});
