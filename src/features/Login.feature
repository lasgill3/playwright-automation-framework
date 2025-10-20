@login @regression
Feature: webdriveruniversity - Login Page validation

    # Background: Pre-Conditions
    #     When I wait for 0 seconds

    SScenario Outline: Validate valid & invalid login
        Given I navigate to the webdriveruniversity homepage
        When I click on the login portal button
        And I switch to the new browser tab
        And I type a username <username>
        And I type a password <password>
        And I click on the login button
        Then I should be presented with an alert box which contains text '<expectedAlertText>'

        Examples:
            | username  | password     | expectedAlertMessage |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | invalid      | validation failed    |
            | joe       | pass12345    | validation failed    |

