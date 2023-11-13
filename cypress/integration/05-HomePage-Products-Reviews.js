// NativeExecutionRunner-CrowdarAcademy2023-Sliders.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

describe('Home Page Reviews', () => {
  it('Should be a review section', () => {
    // 1) Open the browser and enter the URL “http://practice.automationtesting.in/”
    cy.visit('http://practice.automationtesting.in/');
  
    // 2) Click on Shop Menu
    cy.get('#menu-item-40 > a').click();

    // 3) Click on Home menu button
    cy.get('.woocommerce-breadcrumb > a').click();

    // 4) Clicks on a product's image in new arrivals section
    cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();

    // 5) Clicks on Reviews button
    cy.get('.reviews_tab > a').click();

    // 6) the product's review are shown
    cy.get('#reviews').should('contain.text', 'Reviews');
  })

});
  