class RegistrationPage {
  visit() {
    cy.log("Open website login page");
    cy.visit("/register");
  }

  getEmailField() {
    return cy.get("#emailControl");
  }

  getPasswordField() {
    return cy.get("#passwordControl");
  }

  getRepeatPasswordField() {
    return cy.get("#repeatPasswordControl");
  }

  getSelectSecurityQuestionField() {
    return cy.get('[name="securityQuestion"]');
  }

  selectSecurityQuestion() {
    return cy.get("#mat-option-6")
      //.get(".security-container mat-select")
      //.select(" Name of your favorite pet? ",{ force: true });
  }

  getSecurityAnswerField() {
    return cy.get("#securityAnswerControl");
  }

  submitRegisterButton() {
    return cy.get("#registerButton .mat-button-wrapper");
  }

  submitLoginForm(loginname, password) {
    cy.log(`Auth user with username: ${loginname} and pass: ${password}`);

    this.getLoginField().type(loginname);
    this.getPasswordField().type(password);
    this.getSubmitButton().click();
  }
}
export default new RegistrationPage();
