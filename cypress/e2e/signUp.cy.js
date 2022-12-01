/// <reference types="Cypress" />
import { homepage } from '../page_object/homepage'
import { signUp } from '../page_object/signUp'

describe ('sign up', () => {
    beforeEach('visit', () => {
        cy.visit('/')
        signUp.signUpLink.click()
    })

    it('sign up with valid credentials', () => {
        signUp.signUpWithValidCredentials()
        
    })
})