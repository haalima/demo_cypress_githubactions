
/// <reference types="cypress" />

describe('Suite de test', ()=>{
    
    beforeEach(()=>{
      cy.visit('https://demo.applitools.com/index.html')
    })

    afterEach(()=>{
      cy.url().should('eq','https://demo.applitools.com/app.html')
    })

    it('Scenario 1',()=>{
      
      cy.get('.auth-header').should('be.visible').and('contain.text','Login Form')
      cy.get('[placeholder="Enter your username"]').type('formation').should('have.value','formation')
      cy.get('[placeholder="Enter your password"]').type('password')
      cy.get('.form-check-input').check()
      cy.get('#log-in').click()
      //cy.url().should('include','/app.html')
      
      })

      it('Scenario 2',()=>{
        
      cy.get('.auth-header').should('be.visible').and('contain.text','Login Form')
      cy.get('[placeholder="Enter your username"]').type('formation').should('have.value','formation')
      cy.get('[placeholder="Enter your password"]').type('password')
      cy.get('.form-check-input').check()
      cy.get('#log-in').click()
      //cy.url().should('include','/app.html')
      
      })
      it('Scenario 3',()=>{
        cy.get('[placeholder="Enter your username"]').type('formation')
        cy.get('[placeholder="Enter your password"]').type('password')
        cy.get('.form-check-input').check()
        cy.get('#log-in').click()
        })
        it('Scenario 4',()=>{
          cy.get('[placeholder="Enter your username"]').type('formation')
          cy.get('[placeholder="Enter your password"]').type('password')
          cy.get('.form-check-input').check()
          cy.get('#log-in').click()
          })
})




