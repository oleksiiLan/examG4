class FeedbackPage {
    visit(){
        cy.log('Open website Feedback page');
        cy.visit('/contact');
    }

    getComment(){
        return cy.get('#comment');
    }

    rating(){
        return cy.get('#rating');
    }

    getCaptchaField(){
        return cy.get('#captchaControl');
    }

    getSubmitFeedback(){
        return cy.get('#submitButton .mat-button-wrapper');
    }

}
export default new FeedbackPage();