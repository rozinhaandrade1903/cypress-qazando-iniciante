/// <reference types="cypress" />

// Elementos
const elements = { 
    buttons: {
        register: '#btnRegister'
    },
    
    fields: {
        name: '#user',
        email: '#email',
        password:'#password',
    },
    
    messages: {
        error: '.errorLabel',
        successTitle: '#swal2-title',
        successSubTitle: '#swal2-html-container',
    }
}
//Ações, métodos, funções

Cypress.Commands.add('saveRegister', () => {
    cy.get(elements.buttons.register)
        .click()
})

Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.fields.name)
        .type(name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email)
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password)
        .type(password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get(elements.messages.error)
        .should('have.text', message)
})

Cypress.Commands.add('checkRegisterSuccess', (name) => {
    cy.get(elements.messages.successTitle)
        .should('be.visible')

        cy.get(elements.messages.successSubTitle, {timeout: 3000})
        .should('have.text', `Bem-vindo ${name}`)
})