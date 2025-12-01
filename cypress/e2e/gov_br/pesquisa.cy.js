///// <reference types="cypress" />
//
//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
//
//Given('que o usuário está na página do gov.br', () => { 
//  cy.visit('https://www.gov.br/pt-br');
//});
//
//When('o usuário digita INSS na barra de busca', () => {
//  // Garante que o input existe
//  cy.get('input.aa-Input#searchtext-input')
//    .should('be.visible')
//    .type('INSS');
//});
//
//When('o usuário confirma a busca', () => {
//  cy.get('input.aa-Input#searchtext-input')
//    .type('{enter}');
//});
//
//Then('o usuário deve ver resultados relacionados ao INSS', () => {
//  cy.url().should('include', 'search');
//  cy.contains(/inss/i).should('be.visible');
//});
//
describe('Pesquisa no gov.br', () => {
  beforeEach(() => {
    cy.visit('https://www.gov.br/pt-br');
    cy.wait(2000); // Espera 2 segundos para garantir que a página carregou
  });

  it('deve buscar por INSS e exibir resultados', () => {
    cy.get('overlay-wrapper.svelte-7keokj')
      .click()
    cy.get('input.aa-Input#searchtext-input')
      .should('be.visible')
      .type('INSS');

    cy.get('input.aa-Input#searchtext-input')
      .type('{enter}');

    cy.url().should('include', 'search');
    cy.contains(/inss/i).should('be.visible');
  });
});

it('pesquisa1', function() {
  cy.visit('https://www.gov.br/pt-br')
  cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
  cy.get('#searchtext-input').click();
  cy.get('#searchtext-input').type('INSS{enter}');
  
  
});