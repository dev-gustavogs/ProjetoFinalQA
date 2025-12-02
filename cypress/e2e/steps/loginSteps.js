/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário está na página do gov.br', () => { 
  cy.visit('https://www.gov.br/pt-br')
    cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click()
    cy.wait(3000);
});

When('o usuário clica no botão "Entrar com gov.br"', () => {
  cy.get('#barra-govbr').shadow().find('span.login-text').click();
});

Then('o usuário deve ver a página de login do gov.br', () => {
  cy.url().should('include', 'https://sso.acesso.gov.br/login');
});

