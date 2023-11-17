/// <reference types="cypress" />

describe('The Leda home page', () => { 

  beforeEach(() => { 
    cy.visit(''); 
  });  

  it('should be visitable', () => {
  });
  it('should have an h1', () => { 
    cy.get('h1').should('contain', "LedAir");
  });
  it('should have a link to identificacion', () => { 
    cy.get('a').should('contain', 'Identificación');
  });
  it('should have a link to author page', () => { 
    cy.get('a.enlace-externo')
      .should('contain', "Alberto")
      .and('have.attr','href','https://www.albertobasalo.dev/');
  });
  it("should navigate to login page", () => {
    cy.get('header > a').click();
    cy.url().should('include', 'login');
  })
});