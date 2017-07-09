$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("e2e.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: thirumalaiprabu@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : This feature file contains 2 end to end test scenarios from HomePage to Secure checkout page."
    }
  ],
  "line": 4,
  "name": "End to End tests",
  "description": "",
  "id": "end-to-end-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13163301697,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Order one product",
  "description": "",
  "id": "end-to-end-tests;order-one-product",
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
  "location": "RSComponentsSteps.java:56"
});
formatter.result({
  "duration": 5795175338,
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
  "location": "RSComponentsSteps.java:105"
});
formatter.result({
  "duration": 23148093213,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:123"
});
formatter.result({
  "duration": 6207699133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 40
    }
  ],
  "location": "RSComponentsSteps.java:154"
});
formatter.result({
  "duration": 483276905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test889.com",
      "offset": 63
    }
  ],
  "location": "RSComponentsSteps.java:113"
});
formatter.result({
  "duration": 6724146214,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:131"
});
formatter.result({
  "duration": 10886771157,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:141"
});
formatter.result({
  "duration": 889817319,
  "status": "passed"
});
formatter.after({
  "duration": 960589677,
  "status": "passed"
});
formatter.before({
  "duration": 10501632409,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "End to End test 2",
  "description": "",
  "id": "end-to-end-tests;end-to-end-test-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on Search result page by searching \"GLS LED Lamps\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I add product with stock number \"126-2170\" X \"5\" to basket",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I add product with stock number \"123-7945\" X \"8\" to basket",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I go to MyBasket from Search results",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see product with stock number \"126-2170\" in the Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see product with stock number \"123-7945\" in the Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I remove product with stock number \"126-2170\" from the basket",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should not see product with stock number \"126-2170\" in the Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I add product with stock number \"786-9083\" X \"20\" in the basket",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see product with stock number \"786-9083\" in the Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I Checkout securely from MyBasket as guest user with email id \"test@test889.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I provide necessary delivery information and Continue to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 32,
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
  "location": "RSComponentsSteps.java:56"
});
formatter.result({
  "duration": 4799669707,
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
  "location": "RSComponentsSteps.java:105"
});
formatter.result({
  "duration": 22805059485,
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
  "location": "RSComponentsSteps.java:105"
});
formatter.result({
  "duration": 18824541372,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:123"
});
formatter.result({
  "duration": 5622018366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 40
    }
  ],
  "location": "RSComponentsSteps.java:154"
});
formatter.result({
  "duration": 550124245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123-7945",
      "offset": 40
    }
  ],
  "location": "RSComponentsSteps.java:154"
});
formatter.result({
  "duration": 457366627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 36
    }
  ],
  "location": "RSComponentsSteps.java:166"
});
formatter.result({
  "duration": 5312477408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126-2170",
      "offset": 44
    }
  ],
  "location": "RSComponentsSteps.java:173"
});
formatter.result({
  "duration": 4524625870,
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
  "location": "RSComponentsSteps.java:180"
});
formatter.result({
  "duration": 2456743382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "786-9083",
      "offset": 40
    }
  ],
  "location": "RSComponentsSteps.java:154"
});
formatter.result({
  "duration": 716863219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test889.com",
      "offset": 63
    }
  ],
  "location": "RSComponentsSteps.java:113"
});
formatter.result({
  "duration": 6590690978,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:131"
});
formatter.result({
  "duration": 9996561567,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:141"
});
formatter.result({
  "duration": 1219495360,
  "status": "passed"
});
formatter.after({
  "duration": 830587501,
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
  "duration": 11117926854,
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
  "duration": 5272212866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "RSComponentsSteps.java:84"
});
formatter.result({
  "duration": 1496489772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 27
    }
  ],
  "location": "RSComponentsSteps.java:91"
});
formatter.result({
  "duration": 3608022112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 14
    }
  ],
  "location": "RSComponentsSteps.java:98"
});
formatter.result({
  "duration": 1920803250,
  "status": "passed"
});
formatter.after({
  "duration": 698667858,
  "status": "passed"
});
formatter.before({
  "duration": 10970252473,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Sort search results by price",
  "description": "",
  "id": "search-filter-page-tests;sort-search-results-by-price",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on Search result page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I sort by price in \"ascending\" order",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The results should sort by price in \"ascending\" order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RSComponentsSteps.java:22"
});
formatter.result({
  "duration": 6160123494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ascending",
      "offset": 20
    }
  ],
  "location": "RSComponentsSteps.java:31"
});
formatter.result({
  "duration": 1756193087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ascending",
      "offset": 37
    }
  ],
  "location": "RSComponentsSteps.java:44"
});
formatter.result({
  "duration": 2481749782,
  "status": "passed"
});
formatter.after({
  "duration": 1232790994,
  "status": "passed"
});
formatter.before({
  "duration": 10268002210,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Filter by Brand",
  "description": "",
  "id": "search-filter-page-tests;filter-by-brand",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I am on Search result page by searching \"Tape Measures\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I filter by \"Brand\" - \"Stanley\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Each item displayed in Results should be of Brand \"Stanley\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
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
  "location": "RSComponentsSteps.java:56"
});
formatter.result({
  "duration": 5238059511,
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
  "location": "RSComponentsSteps.java:63"
});
formatter.result({
  "duration": 3804428156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stanley",
      "offset": 51
    }
  ],
  "location": "RSComponentsSteps.java:70"
});
formatter.result({
  "duration": 3836819180,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:77"
});
formatter.result({
  "duration": 2751982045,
  "status": "passed"
});
formatter.after({
  "duration": 694385599,
  "status": "passed"
});
});