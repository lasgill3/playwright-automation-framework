@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: navigate to contact us page
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to the new browser tab


    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I enter a specific email address "Sarah_woods101@mail.com"
        And I type a specific word "hello123" and number 699 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    # @smoke
    # Scenario Outline: Validate contact us Page
    #     And I type a first name '<firstName>' and a last name '<lastName>'
    #     And I type an '<emailAddress>' and a comment '<comment>'
    #     And I click on the submit button
    #     Then I should be presented with header text '<message>'

    #     Examples:
    #         | firstName | lastName | emailAddress         | comment                 | message                      |
    #         | John      | Jones    | john_jones@email.com | Hello how are you?      | Thank You for your Message!  |
    #         | Mia       | Carter   | Mia_carter@email.com | Test1223 Test123        | Thank You for your Message!  |
    #         | Grace     | Hudson   | Grace_Hudson         | Do you create websites? | Error: Invalid email address |

