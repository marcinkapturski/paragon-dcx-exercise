import { Given } from "@badeball/cypress-cucumber-preprocessor";

import Common from "./dom/privacyPolicy";

Given("I accept the Privacy Policy", () => {
  Common.ResolvePrivacyPolicy();
});
