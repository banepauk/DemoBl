/// <reference types="Cypress" />
import { homepage } from '../page_object/homepage'
import { cart, login } from '../page_object/login'

describe('login', () => {
    beforeEach('visit', () => {
        cy.visit('/')
        login.loginLink.click()
    })

    it('login')
})