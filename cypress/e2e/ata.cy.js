/// <reference types="cypress" />

describe('Suite de test', ()=>{

    it('Scenario 1: se connecter',()=>{
      cy.visit('/') 
      cy.get('.inputs').first().clear().type('login_user')
      cy.get('.inputs').last().type('cypress')
      })

      it('Scenario 2: se connecter',()=>{
        cy.visit('/') 
        cy.get('.inputs').eq(0).clear().type('login_user')
        cy.get('.inputs').eq(1).type('cypress')
        })

        it.only('Scenario 3: se connecter',()=>{
            cy.visit('/') 
            cy.get('[data-test="logo-img"]').should('be.visible')
            cy.get('.logo').find('[data-test="logo-img"]').should('be.visible')
            cy.get('.input-container').find('#username').type('login_user')
            cy.get('.inputs').eq(1).type('cypress')
            })
    })