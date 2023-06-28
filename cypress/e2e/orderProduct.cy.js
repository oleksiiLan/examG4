import user from "../fixtures/user.json";
import { login, findProduct } from "../support/helper";
import homePage from "../support/pages/HomePage";

it("Order product", () => {
  login(user);

  //cy.get('#searchQuery').type('OW{enter}')
  //.type('{enter}');

  //findProduct('Apple Pomace') // 1st page
  //findProduct('OWASP Juice Shop Hoodie') // 2nd page
  findProduct("Strawberry Juice (500ml)"); // last page
  cy.get("h1").contains(user.email).should("exist");
  // cy.get('.productpagecart').click();
  // cy.get('#cart_checkout1').click();
  // cy.get('#checkout_btn').click();
  // cy.get('.contentpanel').should('contain', "Thank you for shopping with us!");
});
