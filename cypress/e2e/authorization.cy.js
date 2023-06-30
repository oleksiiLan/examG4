///<reference types="cypress"/>

import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import user from "../fixtures/user.json";

it("Authorization", () => {
  loginPage.visit();
  homePage.hideModalWindow().click();
  homePage.hideCookieModal().click();
  homePage.getAccountButton().click();
  homePage.getLoginButton().click();

  loginPage.getEmailFileld().type(user.email);
  loginPage.getPasswordFileld().type(user.password);
  loginPage.submitLoginForm().click();
  homePage.getAccountButton().click();
  homePage.checkAuthorization().contains(user.email);
});
