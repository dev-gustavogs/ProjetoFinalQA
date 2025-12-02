/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário está na página do gov.br', () => { 
  cy.visit('https://www.gov.br/pt-br')
    cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click()
    cy.wait(3000);
});

When('o usuário clica no ícone de redes sociais {string}', (socialMedia) => {
  cy.get('button.reject-all').click();
  const socialMediaLinks = {  
    "Instagram": 'https://www.instagram.com/governodobrasil',
    "Facebook": 'https://www.facebook.com/governodobrasil',
    "Youtube": 'https://www.youtube.com/governodobrasil',
    "Linkedin": 'https://linkedin.com/company/governo-do-brasil',
    "Whatsapp": 'https://www.whatsapp.com/channel/0029Va2zbqm7dmeR3lddrp38',
    "Tiktok": 'https://www.tiktok.com/@governodobr',
    "Kwai": 'https://www.kwai.com/@governodobr'
  };  
  const link = socialMediaLinks[socialMedia];

  cy.get(`#portal-footer a[href="${link}"]`).should('have.attr', 'href', link);
});
Then ('a página da rede social correspondente deve ser aberta {string}', (socialMedia) => {  
  const socialMediaLinks = {  
    "Instagram": 'https://www.instagram.com/governodobrasil',
    "Facebook": 'https://www.facebook.com/governodobrasil',
    "Youtube": 'https://www.youtube.com/governodobrasil',
    "Linkedin": 'https://linkedin.com/company/governo-do-brasil',
    "Whatsapp": 'https://www.whatsapp.com/channel/0029Va2zbqm7dmeR3lddrp38',
    "Tiktok": 'https://www.tiktok.com/@governodobr',
    "Kwai": 'https://www.kwai.com/@governodobr'
  };  
  const link = socialMediaLinks[socialMedia];  
    cy.log(`Verified link for ${socialMedia}: ${link}`);
});

