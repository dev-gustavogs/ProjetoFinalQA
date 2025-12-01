/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário está na página do gov.br', () => { 
  cy.visit('https://www.gov.br/pt-br');
  wait(2000); // Espera 1 segundo para garantir que a página carregou
});

When('o usuário digita INSS na barra de busca', () => {
  // Garante que o input existe
  cy.get('input.aa-Input#searchtext-input')
    .click()
    .should('be.visible')
    .type('INSS');
});

When('o usuário confirma a busca', () => {
  cy.get('input.aa-Input#searchtext-input')
    .type('{enter}');
});

Then('o usuário deve ver resultados relacionados ao INSS', () => {
  cy.url().should('include', 'search');
  cy.contains(/inss/i).should('be.visible');
});
