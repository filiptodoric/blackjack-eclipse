Feature: Game play (hidden cards, player order, must declare winners)

Background:
	Given I open "firefox"
	Given I visit "http://localhost:8080/blackjack/"
	
Scenario: Play a round
	When I enter click the "start" button
	Then I should see the alert pop up
	Then I type "2"
	Then I should see the "player2_hand" div
	Then Player's cards should be hidden
	Then After I stand, player2 should be ready to go
	Then Player2 should stand
	Then A winner should be declared
	