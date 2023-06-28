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

// export function findProduct(productName) {
//     cy.get("body").then((body) => {

//         if (body.find(`[alt="${productName}"]`).length > 0) {
//         cy.get(`[alt="${productName}"]`).click();
//       } else {
//         cy.get(`.mat-paginator-container button[aria-label="Next page"]`).click();
//         findProduct(productName);
//       }
//     });
// }

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
//[aria-label="Add to Basket"]

// export function findProduct(user) {

//     function findItem() {
//         cy.get('.mat-card .item-name').then(($items) => {

//             for(let i = 0; i < $items.length; i++){
//                 let item = $items[i];
//                 if (item.textContent === user.product) {

//                     cy.contains('.item-name', user.product)
//                     .parents('.mat-card')
//                     .within(() => {
//                         cy.get('.btn-basket').click({force: true});
//                     });
//                     return;
//                 } else {
//                     cy.get('button[aria-label="Next page"]').click({force: true}).then(findItem);
//                 }
//             }

//             //cy.get('button[aria-label="Next page"]').click({force: true}).then(findItem);
//         });
//     }
//     findItem();
//     //cy.get('.mat-simple-snack-bar-content').should('contain', `Placed${user.product}into basket`);
// }

export function rating() {
  cy.get("#rating").invoke("aria-valuenow", 5).trigger("change");
}
