class Login {
    get loginLink (){
        return cy.get('.nav-link').eq(4)
    }

    get loginUsernameInput (){
        return cy.get('#loginusername')
    }

    get loginPasswordInput (){
        return cy.get('#loginpassword')
    }

    get loginButton (){
        return cy.get('.btn-primary').eq(2)
    }

    get logoutBtn (){
        return cy.get('.nav-item').eq(5)
    }

    login (loginUsernameInput, loginPasswordInput) {
        this.loginUsernameInput.type('testerbr@gmail.com')
        this.loginPasswordInput.type('password1')
        this.loginButton.click({force:true})
    }
}
export const login = new Login()