class LoginPage {
    visit(){
        cy.log('Open website login page');
        cy.visit('/login');
    }

    getAnewCustomer(){
        cy.log('Create a new customer button');
        return cy.get('#newCustomerLink a');
    }

    getEmailFileld(){
        cy.log('User email');
        return cy.get('#email');
    }

    getPasswordFileld(){
        cy.log('User password');
        return cy.get('#password');
    }

    submitLoginForm(){
        cy.log('Submit Login button');
        return cy.get('#loginButton .mat-button-wrapper');
    }
}
export default new LoginPage();
