Feature: login
  
  In order to perform login to facebook

  Scenario: In order to verify login to facebook
    Given user navigate to facebook Website
    When validate the title page
    Then user enter "valid" userid
    And user enter "valid" passwords
    Then user "shouldbe" successfully Loggedin

  Scenario: In order to verify login to facebook as Invalid UserId
    Given user navigate to facebook Website
    When validate the title page
    Then user enter "invalid" userid
    And user enter "invalid" passwords
    Then user "shouldnot" successfully Loggedin
