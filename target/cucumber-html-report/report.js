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
formatter.scenarioOutline({
  "line": 21,
  "name": "Testing Error and Negative Scenarios",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@TestFeture2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user is on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters invalid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "should be navigated to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 27,
      "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios;;1"
    },
    {
      "cells": [
        "aaa",
        "aaa"
      ],
      "line": 28,
      "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7129223786,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Testing Error and Negative Scenarios",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@FunctionalTest"
    },
    {
      "line": 20,
      "name": "@TestFeture2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user is on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters invalid \"aaa\" and \"aaa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Herokuapp_StepDefinition.user_is_on_the_website()"
});
formatter.result({
  "duration": 7656182406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 21
    },
    {
      "val": "aaa",
      "offset": 31
    }
  ],
  "location": "Herokuapp_StepDefinition.user_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 838912501,
  "status": "passed"
});
formatter.match({
  "location": "Herokuapp_StepDefinition.he_should_be_navigated_to_home_page()"
});
formatter.result({
  "duration": 10098454517,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027wrapper\u0027]/div[3]/div\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027AJINKYA-PC\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Ajinkya\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55191}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0c41d98dda819dc4dd9ba5677e0333c4\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027wrapper\u0027]/div[3]/div}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat pages.HerokuappPage.homepageMessage(HerokuappPage.java:110)\r\n\tat stepDefinitions.Herokuapp_StepDefinition.he_should_be_navigated_to_home_page(Herokuapp_StepDefinition.java:75)\r\n\tat ✽.Then should be navigated to home page(Herokuapp.feature:24)\r\n",
  "status": "failed"
});
formatter.write("End of the test");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1152073309,
  "status": "passed"
});
});