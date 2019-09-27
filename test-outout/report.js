$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Herokuapp.feature");
formatter.feature({
  "line": 2,
  "name": "TechVerito herokuapp Testing Scenarios",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Testing Error and Negative Scenarios",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ErrorNegativeScenarios"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters invalid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Error message \"\u003cerror\u003e\" should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter blank user Id and password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Error message \"\u003cerror\u003e\" should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on Products",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click on New Product button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter Title,Sku and Description value as Blank",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Error message should be visible for all three fields",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Enters duplicate Title or sku",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Error message for duplicate \"\u003cerror_duplicate\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "error",
        "error_duplicate"
      ],
      "line": 21,
      "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios;;1"
    },
    {
      "cells": [
        "admin@example.com",
        "password",
        "Invalid Email or password.",
        "has already been taken"
      ],
      "line": 22,
      "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8709711573,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Testing Error and Negative Scenarios",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios;testing-error-and-negative-scenarios;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@ErrorNegativeScenarios"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters invalid \"admin@example.com\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Error message \"Invalid Email or password.\" should get displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter blank user Id and password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Error message \"Invalid Email or password.\" should get displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"admin@example.com\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on Products",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click on New Product button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter Title,Sku and Description value as Blank",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Error message should be visible for all three fields",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Enters duplicate Title or sku",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Error message for duplicate \"has already been taken\" should be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Herokuapp_StepDefinition.user_is_on_the_website()"
});
formatter.result({
  "duration": 2949914570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@example.com",
      "offset": 21
    },
    {
      "val": "password",
      "offset": 45
    }
  ],
  "location": "Herokuapp_StepDefinition.user_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 836408175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email or password.",
      "offset": 15
    }
  ],
  "location": "Herokuapp_StepDefinition.error_message_should_get_displayed(String)"
});
formatter.result({
  "duration": 57725323,
  "status": "passed"
});
formatter.match({
  "location": "Herokuapp_StepDefinition.user_enter_blank_user_Id_and_password()"
});
formatter.result({
  "duration": 586136201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email or password.",
      "offset": 15
    }
  ],
  "location": "Herokuapp_StepDefinition.error_message_should_get_displayed(String)"
});
formatter.result({
  "duration": 45319631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@example.com",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 37
    }
  ],
  "location": "Herokuapp_StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1079844886,
  "status": "passed"
});
formatter.match({
  "location": "Herokuapp_StepDefinition.click_on_Products()"
});
formatter.result({
  "duration": 773111599,
  "status": "passed"
});
formatter.match({
  "location": "Herokuapp_StepDefinition.click_on_New_Product_button()"
});
formatter.result({
  "duration": 392681057,
  "status": "passed"
});
formatter.match({
  "location": "Herokuapp_StepDefinition.enter_Title_Sku_and_Description_value_as_Blank()"
});
formatter.result({
  "duration": 641041620,
  "status": "passed"
});
formatter.match({
  "location": "Herokuapp_StepDefinition.error_message_should_be_visible_for_all_three_fields()"
});
formatter.result({
  "duration": 152904596,
  "status": "passed"
});
formatter.match({
  "location": "Herokuapp_StepDefinition.user_Enters_duplicate_Title_or_sku()"
});
formatter.result({
  "duration": 846794488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "has already been taken",
      "offset": 29
    }
  ],
  "location": "Herokuapp_StepDefinition.error_message_for_duplicate_should_be_displayed(String)"
});
formatter.result({
  "duration": 73508825,
  "status": "passed"
});
formatter.match({
  "location": "Herokuapp_StepDefinition.click_on_Logout()"
});
formatter.result({
  "duration": 41463,
  "status": "passed"
});
formatter.after({
  "duration": 2019550490,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Testing Product creation,Updation,Listing and Deletion",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios;testing-product-creation,updation,listing-and-deletion",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@EndtoEndScenario"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user is on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "should be navigated to home page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click on Products",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Click on New Product button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Enter Unique values of Title,Sku and Description",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "click on Create Product",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "New Prodcut gets created and verify it \"\u003ccreated_message\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Update the product by updating values of Title,Sku and Description",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "check if value got updated \"\u003cupdated_message\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "check Products are listed and get all values",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on Delete",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "check if product got deleted \"\u003cdeleted_message\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "click on Logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "techverito-herokuapp-testing-scenarios;testing-product-creation,updation,listing-and-deletion;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "created_message",
        "updated_message",
        "deleted_message"
      ],
      "line": 46,
      "id": "techverito-herokuapp-testing-scenarios;testing-product-creation,updation,listing-and-deletion;;1"
    },
    {
      "cells": [
        "admin@example.com",
        "password",
        "Product was successfully created.",
        "Product was successfully updated.",
        "Product was successfully destroyed."
      ],
      "line": 47,
      "id": "techverito-herokuapp-testing-scenarios;testing-product-creation,updation,listing-and-deletion;;2"
    }
  ],
  "keyword": "Examples"
});
