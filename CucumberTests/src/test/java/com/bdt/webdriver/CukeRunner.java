package com.bdt.webdriver;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(
		format={"pretty", "html:target/cucumber"},
		features={"src/test/resources"}
		)

public class CukeRunner {

	public static WebDriver driveer;
	public static DesiredCapabilities browserCaps;
	
	@BeforeClass
	public static void setUp() {
		
		browserCaps = new DesiredCapabilities();
		browserCaps.setJavascriptEnabled(true);
		browserCaps.setCapability("takesScreenshot", true);
		browserCaps.setCapability("handleAlerts", true);
		browserCaps.setCapability("acceptsSslCerts", true);

	}
	
	@AfterClass
	public static void tearDown() {
		driveer.quit();
	}
	
}
