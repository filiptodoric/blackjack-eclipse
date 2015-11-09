Feature: Player's can use AI

Background:
	Given Game is running
	
Scenario: Let AI handle user behaviour
	When Player clicks on AI
	Then Player's round is over