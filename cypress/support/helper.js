///<reference types="cypress"/>

import { faker } from "@faker-js/faker";
import user from "../fixtures/user.json";

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 10 });

export function findProduct(productName) {
  cy.wait(500);
  cy.log("Find a product");
  cy.get("body").then((body) => {
    if (body.find(`[alt="${productName}"]`).length > 0) {
      cy.get(`[alt="${productName}"]`).should("exist");
      cy.contains(".item-name", productName)
        .parents(".mat-card")
        .within(() => {
          cy.get(".btn-basket").click();
        });
      cy.wait(500);
      cy.log("Go to Shopping Cart");
      cy.get('button[aria-label="Show the shopping cart"]').click();
      cy.log("Check product");
      cy.get(`[alt="${productName}"]`).should("exist");
      cy.get('mat-row mat-cell').contains(`${productName}`);
    } else {
      cy.log("Pagination");
      cy.get(`.mat-paginator-container button[aria-label="Next page"]`).click();
      findProduct(productName);
    }
  });
};

export function moveRatingSlider() {
  cy.log("Move slider");
  cy.get("mat-slider#rating").as("slider");
  cy.get("@slider")
    .invoke("attr", "aria-valuenow")
    .then((value) => {
      const currentPosition = parseInt(value);
      const targetPosition = 2; //slider from 0 to 4
      const movement = targetPosition - currentPosition;
      cy.log("Press button ->");
      cy.get("@slider").trigger("keydown", { keyCode: 39, which: 39 }); 
      for (let i = 0; i < movement; i++) {
        cy.get("@slider").trigger("keydown", { keyCode: 39, which: 39 }); 
      }
  });
};

export function captchCalculating() {
  cy.log("Check Captcha");
  cy.get("code#captcha")
    .invoke("text")
    .then((captchaText) => {
      const captchaResult = eval(captchaText);
      cy.get("#captchaControl").type(captchaResult);
      cy.get('button[type="submit"]').click();
      cy.get(".mat-simple-snack-bar-content")
        .contains("Thank you for your feedback.")
        .should("be.visible");
    });
};

export function homePageVisit() {
  cy.log('Open website home page');
  cy.visit('/');
  cy.log("Close Welcome Banner");
  cy.get('[aria-label="Close Welcome Banner"]').click();
  cy.log("Close cookie modal");
  cy.get(".cc-compliance").click();
  cy.log("Click on account button");
  cy.get('#navbarAccount').click();
  cy.log("Click on Login button");
  cy.get('#navbarLoginButton').click();
};

export function registrationUser() {
  cy.log("Type user email");
  cy.get("#emailControl").type(user.email);
  cy.log("Type user password");
  cy.get("#passwordControl").type(user.password);
  cy.log("Repeat user  password");
  cy.get("#repeatPasswordControl").type(user.password);
  cy.log("Select security question");
  cy.get('[name="securityQuestion"]').click();
  cy.get("#mat-option-6").click();
  cy.log("Type answer for sequrity question");
  cy.get("#securityAnswerControl").type(user.answer);
  cy.get("#registerButton .mat-button-wrapper").click();
};

export function userAuthorization() {
  cy.log("Type user email");
  cy.get('#email').type(user.email);
  cy.log("Type user password");
  cy.get('#password').type(user.password);
  cy.get('#loginButton .mat-button-wrapper').click();
};

export function newCustomer(){
  cy.log("Click on new user button");
  cy.get('#newCustomerLink a').click();
};

export function feedbackForm(){
  cy.get('[aria-label="Open Sidenav"]').click();
  cy.get('[aria-label="Go to contact us page"]').click();
  cy.log("Type a comment");
  cy.get('#comment').click().type(user.feedback);
};