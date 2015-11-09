package com.bdt.webdriver;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.junit.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.Given;

public class StepDef extends CukeRunner {

	private WebDriver driver;
	private String baseUrl;

	private boolean isElementPresent(By by) {
		try {
			driver.findElement(by);
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}


	@Given("^I open \"(.*?)\"$")
	public void i_open(String arg1) {
		driver = new FirefoxDriver();
		baseUrl = "http://localhost:8080/";
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@Given("^I visit \"(.*?)\"$")
	public void i_visit(String arg1) {
		baseUrl = "http://localhost:8080/";
		driver.get(baseUrl + "/blackjack/");
	}

	@When("^I enter click the \"(.*?)\" button$")
	public void i_enter_click_the_button(String arg1) throws Throwable {
	    driver.findElement(By.id("start")).click();
		throw new PendingException();
	}

	@Then("^I should see the alert pop up$")
	public void i_should_see_the_alert_pop_up() throws Throwable {
		System.out.println("Alert pop up.");
		throw new PendingException();
	}

	@Then("^I type \"(.*?)\"$")
	public void i_type(String arg1) throws Throwable {
	    String promptAnswer = "2";
	    Alert alert = driver.switchTo().alert();
	    alert.sendKeys(promptAnswer);
	    alert.accept();
		throw new PendingException();
	}

	@Then("^I should see the \"(.*?)\" div$")
	public void i_should_see_the_div(String arg1) throws Throwable {
	    assertTrue(isElementPresent(By.id("player2_hand")));
		throw new PendingException();
	}

	@Then("^Player's cards should be hidden$")
	public void hiddenCards()	throws Throwable	{
		String test1 = driver.findElement(By.id("dealer_hand")).getText();
	      if(test1.contains("HIDDEN"))	{
	    	  test1 = "HIDDEN";
	      }
	     assertEquals("HIDDEN", test1);
		throw new PendingException();
	}
	
	@Then("^After I stand, player2 should be ready to go$")
	public void player2Ready()	throws Throwable	{
	    driver.findElement(By.id("player1-stand")).click();
		String test1 = driver.findElement(By.id("player2_hand")).getText();
		boolean temp = false;
	      if(test1.contains("HIDDEN") == false)	{
	    	  temp = true;
	      }
	     assertEquals(true, temp);
		throw new PendingException();
	}
	
	@Then("^Player2 should stand$")
	public void player2Stand()	throws Throwable	{
	    driver.findElement(By.id("player2-stand")).click();
		throw new PendingException();
	}
	
	@Then("^A winner should be declared")
	public void checkWinner()	throws Throwable	{
		if (driver instanceof JavascriptExecutor) {
			((JavascriptExecutor) driver)
			.executeScript("player1_hand[0] = 2;  player1_hand[1] = 2; player2_hand[0] = 10; player2_hand[1] = 1; player2_hand[2] = 0; dealer_hand[0] = 2; dealer_hand[1] = 2;");
		}
		driver.findElement(By.id("player2-stand")).click();
		assertEquals("Loser", driver.findElement(By.id("player1_hand")).getText());
		assertEquals("Winner", driver.findElement(By.id("player2_hand")).getText());
		throw new PendingException();
	}


	@Given("^Game is running$")
	public void startGame()	throws Throwable	{
		i_open("firefox");
		i_visit("");
		i_enter_click_the_button("");
		i_should_see_the_alert_pop_up();
		i_type("2");
	}

	@When("^I click the \"hit\" button for player1$")
	public void setPlayerCards() throws Throwable {
		String javascriptCMD = "for(var i = 0; i < 6; i++)	{player1_hand[i] = 1;}";

		if (driver instanceof JavascriptExecutor) {
			((JavascriptExecutor) driver)
			.executeScript(javascriptCMD);
		}
		driver.findElement(By.id("player1-hit")).click();

		throw new PendingException();
	}


	@Then("^A winner is declared$")
	public void declareWinner() throws Throwable {
		assertEquals("Winner, 7-card charlie", driver.findElement(By.id("player1_hand")).getText());
		assertEquals("Please start a new game.", driver.findElement(By.id("dealer_hand")).getText());
		assertEquals("You lose.", driver.findElement(By.id("player2_hand")).getText());
		throw new PendingException();
	}

	@When("^Player hits and total is over 21$")
	public void playerOver21() throws Throwable {
		String javascriptCMD = "player1_hand[0] = 19;";
		if (driver instanceof JavascriptExecutor) {
			((JavascriptExecutor) driver)
			.executeScript(javascriptCMD);
		}
		driver.findElement(By.id("player1-hit")).click();
		throw new PendingException();
	}

	@Then("^Player busts$")
	public void didPlayerBust() throws Throwable {
		assertEquals("Busted", driver.findElement(By.id("player1_hand")).getText());
		throw new PendingException();
	}


	@When("^Clicks on reset$")
	public void clicksOnReset() throws Throwable {
		driver.findElement(By.id("reset")).click();
		throw new PendingException();
	}

	@When("^Clicks on Play Game$")
	public void clicksOnStart() throws Throwable {
		driver.findElement(By.id("start")).click();
		throw new PendingException();
	}
	
}
