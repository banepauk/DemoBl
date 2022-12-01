class Cart {
    get productsTableBox (){
        return cy.get('.table-responsive')
    }

    get nameInput (){
        return cy.get('#name')
    }

    get countryInput (){
        return cy.get('#country')
    }

    get cityInput (){
        return cy.get('#city')
    }

    get creditCardInput (){
        return cy.get('#card')
    }

    get monthInput (){
        return cy.get('#month')
    }

    get yearInput (){
        return cy.get('#year')
    }

    get purchaseBtn (){
        return cy.get('.btn-primary').eq(0)
    }

    purchase (){
        this.nameInput.type('Anja')
        this.countryInput.type('Damjan')
        this.cityInput.type('Frenky')
        this.creditCardInput.type('Lanmi')
        this.monthInput.type('something')
        this.yearInput.type('more')
        this.purchaseBtn.click({force:true})
    }
}
export const cart = new Cart()