package com.example.tests;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;

import org.junit.*;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class TestClass10 {
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
  public void testClass10() throws Exception {
    driver.get(baseUrl + "/blackjack/");
    sendAlert();
    String player1Before = driver.findElement(By.id("player1_hand")).getText();
    driver.findElement(By.id("player1-ai")).click();
    String player1After = driver.findElement(By.id("player1_hand")).getText();
    try {
      boolean changed = false;
      if(player1Before != player1After)	{
    	  changed = true;
      }
      assertEquals(true, changed);
    } catch (Error e) {
      verificationErrors.append(e.toString());
    }
    driver.findElement(By.id("player1-stand")).click();
    String player2Before = driver.findElement(By.id("player2_hand")).getText();
    driver.findElement(By.id("player1-ai")).click();
    String player2After = driver.findElement(By.id("player2_hand")).getText();
    try {
      boolean changed = false;
      if(player2Before != player2After)	{
    	  changed = true;
      }
      assertEquals(true, changed);
    } catch (Error e) {
      verificationErrors.append(e.toString());
    }
    driver.findElement(By.id("player2-stand")).click();
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
