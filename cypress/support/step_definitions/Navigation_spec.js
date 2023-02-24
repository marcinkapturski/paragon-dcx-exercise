import { Given } from "@badeball/cypress-cucumber-preprocessor";

import NavigationComponent from "./dom/navigation";

Given("I navigate to the home page with title {string}", (title) => {
  NavigationComponent.GoToBaseUrl(title);
});

Given("I hover the {string} dropdown list", () => {
  NavigationComponent.Navigation.hoverSubMenu();
});

Given("I confirm the dropdown list contains", (dataTable) => {
  NavigationComponent.Navigation.hoverSubMenu();
  const rows = dataTable.hashes();
  rows.map((row) => {
    NavigationComponent.Navigation.subMenuContains(row.dropdown_list);
  });
});

Given("I click {string} from submenu", (subMenuLink) => {
  NavigationComponent.Navigation.clickTextAfterHover(subMenuLink);
});

Given("The title includes {string}", (title) => {
  NavigationComponent.VerifyTitle(title);
});
