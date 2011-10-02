Feature: Random soma.fm station
  In order to not be bored
  As a soma.fm fan
  I want to tune in a random soma.fm station

  Scenario: gimme a random soma.fm station
    Given I visit the entrance
    When I press 'random soma.fm'
    Then I should see a soma.fm station running
