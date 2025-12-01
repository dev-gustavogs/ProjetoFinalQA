/// <reference types="cypress" />
context('GOV.BR Login', () => {
  beforeEach(() => {
    cy.visit('https://www.gov.br/pt-br')
  });

  it('enter login', function() {
  cy.get('#barra-govbr').shadow().find('span.login-text').click();
});
 
}); 