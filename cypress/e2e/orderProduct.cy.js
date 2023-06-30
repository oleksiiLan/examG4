///<reference types="cypress"/>

import { findProduct } from "../support/helper";
import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";

it("Order product", () => {
  homePage.visit();
  homePage.hideModalWindow().click();
  homePage.hideCookieModal().click();
  homePage.getAccountButton().click();
  homePage.getLoginButton().click();

  loginPage.getEmailFileld().type("!123Oleksii@mail.com");
  loginPage.getPasswordFileld().type("!123Oleksii");
  loginPage.submitLoginForm().click();

  findProduct("Strawberry Juice (500ml)"); 
});
