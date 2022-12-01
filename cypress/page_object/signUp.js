class SignUp {
    get signUpLink (){
        return cy.get('#signin2')
    }

    get modal (){
        return cy.get('.modal-content')
    }

    get usernameInput (){
        return cy.get('#sign-username')
    }

    get passwordInput (){
        return cy.get('#sign-password')
    }

    get signUpButton (){
        return this.modal.find('[type="button"]').eq(2)
    }

    signUpWithValidCredentials (usernameInput, passwordInput){
        this.usernameInput.type('Tester')
        this.passwordInput.type('testerica1')
        this.signUpButton.click({force:true})
    }
}
export const signUp = new SignUp()