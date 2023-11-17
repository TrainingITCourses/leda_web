/// <reference types="cypress" />

/**
 * The LedAir Login page
 *  should fill and reset the form
 *  should fill and submit it
 */

describe("The LedAir Login page", () => {
  beforeEach(() => {
    // Arrange
    cy.visit('./login.html')
  })
  it("should fill and reset the form", () => {
    // Act
    cy.get('input[name="nombre"]').type("Elon Musk");
    cy.get('input[name="direccion-email"]').type("elon@x.com");
    cy.get('input[name="contraseña"]').type("xxxx");
    cy.get('button[type="reset"]').click();
    // Assert
    cy.get('input[name="nombre"]').should('value', '');
    cy.get('input[name="direccion-email"]').should('value', '');
    cy.get('input[name="contraseña"]').should('value','');
  })
  it("should fill and submit it", () => {
    // Act
    cy.get('input[name="nombre"]').type("Elon Musk");
    cy.get('input[name="direccion-email"]').type("elon@x.com");
    cy.get('input[name="contraseña"]').type("xxxx");
    cy.get('input[type="submit"]').click();
    // Assert
    cy.url().should('include', 'index');
  })
})