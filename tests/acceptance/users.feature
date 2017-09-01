Feature: users

  Scenario: I would like to add a user

    Given I go to the users page
    When I type something in the add input
    When I click on the add user button
    Then I should see the new user in the list
