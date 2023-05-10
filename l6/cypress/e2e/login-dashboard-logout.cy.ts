let studentSubmissionUrl = Cypress.env("STUDENT_SUBMISSION_URL") || "http://localhost:3000";
if (studentSubmissionUrl.endsWith("/")) {
  studentSubmissionUrl = studentSubmissionUrl.slice(0, -1);
}

describe("Preparing for Level 6 milestone testing, first we will signup", () => {
  it("should visit signup path and create an account", () => {
    cy.visit(studentSubmissionUrl + "/signup");
    cy.get("#organisationName").clear();
    cy.get("#organisationName").type("ACME Corp");
    cy.get("#userName").clear();
    cy.get("#userName").type("Alice");
    cy.get("#userEmail").clear();
    cy.get("#userEmail").type("alice@acme.com");
    cy.get("#userPassword").clear();
    cy.get("#userPassword").type("12345678");
    cy.get("button[type='submit']").click();
  });
})
describe("Level 6 milestone should validate signin, dashboard, signout", () => {
  beforeEach(() => {
    cy.visit(studentSubmissionUrl + "/signin");
    cy.get("#email").clear();
    cy.get("#email").type("alice@acme.com");
    cy.get("#password").clear();
    cy.get("#password").type("12345678");
    cy.get("button[type='submit']").click();
  });

  it("and redirect to Dashboard when authenticated", () => {
    cy.location("pathname").should("equal", "/dashboard");
  });

  it('and it shows user name and email in dashboard', () => {
    cy.contains("alice@acme.com", { matchCase: false })
    cy.contains("Alice", { matchCase: false })
  })

  it("and redirect to Signin page when clicked on Signout", () => {
    cy.get("#logout-link").should('exist');
    cy.get("#logout-link").click();
    cy.location("pathname").should("equal", "/signin");
  });
});

describe("Session check", () => {
  it("and if someone wants to access the dashboard now, it should redirect the user to signin page", () => {
    cy.visit(studentSubmissionUrl + "/dashboard");
    cy.location("pathname").should("equal", "/signin");
  });
});