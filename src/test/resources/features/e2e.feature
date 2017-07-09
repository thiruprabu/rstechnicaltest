#Author: thirumalaiprabu@gmail.com
#Keywords Summary : This feature file contains 2 end to end test scenarios from HomePage to Secure checkout page.

Feature: End to End tests

     
    Scenario: Search for a product, add to basket and checkout
    Given I am on Search result page by searching "GLS LED Lamps"
    When I add product with stock number "126-2170" X "5" to basket
    And I go to MyBasket from Search results
    Then I should see product with stock number "126-2170" in the Basket
    And I Checkout securely from MyBasket as guest user with email id "test@test889.com"
    And I provide necessary delivery information and Continue to Payment
    Then I should see fields related to payments in Secure Checkout Payment page


		Scenario: Search and add multiple products to basket, modify basket and checkout
    Given I am on Search result page by searching "GLS LED Lamps"
    When I add product with stock number "126-2170" X "5" to basket
    When I add product with stock number "123-7945" X "8" to basket
    And I go to MyBasket from Search results
    Then I should see product with stock number "126-2170" in the Basket
    Then I should see product with stock number "123-7945" in the Basket
    When I remove product with stock number "126-2170" from the basket
    Then I should not see product with stock number "126-2170" in the Basket
    When I add product with stock number "786-9083" X "20" in the basket
    Then I should see product with stock number "786-9083" in the Basket
    And I Checkout securely from MyBasket as guest user with email id "test@test889.com"
    And I provide necessary delivery information and Continue to Payment
    Then I should see fields related to payments in Secure Checkout Payment page