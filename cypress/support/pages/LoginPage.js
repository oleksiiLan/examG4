class LoginPage {
    visit(){
        cy.log('Open website login page');
        cy.visit('/login');
    }

    getAnewCustomer(){
        return cy.get('#newCustomerLink a');
    }

    getPasswordField(){
        return cy.get('#loginFrm_password');
    }
    
    getSubmitButton(){
        return cy.get('button[title="Login"]');
    }

    getEmailFileld(){
        return cy.get('#email');
    }

    getPasswordFileld(){
        return cy.get('#password');
    }

    submitLoginForm(){
        return cy.get('#loginButton .mat-button-wrapper');
    }
    
    clickOnProduct(){
        return cy.get(`[alt="${productName}"]`).click();
    }
    // submitLoginForm(loginname, password){
    //     cy.log(`Auth user with username: ${loginname} and pass: ${password}`);

    //     this.getLoginField().type(loginname)
    //     this.getPasswordField().type(password)
    //     this.getSubmitButton().click()
    // }

}
export default new LoginPage();
