/* global cy, Cypress */

const Navigation = {
  get: (name) => {
    return cy.contains(name);
  },
  click: (name) => {
    Navigation.get(name).click();
  },
  hoverSubMenu: () => {
    cy.get(".dropdown-menu.single")
      .first()
      .invoke("css", "opacity", "100")
      .invoke("css", "pointer-events", "all");
  },
  clickTextAfterHover: (subMenuLink) => {
    Navigation.hoverSubMenu();
    cy.contains(subMenuLink).click();
  },
  subMenuContains: (value) => {
    cy.get(".dropdown-menu.single").should("contain", value);
  },
};

const VerifyTitle = (title) => {
  cy.title().should("include", title);
};

const GoToBaseUrl = (title) => {
  cy.visit(Cypress.env("home_page"));
  VerifyTitle(title);
};

const Nav = {
  Navigation,
  VerifyTitle,
  GoToBaseUrl,
};

export default Nav;
