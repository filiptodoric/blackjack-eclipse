Feature: Start Game

Background:
	Given I open "firefox"
	Given I visit "http://localhost:8080/blackjack/"
	
Scenario: Start game
	When I enter click the "start" button
	Then I should see the alert pop up
	Then I type "2"
	Then I should see the "player2_hand" div
	
