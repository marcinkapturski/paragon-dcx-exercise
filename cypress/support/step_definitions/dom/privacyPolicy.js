/* global cy, Cypress */

const ResolvePrivacyPolicy = () => {
  cy.get("#hs-eu-confirmation-button").click();
};

const Common = {
  ResolvePrivacyPolicy,
};

export default Common;
