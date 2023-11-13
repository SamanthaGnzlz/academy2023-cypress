Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe("Login Crowdar Cypress Demo", () => {
    it("Login", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var username = "sam2";
        var pass = "}6kK$C;KUK";

        cy.get('#username').type(username);
        cy.get('#password').type(pass+"{enter}");
                
        cy.get('strong').should('contain.text', 'sam2');
        

    });
});