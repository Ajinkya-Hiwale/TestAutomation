$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Herokuapp.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Features are nothing but are the test cases"
    },
    {
      "line": 2,
      "value": "#Feature:In another word it is test scenario name"
    },
    {
      "line": 3,
      "value": "#Scenario Outline:It is a Test case name"
    },
    {
      "line": 4,
      "value": "#Below three are called Gherkin keywords"
    },
    {
      "line": 5,
      "value": "#Given-Given data"
    },
    {
      "line": 6,
      "value": "#When- checking condition"
    },
    {
      "line": 7,
      "value": "#Then - what should be the result"
    },
    {
      "line": 8,
      "value": "#Examples - are used to provide test data as a key and value pair"
    }
  ],
  "line": 10,
  "name": "TechVerito herokuapp Testing Scenarios",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 9,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 9737182858,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Testing Error and Negative Scenarios",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@TestFeature"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on the page",
  "keyword": "Given "
});
formatter.match({
  "location": "Herokuapp_StepDefinition.user_is_on_the_page()"
});
formatter.result({
  "duration": 151421404,
  "status": "passed"
});
formatter.write("End of the test");
formatter.after({
  "duration": 603544345,
  "status": "passed"
});
});