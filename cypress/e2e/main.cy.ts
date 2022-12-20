beforeEach(() => {
  cy.intercept("*//.*api.*/*", {
    fixture: "shows",
  });
});

it("Renders initial page", () => {
  cy.visit("/");

  cy.findByRole("heading", {
    level: 1,
    name: "Vice Media Group Portforlio",
  }).should("exist");
});
