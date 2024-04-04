describe('Interações', ()=>{
    it('Digitar em um campo', ()=>{
       cy.visit('/')
       .get('.header-logo')
       
       cy.get('.form-control')
          .type('rozinha.andrade@gmail.com')
       

    })

    it('Click', ()=>{
        cy.visit('/').get('.header-logo')
       
       //clique normal
       cy.get('.fa-user').click()

       cy.get('#user').type('rozinha.andrade@gmail.com')
       cy.get('#password').type('123456')
       cy.get('#btnLogin').click()

        //duplo clique
        //cy.get('.fa-user')
        //.dblclick()
        
        //clique com o botão direito
        //cy.get('.fa-user')
        //.rightclick()
 
     })

     it('Selecionar na lista', ()=>{
        cy.visit('/')
          .get('.header-logo')

       cy.get('.footer_one_widget')
         .contains('Checkout View Two')
         .click()

       cy.get('#country')
        .select('Colombia')  
     })

     it('Selecionar Checkbox', ()=>{
        cy.visit('/')
          .get('.header-logo')
        
       cy.get('.footer_one_widget').contains('Checkout View One')  
       .click()

       cy.get('#materialUnchecked')
       .check()
       .uncheck()
     })

     it.only('Selecionar Radio Button', ()=>{
        cy.visit('/')
          .get('.header-logo')

        cy.get('.footer_one_widget').contains('Checkout View One')  
         .click()
        
       cy.get('#html')
       .click()

     
  })
})