package steps;

import java.sql.Driver;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class carSearchSteps {

	public static WebDriver driver;

	@Before
	public void setUP() {

		driver = new FirefoxDriver();
	}

	@After
	public void tearDown(Scenario scenario) {

		if (scenario.isFailed()) {
			byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotBytes, "image/png");
		}

		if (driver != null) {
			driver.quit();
		}

	}

	@Given("^I am on the homepage https://www\\.carsguide\\.com\\.au/ of carsguide website$")
	public void i_am_on_the_homepage_https_www_carsguide_com_au_of_carsguide_website() throws Throwable {

		driver.get("https://www.carsguide.com.au/");
	}

	@When("^I move to Car for Sale Menu$")
	public void i_move_to_Car_for_Sale_Menu() throws Throwable {

		WebElement menu = driver.findElement(By.xpath("//*[@id='view_car_deal']/a[1]"));
		new Actions(driver).moveToElement(menu).perform();
	}

	@Then("^I click on Search Cars$")
	public void i_click_on_Search_Cars() throws Throwable {

		driver.findElement(By.xpath("//*[@id='view_car_deal']/ul/li[1]/a")).click();

	}

	@Then("^I select Make as \"([^\"]*)\"$")
	public void i_select_Make_as(String make) throws Throwable {

		new Select(driver.findElement(By.xpath("//*[@id='makes']"))).selectByVisibleText(make);

	}

	@Then("^I select Model as \"([^\"]*)\"$")
	public void i_select_Model_as(String model) throws Throwable {
		new Select(driver.findElement(By.xpath("//*[@id='models']"))).selectByVisibleText(model);

	}

	@Then("^I select location as \"([^\"]*)\"$")
	public void i_select_location_as(String location) throws Throwable {

		new Select(driver.findElement(By.xpath("//*[@id='locations']"))).selectByVisibleText(location);

	}

	@Then("^I select price as \"([^\"]*)\"$")
	public void i_select_price_as(String price) throws Throwable {
		new Select(driver.findElement(By.xpath("//*[@id='price-max']"))).selectByVisibleText(price);

	}

	@Then("^I click on Find My Next Car button$")
	public void i_click_on_Find_My_Next_Car_button() throws Throwable {

		driver.findElement(By.xpath("//*[@id='search-submit']")).click();

	}

	@Then("^I should see list of searched cars$")
	public void i_should_see_list_of_searched_cars() throws Throwable {
//		Assert.assertTrue(driver.findElement(By.xpath("//*[@id='pos1']/div[2]/div[2]/div[1]/div[1]/h5")).getText()
//				.contains("BMW "));

	}

	@Then("^the title should be \"([^\"]*)\"$")
	public void the_title_should_be(String arg1) throws Throwable {

	//	Assert.assertTrue(expected, driver.getTitle());
	}

}
