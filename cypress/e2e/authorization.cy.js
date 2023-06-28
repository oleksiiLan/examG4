///<reference types="cypress"/>

import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import user from "../fixtures/user.json";

it("Authorization", () => {
  loginPage.visit();
  homePage.getModalWindow().click();
  homePage.getAccountButton().click();
  homePage.getLoginButton().click();

  loginPage.getEmailFileld().type(user.email);
  loginPage.getPasswordFileld().type(user.password);
  loginPage.submitLoginForm().click();
  //cy.get('[alt="Apple Pomace"]').click();
});
