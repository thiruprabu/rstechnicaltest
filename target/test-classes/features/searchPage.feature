#Author: thirumalaiprabu@gmail.com
#Keywords Summary : This feature file contains 3 test scenarios related to Search page of rscomponents.

Feature: Search filter page tests

    Scenario: Results per Page
   	Given I am on Search result page
    Then By Default I should see "20" results per page
    When I set the page to display "50" results
    Then I should see "50" results per page    
    
    
    Scenario: Sort search results by price
    Given I am on Search result page
    When I sort by price in "ascending" order
    Then The results should sort by price in "ascending" order successfully


		Scenario: Filter by Brand
    Given I am on Search result page by searching "Tape Measures"
    When I filter by "Brand" - "Stanley"
    Then Each item displayed in Results should be of Brand "Stanley"
    And Number of items displayed in Results should be equal to the number displayed against the brand in the filter selection window