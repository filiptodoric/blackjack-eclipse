package com.example.tests;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;

import org.junit.*;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class TestClass5 {
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
  public void testClass5() throws Exception {
    driver.get(baseUrl + "/blackjack/");
    sendAlert();
    try {
      String test1 = driver.findElement(By.id("player1_hand")).getText();
      if(test1.contains("HIDDEN") == false)	{
    	  test1 = "";
      }
      assertEquals("", test1);
    } catch (Error e) {
      verificationErrors.append(e.toString());
    }
    driver.findElement(By.id("player1-stand")).click();
    try {
      String test1 = driver.findElement(By.id("player1_hand")).getText();
      if(test1.contains("HIDDEN"))	{
    	  test1 = "HIDDEN";
      }
      assertEquals("HIDDEN", test1);
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