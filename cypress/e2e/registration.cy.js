///<reference types="cypress"/>

import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import user from "../fixtures/user.json";
import {faker} from '@faker-js/faker' 

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 10 })

it("Registration", () => {
  homePage.visit();
  homePage.getModalWindow().click();
  homePage.getAccountButton().click();
  homePage.getLoginButton().click();
  loginPage.getAnewCustomer().click();

  registrationPage.getEmailField().type(user.email);
  registrationPage.getPasswordField().type(user.password);
  registrationPage.getRepeatPasswordField().type(user.password);
  registrationPage.getSelectSecurityQuestionField().click();
  registrationPage.selectSecurityQuestion().click();
  registrationPage.getSecurityAnswerField().type(user.answer);
  registrationPage.submitRegisterButton().click();
});
