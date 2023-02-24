import { Then } from "@badeball/cypress-cucumber-preprocessor";

import TechnologyPage from "./dom/technology.page";

Then("I ensure that the page contains a list of technologies", (dataTable) => {
  const rows = dataTable.hashes();
  rows.map((row) => {
    TechnologyPage.pageContains(row.list_of_technologies);
  });
});

Then(
  "I confirm each {string} of the technology blocks contains name, image, description",
  (elements) => {
    TechnologyPage.containsNumberOfElements(elements);
    TechnologyPage.containsNumberOfHeadings(elements);
    TechnologyPage.containsNumberOfImages(elements);
    TechnologyPage.containsNumberOfDescriptions(elements);
  }
);
