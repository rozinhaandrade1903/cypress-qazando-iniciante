/// <reference types="cypress" />

export default {
    acessRegisterPage () {
        cy.visit('/')
        .get('#top_header')
        .get('.fa-lock')
        .click()
    }

}