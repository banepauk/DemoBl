/// <reference types="Cypress" />
import { homepage } from '../page_object/homepage'
import { signUp } from '../page_object/signUp'

describe ('sign up', () => {
    beforeEach('visit', () => {
        cy.visit('/')
        signUp.signUpLink.click()
    })

    it('sign up with valid credentials', () => {
        cy.request({
            method: 'POST',
            url : 'https://api.demoblaze.com/signup',
            body: {
                password: 'password',
                username: 'testi121231111124345@gmail.com',
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).eq(200)
            expect(res.body.password).eq('password')
        })
      // signUp.signUpWithValidCredentials()
        
    })
})