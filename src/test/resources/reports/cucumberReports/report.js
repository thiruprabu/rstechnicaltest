$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("e2e.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: thirumalaiprabu@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : This feature file contains 2 end to end test scenarios from HomePage to Secure checkout page of rscomponents."
    }
  ],
  "line": 4,
  "name": "End to End tests",
  "description": "",
  "id": "end-to-end-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11803441012,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search for a product, add to basket and checkout",
  "description": "",
  "id": "end-to-end-tests;search-for-a-product,-add-to-basket-and-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on Search result page by searching \"GLS LED Lamps\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add product with stock number \"126-2170\" X \"5\" to basket",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I go to MyBasket from Search results",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see product with stock number \"126-2170\" in the Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I Checkout securely from MyBasket as guest user with email id \"test@test889.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I provide necessary delivery information and Continue to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see fields related to payments in Secure Checkout Payment page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GLS LED Lamps",
      "offset": 41
    }
  ],
  "location": "RSComponentsSteps.java:57"
});
formatter.result({
  "duration": 5539647399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 33
    },
    {
      "val": "5",
      "offset": 46
    }
  ],
  "location": "RSComponentsSteps.java:106"
});
formatter.result({
  "duration": 23217213992,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:124"
});
formatter.result({
  "duration": 5212218080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 40
    }
  ],
  "location": "RSComponentsSteps.java:155"
});
formatter.result({
  "duration": 458108713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test889.com",
      "offset": 63
    }
  ],
  "location": "RSComponentsSteps.java:114"
});
formatter.result({
  "duration": 7816449708,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:132"
});
formatter.result({
  "duration": 10536487710,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:142"
});
formatter.result({
  "duration": 842233047,
  "status": "passed"
});
formatter.after({
  "duration": 1597194313,
  "status": "passed"
});
formatter.before({
  "duration": 10523930564,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search and add multiple products to basket, modify basket and checkout",
  "description": "",
  "id": "end-to-end-tests;search-and-add-multiple-products-to-basket,-modify-basket-and-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on Search result page by searching \"GLS LED Lamps\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I add product with stock number \"126-2170\" X \"5\" to basket",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I add product with stock number \"123-7945\" X \"8\" to basket",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I go to MyBasket from Search results",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see product with stock number \"126-2170\" in the Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should see product with stock number \"123-7945\" in the Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I remove product with stock number \"126-2170\" from the basket",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should not see product with stock number \"126-2170\" in the Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I add product with stock number \"786-9083\" X \"20\" in the basket",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see product with stock number \"786-9083\" in the Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I Checkout securely from MyBasket as guest user with email id \"test@test889.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I provide necessary delivery information and Continue to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see fields related to payments in Secure Checkout Payment page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GLS LED Lamps",
      "offset": 41
    }
  ],
  "location": "RSComponentsSteps.java:57"
});
formatter.result({
  "duration": 5575461443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 33
    },
    {
      "val": "5",
      "offset": 46
    }
  ],
  "location": "RSComponentsSteps.java:106"
});
formatter.result({
  "duration": 24113288402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123-7945",
      "offset": 33
    },
    {
      "val": "8",
      "offset": 46
    }
  ],
  "location": "RSComponentsSteps.java:106"
});
formatter.result({
  "duration": 19676131106,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:124"
});
formatter.result({
  "duration": 6056960247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 40
    }
  ],
  "location": "RSComponentsSteps.java:155"
});
formatter.result({
  "duration": 765164814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123-7945",
      "offset": 40
    }
  ],
  "location": "RSComponentsSteps.java:155"
});
formatter.result({
  "duration": 514670534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 36
    }
  ],
  "location": "RSComponentsSteps.java:167"
});
formatter.result({
  "duration": 5991015982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 44
    }
  ],
  "location": "RSComponentsSteps.java:174"
});
formatter.result({
  "duration": 4124355398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "786-9083",
      "offset": 33
    },
    {
      "val": "20",
      "offset": 46
    }
  ],
  "location": "RSComponentsSteps.java:181"
});
formatter.result({
  "duration": 2720810217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "786-9083",
      "offset": 40
    }
  ],
  "location": "RSComponentsSteps.java:155"
});
formatter.result({
  "duration": 751539425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test889.com",
      "offset": 63
    }
  ],
  "location": "RSComponentsSteps.java:114"
});
formatter.result({
  "duration": 7438517333,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:132"
});
formatter.result({
  "duration": 11048868933,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:142"
});
formatter.result({
  "duration": 1133089196,
  "status": "passed"
});
formatter.after({
  "duration": 966802093,
  "status": "passed"
});
formatter.uri("searchPage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: thirumalaiprabu@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : This feature file contains 3 test scenarios related to Search page of rscomponents."
    }
  ],
  "line": 4,
  "name": "Search filter page tests",
  "description": "",
  "id": "search-filter-page-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11199768336,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Results per Page",
  "description": "",
  "id": "search-filter-page-tests;results-per-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Search result page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "By Default I should see \"20\" results per page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I set the page to display \"50\" results",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see \"50\" results per page",
  "keyword": "Then "
});
formatter.match({
  "location": "RSComponentsSteps.java:22"
});
formatter.result({
  "duration": 4858237057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "RSComponentsSteps.java:85"
});
formatter.result({
  "duration": 1684150819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 27
    }
  ],
  "location": "RSComponentsSteps.java:92"
});
formatter.result({
  "duration": 4407100985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 14
    }
  ],
  "location": "RSComponentsSteps.java:99"
});
formatter.result({
  "duration": 1709672775,
  "status": "passed"
});
formatter.after({
  "duration": 687752818,
  "status": "passed"
});
formatter.before({
  "duration": 10593752839,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Sort search results by price",
  "description": "",
  "id": "search-filter-page-tests;sort-search-results-by-price",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on Search result page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I sort by price in \"ascending\" order",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The results should sort by price in \"ascending\" order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RSComponentsSteps.java:22"
});
formatter.result({
  "duration": 5283400777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ascending",
      "offset": 20
    }
  ],
  "location": "RSComponentsSteps.java:32"
});
formatter.result({
  "duration": 1842437457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ascending",
      "offset": 37
    }
  ],
  "location": "RSComponentsSteps.java:45"
});
formatter.result({
  "duration": 2491596875,
  "status": "passed"
});
formatter.after({
  "duration": 1315973907,
  "status": "passed"
});
formatter.before({
  "duration": 11364929839,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Filter by Brand",
  "description": "",
  "id": "search-filter-page-tests;filter-by-brand",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on Search result page by searching \"Tape Measures\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I filter by \"Brand\" - \"Stanley\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Each item displayed in Results should be of Brand \"Stanley\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Number of items displayed in Results should be equal to the number displayed against the brand in the filter selection window",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Tape Measures",
      "offset": 41
    }
  ],
  "location": "RSComponentsSteps.java:57"
});
formatter.result({
  "duration": 5165384390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brand",
      "offset": 13
    },
    {
      "val": "Stanley",
      "offset": 23
    }
  ],
  "location": "RSComponentsSteps.java:64"
});
formatter.result({
  "duration": 4235364496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stanley",
      "offset": 51
    }
  ],
  "location": "RSComponentsSteps.java:71"
});
formatter.result({
  "duration": 4483652612,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:78"
});
formatter.result({
  "duration": 3066900487,
  "status": "passed"
});
formatter.after({
  "duration": 633270509,
  "status": "passed"
});
});