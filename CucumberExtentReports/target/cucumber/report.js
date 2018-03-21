$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "login",
  "description": "\n\r\nIn order to perform login to facebook",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "In order to verify login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user navigate to facebook Website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "validate the title page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cusername\u003e \" userid",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter \"\u003cpassword\u003e\" passwords",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the age catagory",
  "rows": [
    {
      "cells": [
        "Age",
        "",
        "Location"
      ],
      "line": 13
    },
    {
      "cells": [
        "Below 18",
        "",
        "United States"
      ],
      "line": 14
    },
    {
      "cells": [
        "Above 18",
        "",
        "India"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user \"\u003cloginType\u003e\" successfully Loggedin",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password",
        "",
        "loginType"
      ],
      "line": 19,
      "id": "login;in-order-to-verify-login-to-facebook;;1"
    },
    {
      "cells": [
        "valid",
        "",
        "valid",
        "",
        "should"
      ],
      "line": 20,
      "id": "login;in-order-to-verify-login-to-facebook;;2"
    },
    {
      "cells": [
        "invalid",
        "",
        "invalid",
        "",
        "shouldnot"
      ],
      "line": 21,
      "id": "login;in-order-to-verify-login-to-facebook;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 569859,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "In order to verify login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigate to facebook Website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "validate the title page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"valid \" userid",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter \"valid\" passwords",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the age catagory",
  "rows": [
    {
      "cells": [
        "Age",
        "",
        "Location"
      ],
      "line": 13
    },
    {
      "cells": [
        "Below 18",
        "",
        "United States"
      ],
      "line": 14
    },
    {
      "cells": [
        "Above 18",
        "",
        "India"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user \"should\" successfully Loggedin",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_facebook_Website()"
});
formatter.result({
  "duration": 181443131,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.validate_the_title_page()"
});
formatter.result({
  "duration": 69615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid ",
      "offset": 12
    }
  ],
  "location": "LoginSteps.user_enter_valid_userid(String)"
});
formatter.result({
  "duration": 2444101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 12
    }
  ],
  "location": "LoginSteps.user_enter_valid_passwords(String)"
});
formatter.result({
  "duration": 102190,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_select_the_age_catagory(DataTable)"
});
formatter.result({
  "duration": 1337406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_shouldbe_successfully_Loggedin(String)"
});
formatter.result({
  "duration": 378864,
  "status": "passed"
});
formatter.after({
  "duration": 79432,
  "status": "passed"
});
formatter.before({
  "duration": 501137,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to verify login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigate to facebook Website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "validate the title page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter \"invalid \" userid",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter \"invalid\" passwords",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the age catagory",
  "rows": [
    {
      "cells": [
        "Age",
        "",
        "Location"
      ],
      "line": 13
    },
    {
      "cells": [
        "Below 18",
        "",
        "United States"
      ],
      "line": 14
    },
    {
      "cells": [
        "Above 18",
        "",
        "India"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user \"shouldnot\" successfully Loggedin",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_facebook_Website()"
});
formatter.result({
  "duration": 1332496,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.validate_the_title_page()"
});
formatter.result({
  "duration": 275335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid ",
      "offset": 12
    }
  ],
  "location": "LoginSteps.user_enter_valid_userid(String)"
});
formatter.result({
  "duration": 312820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 12
    }
  ],
  "location": "LoginSteps.user_enter_valid_passwords(String)"
});
formatter.result({
  "duration": 265964,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_select_the_age_catagory(DataTable)"
});
formatter.result({
  "duration": 367263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_shouldbe_successfully_Loggedin(String)"
});
formatter.result({
  "duration": 265071,
  "status": "passed"
});
formatter.after({
  "duration": 174037,
  "status": "passed"
});
});