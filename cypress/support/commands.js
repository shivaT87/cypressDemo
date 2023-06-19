// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('Search_Guest_details', (Guestname, GuestFullName, GuestPhone, GuestBOD) => { 
        cy.xpath("//span[contains(text(),'Guests')]").click()
        cy.get('.justify-content-between > :nth-child(2) > .d-flex > :nth-child(1)').click()
        cy.get('#filter').type(Guestname)
        cy.wait(5000)
        cy.get("table[class='table']>tbody>tr:nth-of-type(n)").should('have.length',1)
        cy.get('.d-flex > .btn--secondary').click()
        cy.wait(5000)
        cy.get('div.d-flex h2').should('have.text',GuestFullName)
        cy.get('.profile__contact > .card__content > :nth-child(2) > .col-md-8 > span').should('have.text',GuestPhone)
        //cy.get('.profile__celebrate > .card__content > :nth-child(1) > .col-md-8 > span').should('have.text',GuestBOD)
    
    })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />

require('@cypress/xpath');