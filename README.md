Steps to run the test:

Clone the repository locally.
Go to the project root folder from command prompt
Feature files are present under : src/test/java/features
Execution of test can be run from feature file(if the IDE has cucumber plugin : by right click -> run as -> cucumber feature)
Execution can also be done by running the TestRunner class(which will execute all the feature files)
Maven can also be used to run tests from command prompt.
After execution, the cucumber test report can be found at : ./src/test/resources/reports/cucumberReports/index.html
After execution, extent report can be found at : ./src/test/resources/reports/extentReports/scenarioname.html
Logs can be found at : ./src/test/resources/logs

Comments:

> The 2 end to end BDD test scenarios designed are quite longer and detailed. Though it is not ideal, I designed in that way to cover the major end to end flow of RSComponents website within 2 tests. I would normally prefer my scenarios to be precise and specific to each functionality.

> There are possibilities to add lots of validations in the test scenarios. I have added quite a few of them in the given time.