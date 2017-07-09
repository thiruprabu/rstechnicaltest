package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java8.En;
import pages.Home_Page;
import pages.MyBasket_Page;
import pages.SearchResult_Page;
import pages.SecureCheckout_Delivery_Page;
import pages.SecureCheckout_Payment_Page;
import utils.ORDER;
import utils.Reporter;
import wrappers.GenericWrapper;

public class RSComponentsSteps  extends GenericWrapper implements En  {
	
	public RSComponentsSteps(){
		
				
		Given("^I am on Search result page$", () -> {
			
			new Home_Page()
			.searchProduct("Backplane Connectors");
			

		});

		
		
		When("^I sort by price in \"([^\"]*)\" order$", (String sortingOrder) -> {
			
			if(sortingOrder.toLowerCase().contains("asc")){
				new SearchResult_Page()
				.sortResultByPrice(ORDER.ASCENDING);
			}else{
				new SearchResult_Page()
				.sortResultByPrice(ORDER.DESCENDING);
			}
		});
		
		

		Then("^The results should sort by price in \"([^\"]*)\" order successfully$", (String sortingOrder) -> {
			
			if(sortingOrder.toLowerCase().contains("asc")){
				new SearchResult_Page()
				.validateProductPriceSortedOrder(ORDER.ASCENDING);
			}else{
				new SearchResult_Page()
				.validateProductPriceSortedOrder(ORDER.DESCENDING);
			}

		});

		Given("^I am on Search result page by searching \"([^\"]*)\"$", (String searchKeyword) -> {
			
			new Home_Page()
			.searchProduct(searchKeyword);

		});

		When("^I filter by \"([^\"]*)\" - \"([^\"]*)\"$", (String filterName, String filterOption) -> {
			
			new SearchResult_Page()
			.applyFilter(filterName, filterOption);

		});

		Then("^Each item displayed in Results should be of Brand \"([^\"]*)\"$", (String brandName) -> {
			
			new SearchResult_Page()
			.validateAppliedFilterByBrand(brandName);

		});

		Then("^Number of items displayed in Results should be equal to the number displayed against the brand in the filter selection window$", () -> {
			
			new SearchResult_Page()
			.validateAppliedFilterByResultCount();

		});

		Then("^By Default I should see \"([^\"]*)\" results per page$", (String count) -> {
			
			new SearchResult_Page()
			.validateResultsPerPage(count);
			
		});

		When("^I set the page to display \"([^\"]*)\" results$", (String count) -> {
			
			new SearchResult_Page()
			.setResultsPerPage(count);

		});

		Then("^I should see \"([^\"]*)\" results per page$", (String count) -> {
			
			new SearchResult_Page()
			.validateResultsPerPage(count);

		});
		
		When("^I add product with stock number \"([^\"]*)\" X \"([^\"]*)\" to basket$", (String stockNumber, String quantity) -> {

			new SearchResult_Page()
			.addToBasket(stockNumber, quantity);
			
		});
		
		
		When("^I Checkout securely from MyBasket as guest user with email id \"([^\"]*)\"$", (String emailID) -> {

			new MyBasket_Page()
			.checkoutSecurely()
			.guestCheckout(emailID);
			
		});
		
		
		
		When("^I go to MyBasket from Search results$", () -> {
			
			new SearchResult_Page()
			.goToMyBasket();

		});
		
		
		When("^I provide necessary delivery information and Continue to Payment$", () -> {

			 new SecureCheckout_Delivery_Page()
			 .fillPersonDetails("Mr.", "TestFirstName", "TestLastName", "7570012345")
			 .fillDeliveryInformation("RS Components Ltd", "Birchington Road", "Corby", "Northamptonshire", "NN17 5JF")
			 .continueToPayment();
		});
		
		
		
		Then("^I should see fields related to payments in Secure Checkout Payment page$", () -> {
			
			new SecureCheckout_Payment_Page()
			.validateCardNumberField()
			.validateCardNameField()
			.validateCardHolderNameField()
			.validateExpiryDateField()
			.validateSecurityCodeField();
		});
		
		
		
		
		Then("^I should see product with stock number \"([^\"]*)\" in the Basket$", (String stockNumber) -> {

			new MyBasket_Page()
			.validateProductAddedToBasket(stockNumber);
			
		});
		
		
		
		
		
		
		When("^I remove product with stock number \"([^\"]*)\" from the basket$", (String stockNumber) -> {
			
			new MyBasket_Page()
			.removeItemFromBasket(stockNumber);

		});

		Then("^I should not see product with stock number \"([^\"]*)\" in the Basket$", (String stockNumber) -> {
			
			new MyBasket_Page()
			.validateProductNotAddedToBasket(stockNumber);

		});

		When("^I add product with stock number \"([^\"]*)\" X \"([^\"]*)\" in the basket$", (String stockNumber, String quantity) -> {
			
			new MyBasket_Page()
			.addToBasket(stockNumber, quantity);

		});
		
	}
	
	
	
	
	
	@cucumber.api.java.Before
	public void beforeScenario(Scenario scenario) {
		
		Reporter.startResult(scenario.getName());
		Reporter.startTestCase(scenario.getName(), scenario.getName());
		
		invokeApp("firefox");
		deleteAllCookie();
	}

	@cucumber.api.java.After
	public void afterScenario(Scenario scenario) {
		
		if(scenario.isFailed()){
			final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
		}
		
		Reporter.endResult();
	    quitDriver();
	}

}
