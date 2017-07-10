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
  "duration": 11529970736,
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
  "duration": 6200334599,
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
  "duration": 24155438933,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:124"
});
formatter.result({
  "duration": 5989408846,
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
  "duration": 501668762,
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
  "duration": 6221480721,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:132"
});
formatter.result({
  "duration": 10791337758,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:142"
});
formatter.result({
  "duration": 1087530517,
  "status": "passed"
});
formatter.after({
  "duration": 1493018146,
  "status": "passed"
});
formatter.before({
  "duration": 10226217157,
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
  "duration": 5231603005,
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
  "duration": 23823466144,
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
  "duration": 19095771545,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:124"
});
formatter.result({
  "duration": 5848912167,
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
  "duration": 620970816,
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
  "duration": 507765614,
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
  "duration": 5963060883,
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
  "duration": 4525001020,
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
  "duration": 2549806485,
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
  "duration": 1028172245,
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
  "duration": 6678651471,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:132"
});
formatter.result({
  "duration": 10955374954,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:142"
});
formatter.result({
  "duration": 879894170,
  "status": "passed"
});
formatter.after({
  "duration": 808106219,
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
  "duration": 10769762417,
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
  "duration": 5301123210,
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
  "duration": 1639041179,
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
  "duration": 4379545018,
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
  "duration": 1659064015,
  "status": "passed"
});
formatter.after({
  "duration": 752778768,
  "status": "passed"
});
formatter.before({
  "duration": 10839571719,
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
  "duration": 5006782450,
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
  "duration": 1884014299,
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
  "duration": 2486505547,
  "status": "passed"
});
formatter.after({
  "duration": 676639333,
  "status": "passed"
});
formatter.before({
  "duration": 10149232754,
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
  "duration": 5808447670,
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
  "duration": 4566946808,
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
  "duration": 4202678950,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:78"
});
formatter.result({
  "duration": 2908997611,
  "status": "passed"
});
formatter.after({
  "duration": 745898926,
  "status": "passed"
});
});