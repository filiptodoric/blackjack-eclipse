package com.example.tests;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;

import org.junit.*;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class TestClass9 {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @Before
  public void setUp() throws Exception {
    driver = new FirefoxDriver();
    baseUrl = "http://localhost:8080/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  public void sendAlert()	{
	    String promptAnswer = "2";
	    driver.findElement(By.id("start")).click();
	    Alert alert = driver.switchTo().alert();
	    alert.sendKeys(promptAnswer);
	    alert.accept();
  }
  
  @Test
  public void testClass9() throws Exception {
    driver.get(baseUrl + "/blackjack/");
    sendAlert();
    driver.findElement(By.id("player1-stand")).click();
    driver.findElement(By.id("player2-hit")).click();
    if (driver instanceof JavascriptExecutor) {
    	((JavascriptExecutor) driver)
    	.executeScript("player1_hand[0] = 2;  player1_hand[1] = 2; player2_hand[0] = 10; player2_hand[1] = 1; player2_hand[2] = 0; dealer_hand[0] = 2; dealer_hand[1] = 2;");
    }
    driver.findElement(By.id("player2-stand")).click();

    
    try {
      assertEquals("Loser", driver.findElement(By.id("player1_hand")).getText());
    } catch (Error e) {
      verificationErrors.append(e.toString());
    }
    try {
      assertEquals("Winner", driver.findElement(By.id("player2_hand")).getText());
    } catch (Error e) {
      verificationErrors.append(e.toString());
    }
  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
