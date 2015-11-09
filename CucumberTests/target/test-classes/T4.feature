Feature: Busted hands lose automatically

Background:
	Given Game is running
	
Scenario: Player starts turn
	When Player hits and total is over 21
	Then Player busts