$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/user.feature");
formatter.feature({
  "name": "User Verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "three point verification(UI,DATABASE,API) DDF",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "user logs in using \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.step({
  "name": "I logged Bookit api using \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "sbirdbj@fc2.com",
        "asenorval"
      ]
    },
    {
      "cells": [
        "ccornil1h@usnews.com",
        "corniecornil"
      ]
    }
  ]
});
formatter.scenario({
  "name": "three point verification(UI,DATABASE,API) DDF",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"sbirdbj@fc2.com\" \"asenorval\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bookit.step_definitions.MyInfoStepDefs.user_logs_in_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged Bookit api using \"sbirdbj@fc2.com\" and \"asenorval\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_logged_Bookit_api_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.ui_API_and_Database_user_information_must_be_match()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "three point verification(UI,DATABASE,API) DDF",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"ccornil1h@usnews.com\" \"corniecornil\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bookit.step_definitions.MyInfoStepDefs.user_logs_in_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged Bookit api using \"ccornil1h@usnews.com\" and \"corniecornil\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_logged_Bookit_api_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.ui_API_and_Database_user_information_must_be_match()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});