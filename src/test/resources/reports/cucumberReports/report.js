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
  "duration": 12784726937,
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
  "duration": 6127106266,
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
  "duration": 24422605327,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:124"
});
formatter.result({
  "duration": 5928476235,
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
  "duration": 542591899,
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
  "duration": 6537646417,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:132"
});
formatter.result({
  "duration": 10728575476,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:142"
});
formatter.result({
  "duration": 1111951847,
  "status": "passed"
});
formatter.after({
  "duration": 1470321713,
  "status": "passed"
});
formatter.before({
  "duration": 10693047837,
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
  "duration": 5444040629,
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
  "duration": 23916678985,
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
  "duration": 19281265446,
  "status": "passed"
});
formatter.match({
  "location": "RSComponentsSteps.java:124"
});
formatter.result({
  "duration": 6701820132,
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
  "duration": 631736474,
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
  "duration": 629034878,
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
  "duration": 21944518740,
  "error_message": "java.lang.RuntimeException: Remove item from basket failed!\r\n\tat pages.MyBasket_Page.removeItemFromBasket(MyBasket_Page.java:115)\r\n\tat steps.RSComponentsSteps.lambda$16(RSComponentsSteps.java:170)\r\n\tat ✽.When I remove product with stock number \"126-2170\" from the basket(e2e.feature:24)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "RSComponentsSteps.java:132"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RSComponentsSteps.java:142"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1132290036,
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
  "duration": 8544798447,
  "error_message": "java.lang.RuntimeException: FAILED\r\n\tat utils.Reporter.reportStep(Reporter.java:45)\r\n\tat wrappers.GenericWrapper.invokeApp(GenericWrapper.java:126)\r\n\tat steps.RSComponentsSteps.beforeScenario(RSComponentsSteps.java:200)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 14363343,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Tried to run command without establishing a connection\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\DELL\\AppData\\Local\\Temp\\rust_mozprofile.yEHZhdM69Liu, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d54.0, platformVersion\u003d6.1, moz:processID\u003d3904.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 9ffd3a28-2ce5-4f46-8c59-822cd11daf06\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\r\n\tat steps.RSComponentsSteps.afterScenario(RSComponentsSteps.java:208)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
