Feature: Google Search
	As a Google user
	I want to search for things
	So I can find those things

Background:
	Given I open "firefox"
	Given I visit "http://google.com"
	
Scenario: Search for Bruce Lee
	When I enter "Bruce Lee" into the "gbqfq" field
	Then I should see the "Google" title
	Then I click on the "Bruce Lee - Wikipedia, the free encyclopedia" link
	Then I should see the "Bruce Lee" text
	
