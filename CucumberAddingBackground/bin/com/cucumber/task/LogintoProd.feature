Feature: login
  
  In order to perform login to facebook

  Background: 
    Given user navigate to facebook Website
    When validate the title page

  Scenario: In order to verify login to facebook
    Then user enter "valid" userid
    And user enter "valid" passwords
    And user validate the captcha	image
    Then user "shouldbe" successfully Loggedin

  Scenario: In order to verify login to facebook
    Then user enter "Invalid" userid
    And user enter "Invalid" passwords
    And user validate the captcha	image
    Then user "shouldnot" successfully Loggedin
