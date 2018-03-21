Feature: validate car search page
  In order to validate car search	
  as a buyer
  I navigate https://www.carsguide.com.au/

  Scenario: Searching for a new car
    Given I am on the homepage https://www.carsguide.com.au/ of carsguide website
    When I move to Car for Sale Menu
    Then I click on Search Cars
    And I select Make as "BMW"
    And I select Model as "1SERIES"
    And I select location as "Australia"
    And I select price as "$10000"
    And I click on Find My Next Car button
    Then I should see list of searched cars from "BMW"
    And the title should be "Bmw 1 Series Cars under $ 10000 for Sale | CarsGuide"
