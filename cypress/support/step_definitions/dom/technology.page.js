/* global cy, Cypress */

const containsNumberOfElements = (value) => {
  cy.get(".card-heading").should("have.length", value);
};

const containsNumberOfHeadings = (value) => {
  cy.get(".card-heading").should("have.length", value);
};

const containsNumberOfImages = (value) => {
  cy.get(".img-fluid").should("have.length", value);
};

const containsNumberOfDescriptions = (value) => {
  cy.get(".card-description > h5").should("have.length", value);
};

const pageContains = (value) => {
  cy.get(".card-heading").should("contain", value);
};

const Technology = {
  pageContains,
  containsNumberOfElements,
  containsNumberOfHeadings,
  containsNumberOfImages,
  containsNumberOfDescriptions,
};

export default Technology;
