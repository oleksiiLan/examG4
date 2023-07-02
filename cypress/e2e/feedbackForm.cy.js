///<reference types="cypress"/>

import homePage from "../support/pages/HomePage";
import feedbackPage from "../support/pages/FeedbackPage";
import user from "../fixtures/user.json";
import { moveRatingSlider, captchCalculating } from "../support/helper";

it("Feedback", () => {
  homePage.visit();
  homePage.hideModalWindow().click();
  homePage.hideCookieModal().click();
  
  homePage.getMenuButton().click();
  homePage.getFeedbackItem().click();
  feedbackPage.getComment().click().type(user.feedback);
  moveRatingSlider();
  captchCalculating();
 });
