beforeEach(() => {
  cy.intercept("*/api/shows*", {
    fixture: "shows",
  });
});

it("Renders initial page", () => {
  cy.visit("/");

  cy.findByRole("heading", {
    level: 1,
    name: "Vice Media Group Portforlio",
  }).should("exist");

  cy.findAllByRole("img")
    .eq(0)
    .should("have.attr", "src")
    .and("match", /.*images.*shows.*gaycation_thumb\.jpg.*/);
});
