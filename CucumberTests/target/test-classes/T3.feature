Feature: 7 Card Charlie is a auto win

Background:
	Given I open "firefox"
	Given I visit "http://localhost:8080/blackjack/"
	Given Game is running
	
Scenario: Player has 6 cards
	When I click the "hit" button for player1
	Then A winner is declared