/// <reference types="Cypress" />
import { homepage } from '../page_object/homepage'

describe('homepage', () => {
  beforeEach('visit', () => {
    cy.visit('/')
  })

  it.only('navigate to home page', () => {
    cy.intercept({
      method: 'GET',
       url : 'https://api.demoblaze.com/index.html'
    }).as('homePage')
    
    cy.visit('/')
    homepage.home.click()
    cy.wait('@homePage').then(interception=>{
      expect(interception.response.statusCode).to.exist
    })
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

  it('navigate to laptop category', () => {
    homepage.laptopCategory.click()
  })

  it('change carousel image', () => {
    homepage.nextImage.click()
    homepage.firstImage.should('be.visible')
  })
})