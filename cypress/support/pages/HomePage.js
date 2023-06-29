class HomePage {
    visit(){
        cy.log('Open website home page');
        cy.visit('/');
    }

    hideModalWindow(){
        return cy.get('[aria-label="Close Welcome Banner"]');
    }

    hideCookieModal(){
        return cy.get(".cc-compliance");
    }

    getAccountButton(){
        return cy.get('#navbarAccount');
    }

    getLoginButton(){
        return cy.get('#navbarLoginButton');
    }

    getMenuButton(){
        return cy.get('[aria-label="Open Sidenav"]');
    }

    getFeedbackItem(){
        return cy.get('[aria-label="Go to contact us page"]')
    }

}
export default new HomePage();