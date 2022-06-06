Feature: Signing in to instagram plugin
    
    #Scenario: Logging in unsuccessfully
    # Given I go to instagram sign in page
    # Then I should see Instagram
   #   When I enter the  instagram username
    #  And I enter the  wrong password
    #  And I click the signup button
    #  Then I should see incorrect password


    Background: Logging in successfully
     Given I go to instagram sign in page
     Then I should see Instagram
      When I enter the right instagram username
      And I enter the  right password
      And I click the signup button
      Then I should see instagram homepage logo

    Scenario: Searching for an instagram user
        When I search for a valid instagram user
        Then I should land on their homepage 





      


