/// <reference types="cypress" />

const users = require('../fixtures/data.json')

describe('Suite de test', ()=>{

        it('se connecter user:1',()=>{
            const user = users[0]
            cy.visit('/') 
            cy.get('[data-test="logo-img"]').should('be.visible')
            cy.get('.logo').find('[data-test="logo-img"]').should('be.visible')
            cy.get('.input-container').find('#username').type(user.username)
            cy.get('.inputs').eq(1).type(user.password)
            cy.get('[data-test="submit-login"]').click()
            })

            it('se connecter user:2',()=>{
                const user =users[1]
                cy.visit('/') 
                cy.get('[data-test="logo-img"]').should('be.visible')
                cy.get('.logo').find('[data-test="logo-img"]').should('be.visible')
                cy.get('.input-container').find('#username').type(user.username)
                cy.get('.inputs').eq(1).type(user.password)
                cy.get('[data-test="submit-login"]').click()
                })
    })