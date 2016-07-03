Feature: This is a demo feature

    Scenario: The user is showcasing a demo feature

        Given I open the browser
        When I visint the page
        Then it should display a the message "app works"


    Scenario Outline: The user is showcasing a data-driven demo

        Given I open the browser
        When I visint the page
        Then it should display a the message "<message>"
    
    Examples:
      | message           |
      | App works         |
      | App does not work |