package com.cucumber.task;

import cucumber.api.java.en.Then;

public class LoginProdStep {

	@Then("^user validate the captcha	image$")
	public void user_validate_the_captcha_image() throws Throwable {

		System.out.println("@Then-- user the captch image");

	}
}