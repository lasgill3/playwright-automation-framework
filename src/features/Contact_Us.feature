@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    # Background: navigate to contact us page
    #     Given I navigate to the webdriveruniversity homepage
    #     When I click on the contact us button


    Scenario: Valid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message