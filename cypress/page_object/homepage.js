class Homepage{
    get home (){
        return cy.get('.nav-link').eq(0)
    }

    get productStoreLogo (){
        return cy.get('#nava')
    }

    get shopItems (){
        return cy.get('#tbodyid')
    }

    get shopItem (){
        return this.shopItems.find('.col-lg-4').eq(0)
    }

    get firstShopItem (){
        return this.shopItem.find('.hrefch')
    }

    get addToCartButton (){
        return cy.get('.btn-success')
    }

    get contactLink (){
        return cy.get('.nav-link').eq(1)
    }

    get modal (){
        return cy.get('.modal-content')
    }

    get contactEmailInput (){
        return this.modal.find('#recipient-email')
    }

    get contactNameInput (){
        return this.modal.find('#recipient-name')
    }

    get contactMessageInput (){
        return this.modal.find('#message-text')
    }

    get sendMessageButton (){
        return this.modal.find('[type="button"]').eq(2)
    }

    get aboutUsLink (){
        return cy.get('.nav-link').eq(2)
    }

    get modalTitle (){
        return this.modal.find('.modal-title')
    }

    get cartLink (){
        return cy.get('#cartur')
    }

    get placeOrderButton (){
        return cy.get('.btn-success')
    }

    get categoryList (){
        return cy.get('.list-group')
    }

    get laptopCategory (){
        return this.categoryList.find('.list-group-item').eq(2)
    }

    get monitorsCategory (){
        return this.categoryList.find('.list-group-item').eq(3)
    }

    get credentialsLogin (){
        return cy.get('.nav-item').eq(6)
    }

    get nextImage (){
        return cy.get('.carousel-control-next')
    }

    get previousImage (){
        return cy.get('.carousel-control-prev')
    }

    get imagesAll (){
        return cy.get('.carousel-item')
    }

    get firstImage (){
        return this.imagesAll.find('[alt="Third slide"]')
    }

    sendMessage (contactEmailInput, contactNameInput, contactMessageInput){
        this.contactEmailInput.type('test@test.com')
        this.contactNameInput.type('John Brave')
        this.contactMessageInput.type('hello my support')
        this.sendMessageButton.click()
    }
}
export const homepage = new Homepage()