/// <reference types="Cypress" />
import { homepage } from '../page_object/homepage'

describe('homepage', () => {
  beforeEach('visit', () => {
    cy.visit('/')
  })

  it('navigate to home page', () => {
    homepage.home.click()
    cy.url().should('include', '/index')
    homepage.productStoreLogo.should('be.visible')
      .and('have.text', '\n      PRODUCT STORE')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
    homepage.shopItems.should('be.visible')
  })

  it('navigate to contact page', () => {
    homepage.contactLink.click()
    cy.wait(1000)
    homepage.sendMessage()
  })

  it('navigate to about us page', () => {
    homepage.aboutUsLink.click()
    cy.wait(1000)
    homepage.modal.should('be.visible')
    homepage.modalTitle.should('be.visible')
      .and('have.text', 'New messageSign upLog inAbout us')
      .and('have.css', 'color', 'rgb(134, 134, 136)')
  })
})