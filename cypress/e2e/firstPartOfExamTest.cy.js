///<reference types="cypress"/>

import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import feedbackPage from "../support/pages/FeedbackPage";
import user from "../fixtures/user.json";
import { faker } from "@faker-js/faker";
import {
  login,
  findProduct,
  moveRatingSlider,
  captchCalculating,
} from "../support/helper";

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 10 });

it("Registration", () => {
  homePage.visit();
  homePage.hideModalWindow().click();
  homePage.hideCookieModal().click();
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

it("Authorithation", () => {
  loginPage.visit();
  homePage.hideModalWindow().click();
  homePage.hideCookieModal().click();
  homePage.getAccountButton().click();
  homePage.getLoginButton().click();

  loginPage.getEmailFileld().type(user.email);
  loginPage.getPasswordFileld().type(user.password);
  loginPage.submitLoginForm().click();
});

it("Order product", () => {
  homePage.visit();
  homePage.hideModalWindow().click();
  homePage.hideCookieModal().click();
  homePage.getAccountButton().click();
  homePage.getLoginButton().click();

  loginPage.getEmailFileld().type(user.email);
  loginPage.getPasswordFileld().type(user.password);
  loginPage.submitLoginForm().click();
  findProduct("Strawberry Juice (500ml)"); // Apple Pomace , OWASP Juice Shop Hoodie
  cy.get("h1").contains(user.email).should("exist");
});

it("Feedback", () => {
  login(user);
  homePage.getMenuButton().click(); //menu on home page
  homePage.getFeedbackItem().click(); // feedback item on menu
  feedbackPage.getComment().click().type(user.feedback); //type coment
  moveRatingSlider();
  captchCalculating();
});
