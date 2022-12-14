/// <reference types="Cypress" />
import { homepage } from '../page_object/homepage'
import { cart } from '../page_object/cart'

describe('cart', () => {
    beforeEach('visit', () => {
        cy.visit('/')
    })

    it('navigate to cart', () => {
        homepage.firstShopItem.click({force:true})
        homepage.addToCartButton.click()
        cy.wait(1000)
        homepage.cartLink.click()
        cy.wait(1000)
        homepage.placeOrderButton.click()
        homepage.modal.should('be.visible')
        homepage.modalTitle.should('be.visible')
            .and('have.text', 'New messageSign upPlace orderLog inAbout us')
        cy.wait(2000)
        cart.purchase()
    })

    it.only('add product to cart', () => {
        cy.intercept({
            method: 'POST',
             url: 'https://api.demoblaze.com/addtocart'
        }).as('addProduct')

        cy.visit('/')
        homepage.firstShopItem.click({force:true})
        homepage.addToCartButton.click()
        cy.wait('@addProduct').then(interception=>{
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(200)
        })
    })
})