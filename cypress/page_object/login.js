class Login {
    get loginLink (){
        return cy.get('.nav-link').eq(4)
    }
}
export const login = new Login()