/// <reference types="Cypress" />

describe(' Se Connecter - "Site sauce demo" ',function()  {

    beforeEach(()=>{
      cy.visit('https://www.saucedemo.com/');
    })
    it('sans password username', function() {
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('not.be.hidden').and('have.text','Epic sadface: Username is required')
      })

      it.only('username non valide', function() {
        cy.timeout(10000)
        cy.get('[data-test="username"]').type('user',{force:true});
        cy.get('[data-test="password"]',{timeout:5000}).type('secret_sauce');
        cy.get('[data-test="login-button"]').click({force: true});
        cy.get('[data-test="error"]').should('be.visible').and('have.text','Epic sadface: Username and password do not match any user in this service')
        })

        it('se connecter', function() {
          cy.get('[data-test="username"]').type('standard_user');
          cy.get('[data-test="password"]').type('secret_sauce');
          cy.get('[data-test="login-button"]').click();
          cy.url().should('include','/inventory.html')
          cy.get('.title').should('have.text','Products').and('be.visible')
          cy.get('.inventory_item').should('have.length',6)
          })
  }) 