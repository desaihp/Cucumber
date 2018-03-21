package runner;

//import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/features" }, glue = { "steps" }, monochrome = true, tags = { "@sanity" })
public class RunCuke extends AbstractTestNGCucumberTests {

}
