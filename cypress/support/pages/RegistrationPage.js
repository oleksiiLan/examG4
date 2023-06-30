class RegistrationPage {
  visit() {
    cy.log("Open website login page");
    cy.visit("/register");
  }

  getEmailField() {
    cy.log("User Email");
    return cy.get("#emailControl");
  }

  getPasswordField() {
    cy.log("User Password");
    return cy.get("#passwordControl");
  }

  getRepeatPasswordField() {
    cy.log("Repeat User Password");
    return cy.get("#repeatPasswordControl");
  }

  getSelectSecurityQuestionField() {
    cy.log("Press on Sequrity question fied");
    return cy.get('[name="securityQuestion"]');
  }

  selectSecurityQuestion() {
    cy.log("Select sequrity question");
    return cy.get("#mat-option-6");
  }

  getSecurityAnswerField() {
    cy.log("Answer for question");
    return cy.get("#securityAnswerControl");
  }

  submitRegisterButton() {
    cy.log("Submit Registration");
    return cy.get("#registerButton .mat-button-wrapper");
  }

  checkRegistration(){
    cy.log("Check registration");
    return cy.get('.mat-simple-snack-bar-content');
  }
}
export default new RegistrationPage();
