/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário está na página do gov.br', () => { 
    cy.visit('https://www.gov.br/pt-br')
    cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click()
    cy.wait(5000);
});

When('o usuário pesquisa o termo {string}', (searchTerm) => {
    cy.get('button.reject-all').click();
    cy.get('#searchtext-input').click();
    cy.get('#searchtext-input').type(`${searchTerm}{enter}`);
});

Then('os resultados da pesquisa relacionados a {string} devem ser exibidos', (searchTerm) => {
    cy.contains(searchTerm, { timeout: 10000 }).should('be.visible');
    cy.screenshot();
});
