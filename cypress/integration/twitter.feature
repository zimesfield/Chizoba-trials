Feature: Twitter Registration

Scenario: Leaving the name section blank
    Given I go to twitter signup page
    Then I should see Join Twitter today
    When I click on sign up with email or phone number
    Then I should see the form 1 of 5
    When I enter my phone number/email and date of birth
    Then I should not be able to click on the next button

Scenario: Leaving the email/phone number section blank
    Given I go to twitter signup page
    Then I should see Join Twitter today
    When I click on sign up with email or phone number
    Then I should see the form 1 of 5
    When I enter my name and date of birth
    Then I should not be able to click on the next button

Scenario: Leaving the birthday section blank
    Given I go to twitter signup page
    Then I should see Join Twitter today
    When I click on sign up with email or phone number
    Then I should see the form 1 of 5
    When I enter my name and phone number/email 
    Then I should not be able to click on the next button

Scenario: Leavin section blank
    Given I go to twitter signup page
    Then I should see Join Twitter today
    When I click on sign up with email or phone number
    Then I should see the form 1 of 5
    When I enter my name and phone number/email 
    Then I should not be able to click on the next button

Scenario: Using wrong phone number
    Given I go to twitter signup page
    Then I should see Join Twitter today
    When I click on sign up with email or phone number
    Then I should see the form 1 of 5
    When I enter my name
    And I enter an invalid phone number 
    Then I should see 'Enter a valid number' 

Scenario: Using a wrong email
    Given I go to twitter signup page
    Then I should see Join Twitter today
    When I click on sign up with email or phone number
    Then I should see the form 1 of 5
    When I enter my name
    And I enter an invalid email number 
    Then I should see 'Enter a valid email' 

Scenario: Using a registered email
    Given I go to twitter signup page
    Then I should see Join Twitter today
    When I click on sign up with email or phone number
    Then I should see the form 1 of 5
    When I enter my name
    And I switch to use email instead
    And I enter a registered email and date of birth
    Then I should see email already taken
    When I click next
    Then I should be on page 2 0f 5

Scenario: Trying an almost successful sign up
    Given I go to twitter signup page
    Then I should see Join Twitter today
    When I click on sign up with email or phone number
    Then I should see the form 1 of 5
    When I enter a name, number and date of birth
    Then I should be able to click next
    When i click next
    Then I should be on page 2 0f 5
    When I unclick the give access button
    And I click next
    Then I should see the sign up button
 