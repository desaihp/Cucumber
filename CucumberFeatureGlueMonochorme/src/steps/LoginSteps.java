
package steps;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	@Given("^user navigate to facebook Website$")
	public void user_navigate_to_facebook_Website() throws Throwable {
		System.out.println("@Given -- User navigate to facebook.com");

	}

	@When("^validate the title page$")
	public void validate_the_title_page() throws Throwable {
		System.out.println("@When-- User validate the title page");

	}

	@Then("^user enter \"([^\"]*)\" userid$") // or u can used valid
												// userId
	// and
	// all basic method
	public void user_enter_valid_userid(String userid) throws Throwable {
		System.out.println("@Then -- User enter " + userid + " userId");

	}
	// when we have to pass paremeter then we should to be do as a blacket and
	// pass a parameter the blacket is mapped with the argument

	@Then("^user enter \"([^\"]*)\" passwords$")
	public void user_enter_valid_passwords(String passwords) throws Throwable {
		System.out.println("@And -- User enter " + passwords + "password");

	}

	@Then("^user \"([^\"]*)\" successfully Loggedin$")
	public void user_shouldbe_successfully_Loggedin(String validateLoggedIn) throws Throwable {

		System.out.println("@Then -- user " + validateLoggedIn + " successfully LoggedIn");
	}

	@And("^user select the age catagory$")
	// public void user_select_the_age_catagory(List<String> list) throws
	// Throwable { //for list operation
	public void user_select_the_age_catagory(DataTable table) throws Throwable {
		List<Map<String, String>> data = table.asMaps(String.class, String.class);

		System.out.println("@And-- user select the age catagory :" + data.get(0).get("Age")
				+ "---Selected Location as: " + data.get(0).get("Location"));
		System.out.println("@And-- user select the age catagory :" + data.get(1).get("Age")
				+ "---Selected Location as: " + data.get(1).get("Location"));

		// System.out.println("@And-- user select the age catagory :" +
		// list.get(1));
		// System.out.println("@And-- user select the age catagory :" +
		// list.get(2));

	}

}
