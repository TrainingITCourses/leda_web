// The LedAir Login page
// Should fill and reset the form
// Should fill the form and submit it

describe("The LedAir Login page", () => {
  beforeEach(() => {
    cy.visit("./login.html");
  });

  it("Should fill and reset the form", () => {
    cy.get('input[name="nombre"]').clear().type("Elon Musk");
    cy.get('input[name="direccion-email"]').clear().type("elon@x.com");
    cy.get('input[name="contraseña"]').clear().type("123456");
    cy.get('button[type="reset"]').click();
  });
  it("Should fill the form and submit it", () => {
    cy.get("#nombre").type("Elon Musk");
    cy.get("#email").type("elon@x");
    cy.get("#contraseña").type("123456");
    cy.get('input[type="submit"]').click();
  }
  );
});
