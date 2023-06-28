///<reference types="cypress"/>

import homePage from "../support/pages/HomePage";
import feedbackPage from "../support/pages/FeedbackPage";
import user from "../fixtures/user.json";
import { login, findProduct } from "../support/helper";

it("Feedback", () => {
  login(user);
  cy.wait(100);
  cy.get('[aria-label="Open Sidenav"]').click();
  cy.get('[aria-label="Go to contact us page"]').click();
  //   cy.get('.action-email')
  //   .type('fake@email.com').should('have.value', 'fake@email.com')
  //feedbackPage.visit();
  feedbackPage.getComment().click().type(user.feedback);
  cy.get("#rating .mat-slider-thumb").click();

  //   cy.get('mat-slider#rating').as('range').invoke('val', 4)
  //   .trigger('change').click();
  // cy.get('[role="slider"]').as('range').invoke('val', 5)
  //   .trigger('change')
  //   cy.get('[aria-valuenow="5"]').click();

  cy.get("mat-slider#rating").as("slider");
  cy.get("@slider")
    .invoke("attr", "aria-valuenow")
    .then((value) => {
      const currentPosition = parseInt(value);
      const targetPosition = 3;
      const movement = targetPosition - currentPosition;
      cy.get("@slider").trigger("keydown", { keyCode: 39, which: 39 }); // Натиснути клавішу вправо
      for (let i = 0; i < movement; i++) {
        cy.get("@slider").trigger("keydown", { keyCode: 39, which: 39 }); // Натиснути клавішу вправо
      }
    });

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
});
