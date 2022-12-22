/// <reference types="cypress" />

describe('test home page', () => {
  it('visit', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('test address input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('type in address input', () => {
    cy.get('#Address').type('3715 T St NW');
  });
});

describe('test city input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('type in city input', () => {
    cy.get('#City').type('Washington');
  });
});

describe('test my state input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('type in state input', () => {
    cy.get('#State').type('DC');
  });
});

describe('test button click', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should button click', () => {
    cy.get('#Address').type('3715 T St NW');
    cy.get('#City').type('Washington');
    cy.get('#State').type('DC');
    cy.get('Button').click();
  });
});

describe('test weather result', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#Address').type('3715 T St NW');
    cy.get('#City').type('Washington');
    cy.get('#State').type('DC');
    cy.get('Button').click();
  });

  it('should contain weather result', () => {
    cy.get('#weather').should('contain', 'Weather');
  });

  it('should card 1 exist', () => {
    cy.get('#card-2').should('be.visible');
  });
  it('should card 2 exist', () => {
    cy.get('#card-4').should('be.visible');
  });
  it('should card 3 exist', () => {
    cy.get('#card-6').should('be.visible');
  });
  it('should card 4 exist', () => {
    cy.get('#card-8').should('be.visible');
  });
  it('should card 5 exist', () => {
    cy.get('#card-10').should('be.visible');
  });
  it('should card 6 exist', () => {
    cy.get('#card-12').should('be.visible');
  });
  it('should card 7 exist', () => {
    cy.get('#card-14').should('be.visible');
  });
});
