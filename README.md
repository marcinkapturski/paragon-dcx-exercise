# paragon-dcx-exercise

## Preconditions

```bash
# install necessary packages
yarn
```

## How to run tests

```bash
# run cypress tests
yarn cy:run

# or
yarn cy:open
```

```gherkin
  Background:
    * I navigate to the home page with title "Full Service Digital Transformation Agency - Paragon DCX"
    * I accept the Privacy Policy

  Scenario: List of capabilities
    Given I hover the "Capabilities" dropdown list
    Then I confirm the dropdown list contains
      | dropdown_list        |
      | Products & Platforms |
      | Technology Expertise |
    And I click "Technology Expertise" from submenu
    And The title includes "Technology Expertise | Capabilities | Paragon DCX"
    Then I ensure that the page contains a list of technologies
      | list_of_technologies |
      | Salesforce           |
      | Acquia               |
      | Acoustic             |
      | Apteco               |
      | Dotdigital           |
      | Snowflake            |
      | Adobe                |
      | Bynder               |
      | Sitecore             |
    And I confirm each "9" of the technology blocks contains name, image, description

```

![test_run](https://user-images.githubusercontent.com/41780000/221149004-d0c1fdf0-4203-43a7-9131-b79f4aac2fcc.png)
