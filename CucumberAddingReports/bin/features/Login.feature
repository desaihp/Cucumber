@sanity
Feature: login
  
  
  In order to perform login to facebook

  Scenario Outline: In order to verify login to facebook
    Given user navigate to facebook Website
    When validate the title page
    Then user enter "<username> " userid
    And user enter "<password>" passwords
    And user select the age catagory
      | Age      |  | Location      |
      | Below 18 |  | United States |
      | Above 18 |  | India         |
    Then user "<loginType>" successfully Loggedin

    Examples: 
      | username |  | password |  | loginType |
      | valid    |  | valid    |  | should    |
      | invalid  |  | invalid  |  | shouldnot |
