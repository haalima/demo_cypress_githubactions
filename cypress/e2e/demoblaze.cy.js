/// <reference types="cypress" />

const {fakerFR: faker} = require("@faker-js/faker")

const name = faker.internet.userName()
const mois = faker.date.month()
const card = faker.finance.creditCardNumber()

describe('Suite de test', ()=>{

    beforeEach(()=>{
      cy.visit('https://www.demoblaze.com/') 
    })
    it('Sign up',()=>{
      cy.get('[data-target="#signInModal"]').click()
      cy.get('.modal-content').should('be.visible')
      cy.wait(1000)
      cy.get('#sign-username').type('ATAATA')
      cy.get('.form-control').eq(4).type('1234')
      //cy.get('[onclick="register()"]').click()
      //cy.get('button[onclick="register()"]').click()
      //cy.get('.btn').eq(3).click()
      //cy.get('.modal-footer').eq(1).find('.btn').eq(1).click()
      //cy.get('.modal-footer').eq(1).find('.btn').last().click() 
      cy.get('.btn-primary').eq(1).click()
      cy.on('window:alert', (msg)=>{
        expect(msg).to.equal('Sign up successful.')
      })
      })

      it.only('Log In',()=>{
        cy.get('[data-target="#logInModal"]').click()
        cy.get('.modal-content').should('be.visible')
        cy.wait(1000)
        cy.get('#loginusername').type('ATAATA').should('have.value','ATAATA')
        cy.get('#loginpassword').type('1234').should('have.value','1234')
        //cy.get('.btn-primary').eq(2).click()
        //cy.get('.btn-primary').last().click()
        //cy.get('.btn').eq(5).click()
        //cy.get('.modal-footer').eq(2).find('.btn').last().click() 
        cy.get('.btn.btn-primary').last().click()
        cy.get('#nameofuser').should('have.text','Welcome ATAATA')
        cy.get('#tbodyid').should('not.be.hidden')
        cy.get('.col-lg-4.col-md-6.mb-4').should('have.length',9)
        cy.get('.card-title > a').first().click() //selectionner les elements a enfants card-title
        //cy.get('.btn.btn-success.btn-lg').click() 
        //get('[onclick="addToCart(1)"]').click()
        cy.get('a[onclick="addToCart(1)"]').click()
        //
        cy.on('window:alert', (msg)=>{
          expect(msg).to.equal('Product added.')
        })
        cy.get('#cartur').click()
        cy.get('#tbodyid').find('tr').should('have.length.gte',1)
        //cy.get('.success').should('have.length.gte',1)
        //cy.get('tr.success > :nth-child(2)').should('have.text','Samsung galaxy s6')
        //cy.get('tr.success > td:nth-child(2)').should('have.text','Samsung galaxy s6')
        cy.wait(1000)
        cy.get('[data-target="#orderModal"]').click()
        cy.get('#name').type(name)
        cy.get('#country').type('France')
        cy.get('#city').type('Paris')
        cy.get('#card').type(card)
        cy.get('#month').type(mois)
        cy.get('#year').type(2023)
        cy.contains('Purchase').click()
        cy.wait(1000)
        cy.get('.confirm').click()
        })

    })