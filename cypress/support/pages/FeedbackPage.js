class FeedbackPage {
    visit(){
        cy.log('Open website Feedback page');
        cy.visit('/contact');
    }

    getComment(){
        cy.log('Comment field');
        return cy.get('#comment');
    }

    rating(){
        cy.log('Press on slider');
        return cy.get('#rating');
    }

    getCaptchaField(){
        cy.log('Captcha filed');
        return cy.get('#captchaControl');
    }

    getSubmitFeedback(){
        cy.log('Submit feedback form');
        return cy.get('#submitButton .mat-button-wrapper');
    }
}
export default new FeedbackPage();