/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page'
import register_page from '../support/pages/register_page';

const user_data = require('../fixtures/desafio.json')
//const screens = ['desktop', 'iphone-x', 'iphone-6']

//screens.forEach(element => {    

describe('Desafio - Cadastro de Usuário', ()=>{

    beforeEach('Acessando a página de cadastro', () => {
       // if(element != 'desktop'){
       //     cy.viewport(element)
       // }
       
        home_page.acessRegisterPage()
    })

    it('Validar campo com nome vazio', () => {
        register_page.saveRegister()
        register_page.checkMessage('O campo nome deve ser prenchido')
     })
   
    it('Validar campo com e-mail vazio', () => {
        register_page.fillName(user_data.user_name)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {
        register_page.fillName(user_data.user_name)
        register_page.fillEmail(user_data.user_invalid_email)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar senha vazia', () => {
        register_page.fillName(user_data.user_name)
        register_page.fillEmail(user_data.user_valid_email)
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar senha inválida', () => {
        register_page.fillName(user_data.user_name)
        register_page.fillEmail(user_data.user_valid_email)
        register_page.fillPassword(user_data.user_invalid_password)
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar cadastro finalizado com sucesso', () => {
        const name = faker.person.fullName()
        register_page.fillName(name)
        register_page.fillEmail(user_data.user_valid_email)
        register_page.fillPassword(user_data.user_valid_password)
        register_page.saveRegister()
        register_page.checkRegisterSuccess(name)
        
    })

     })

//});
