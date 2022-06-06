Feature: title
    Scenario: shop and checkout
     Given I visit the website
     Then I should see the homepage
      When  I add one item to cart
      And I add another item to cart
      And I proceed to check out
      Then I should see the items in my cart with the final figure
     
 