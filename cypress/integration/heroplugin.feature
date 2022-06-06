Feature: Signing in to hero plugin
    Scenario: Logging in successfully
     Given I go to Hero sign in page
     # Then I should see Sign in to Hero
      When I enter the username
      And I enter the password
      And I click the enter button
      Then I should land on the Hero home page