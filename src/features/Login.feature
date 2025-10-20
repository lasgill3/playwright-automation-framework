@login @regression
Feature: webdriveruniversity - Login Page validation

    # Background: Pre-Conditions
    #     When I wait for 0 seconds

    Scenario Outline: Valid and Invalid Login Form Submission
        Given I navigate to the webdriveruniversity login page
        # Given I navigate to the webdriveruniversity homepage
        # When I click on the login portal button
        # And I switch to the new browser tab
        And I type an username '<username>' and password '<password>'
        And I click on the login button
        Then I should be presented with an alert box which contains text '<expectedAlertMessage>'
        When I click on the alert ok button

        Examples:
            | username  | password     | expectedAlertMessage |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | invalid      | validation failed    |
            | joe       | pass12345    | validation failed    |

