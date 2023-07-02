///<reference types="cypress"/>

import {
  findProduct,
  moveRatingSlider,
  captchCalculating,
  homePageVisit,
  registrationUser,
  userAuthorization,
  newCustomer,
  feedbackForm,
} from "../support/helper";

it("User registration", () => {
  homePageVisit();
  newCustomer();
  registrationUser();
});

it("User authorization", () => {
  homePageVisit();
  userAuthorization();
});

it("Product ordering", () => {
  homePageVisit();
  userAuthorization();
  findProduct("OWASP Juice Shop Mug"); // Type name of product here.
});

it("Feedback", () => {
  homePageVisit();
  userAuthorization();
  feedbackForm();
  moveRatingSlider();
  captchCalculating();
});
