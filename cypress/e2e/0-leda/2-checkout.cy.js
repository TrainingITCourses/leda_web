/// <reference types="cypress" />

// The LedAir Checkout page
// Should allow to buy a flight and nights

describe('The LedAir Checkout page', () => {
  it('should allow to buy a flight and nights ', () => {
    cy.visit('./');
    cy.get(':nth-child(1) > .destino').click();
    cy.get('#pasajeros').type('5');
    cy.get('html').click();
    cy.get('#noches').type('3');
    cy.get('button').click();
    cy.get('#precioTotal').should('contain', '5900€');
  })
});
