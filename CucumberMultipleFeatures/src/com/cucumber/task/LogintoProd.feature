Feature: login
  
  In order to perform login to facebook

  Scenario: In order to verify login to facebook
    Given user navigate to facebook Website
    When validate the title page
    Then user enter "valid" userid
    And user enter "valid" passwords
    And user validate the captcha	image
    Then user "shouldbe" successfully Loggedin

  Scenario: In order to verify login to facebook
    Given user navigate to facebook Website
    When validate the title page
    Then user enter "Invalid" userid
    And user enter "Invalid" passwords
    And user validate the captcha	image
    Then user "shouldnot" successfully Loggedin
