/// <reference types="cypress" />
context('GOV.BR Pesquisa', () => {
  beforeEach(() => {
    cy.visit('https://www.gov.br/pt-br')
    cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
  });
it('Pesquisar sobre INSS', function() {
  cy.get('#searchtext-input').click();
  cy.get('#searchtext-input').type('INSS{enter}');
  
});

it('Pesquisar por Instagram', function() {
  cy.get('button.reject-all').click();
  cy.get('#portal-footer a[href="https://www.instagram.com/governodobrasil"]').click();
  
});
})
