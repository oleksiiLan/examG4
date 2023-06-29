///<reference types="cypress"/>

export function login(user) {
  cy.log("Open website login page");
  cy.visit("#/login");

  cy.log("Check user is unauthorized");
  cy.getCookie("customer").should("be.null");
  cy.get('button[aria-label="Close Welcome Banner"]').click();
  cy.get(".cc-compliance").click();

  cy.log("Authorize user");
  cy.get("#email").type(user.email);
  cy.get("#password").type(user.password);
  cy.get("#loginButton .mat-button-wrapper").contains("Log in").click();
  //cy.url().should('eq', 'https://juice-shop-sanitarskyi.herokuapp.com/#/search');
  cy.wait(300);
  //cy.get(`[alt="${productName}"]`).click();
}


export function findProduct(productName) {
  cy.get("body").then((body) => {
    if (body.find(`[alt="${productName}"]`).length > 0) {
      cy.get(`[alt="${productName}"]`).should("exist");
      cy.contains(".item-name", productName)
        .parents(".mat-card")
        .within(() => {
          cy.get(".btn-basket").click();
        });
      cy.wait(300);
      cy.get('button[aria-label="Show the shopping cart"]').click();
      cy.get(`[alt="${productName}"]`).should("exist");
    } else {
      cy.get(`.mat-paginator-container button[aria-label="Next page"]`).click();
      findProduct(productName);
    }
  });
}

export function moveRatingSlider() {
  cy.get("mat-slider#rating").as("slider");
  cy.get("@slider")
    .invoke("attr", "aria-valuenow")
    .then((value) => {
      const currentPosition = parseInt(value);
      const targetPosition = 2;
      const movement = targetPosition - currentPosition;
      cy.get("@slider").trigger("keydown", { keyCode: 39, which: 39 }); // Натиснути клавішу вправо
      for (let i = 0; i < movement; i++) {
        cy.get("@slider").trigger("keydown", { keyCode: 39, which: 39 }); // Натиснути клавішу вправо
      }
  });
}

export function captchCalculating() {
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
