/// <reference types="Cypress" />
import { homepage } from '../page_object/homepage'
import { cart, login } from '../page_object/login'

describe('login', () => {
    beforeEach('visit', () => {
        cy.visit('/')
        login.loginLink.click()
        cy.wait(1000)
    })

    it('login', () => {
        login.login()
        cy.wait(1000)
        homepage.credentialsLogin.should('be.visible')
            .and('have.text', '\n          Welcome testerbr@gmail.com\n        ')
        login.logoutBtn.should('be.visible')
            .and('have.text', '\n          Log out\n        ')
        if(login.logoutBtn.click()){
            homepage.credentialsLogin.should('not.be.visible')
        }
    })

    it.only('login via inter', () => {
        cy.intercept({
            method: 'POST',
             url: 'https://api.demoblaze.com/login'
        }).as('validLogin')

        login.login(
            Cypress.env('VALID_USER_EMAIL'),
            Cypress.env('VALID_USER_PASSWORD')
        )
        cy.wait('@validLogin').then(interception => {
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(200)
        })
        homepage.credentialsLogin.should('be.visible')
            .and('have.text', '\n          Welcome testerbr@gmail.com\n        ')
        login.logoutBtn.should('be.visible')
            .and('have.text', '\n          Log out\n        ')
        if(login.logoutBtn.click()){
            homepage.credentialsLogin.should('not.be.visible')
        }
    })
})