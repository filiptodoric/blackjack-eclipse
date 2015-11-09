package cucumber;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.*;
import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		format={"pretty", "html:target/cucumber"},
		features = {"src/cucumber/"}
		)
public class RunTests {
	
}