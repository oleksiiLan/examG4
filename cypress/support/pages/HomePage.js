class HomePage {
    visit(){
        cy.log('Open website home page');
        cy.visit('/');
    }

    getModalWindow(){
        return cy.get('[aria-label="Close Welcome Banner"]');
    }

    getAccountButton(){
        return cy.get('#navbarAccount');
    }

    getLoginButton(){
        return cy.get('#navbarLoginButton');
    }

}
export default new HomePage();