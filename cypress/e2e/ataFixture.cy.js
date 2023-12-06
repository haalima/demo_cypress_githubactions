/// <reference types="cypress" />

describe('Suite de test', ()=>{

        it('se connecter ',()=>{
            cy.fixture("data").as('users')

            cy.get('@users').then((users)=>{
                users.forEach(user =>{
                    cy.visit('/') 
                    cy.get('[data-test="logo-img"]').should('be.visible')
                    cy.get('.input-container').find('#username').type(user.username)
                    cy.get('.inputs').eq(1).type(user.password)
                    cy.get('[data-test="submit-login"]').click()
                })
            })           
            })
    })