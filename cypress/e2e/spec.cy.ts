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
    cy.get('#card-1').should('be.visible');
  });
  it('should card 2 exist', () => {
    cy.get('#card-3').should('be.visible');
  });
  it('should card 3 exist', () => {
    cy.get('#card-5').should('be.visible');
  });
  it('should card 4 exist', () => {
    cy.get('#card-7').should('be.visible');
  });
  it('should card 5 exist', () => {
    cy.get('#card-9').should('be.visible');
  });
  it('should card 6 exist', () => {
    cy.get('#card-11').should('be.visible');
  });
  it('should card 7 exist', () => {
    cy.get('#card-13').should('be.visible');
  });
});
