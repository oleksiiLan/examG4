class HomePage {
    visit(){
        cy.log('Open website home page');
        cy.visit('/');
    }

    hideModalWindow(){
        cy.log('Close Welcome Banner');
        return cy.get('[aria-label="Close Welcome Banner"]');
    }

    hideCookieModal(){
        cy.log('Close Cookie Banner');
        return cy.get(".cc-compliance");
    }

    getAccountButton(){
        cy.log('Account button');
        return cy.get('#navbarAccount');
    }

    getLoginButton(){
        cy.log('Login Button');
        return cy.get('#navbarLoginButton');
    }

    getMenuButton(){
        cy.log('Menu button');
        return cy.get('[aria-label="Open Sidenav"]');
    }

    getFeedbackItem(){
        cy.log('Feedback button');
        return cy.get('[aria-label="Go to contact us page"]');
    }

    checkAuthorization(){
        cy.log('Check user email');
        return cy.get('button[aria-label="Go to user profile"]');
    }
}
export default new HomePage();