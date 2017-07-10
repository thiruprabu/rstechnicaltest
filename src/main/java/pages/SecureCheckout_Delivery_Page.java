package pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.UA_TYPE;
import wrappers.GenericWrapper;
/**
 * Page class for the page : SecureCheckout_Delivery_Page
 * All the user actions to be performed on this page is created as reusable methods which will act on a repository of objects on this page. 
 * 
 * @author Thiru
 */
public class SecureCheckout_Delivery_Page extends GenericWrapper {
	
	final static Logger logger = Logger.getLogger(SecureCheckout_Delivery_Page.class);
	
	private String pageHeader = "First name";
	
	@FindBy(how = How.ID, using = "checkoutSecurelyBtn")
    private WebElement continueToPayment;
	
	@FindBy(how = How.XPATH, using = ".//select[@class='title formInput']")
    private WebElement titileDropdown;
	
	@FindBy(how = How.XPATH, using = ".//input[@class='firstName textInput inputText']")
    private WebElement firstNameTextBox;
	
	@FindBy(how = How.XPATH, using = ".//input[@class='surName textInput inputText']")
    private WebElement lastNameTextBox;
	
	@FindBy(how = How.XPATH, using = ".//input[@class='contactNumber textInput inputText']")
    private WebElement contactNumberTextBox;
	
	@FindBy(how = How.XPATH, using = ".//input[@class='companyNameOne textInput inputText']")
    private WebElement companyNameTextBox;
	
	@FindBy(how = How.XPATH, using = ".//input[@class='addressLineOne textInput inputText']")
    private WebElement addressLine1TextBox;
	
	@FindBy(how = How.XPATH, using = ".//input[contains(@id,'addressLineThree')]")
    private WebElement townTextBox;
	
	@FindBy(how = How.XPATH, using = ".//select[contains(@id,'selectedRegion')]")
    private WebElement countyDropdown;
	
	@FindBy(how = How.XPATH, using = ".//input[contains(@class,'postCode')]")
    private WebElement postcodeTextBox;
	

	
	/**
	 * Constructor which will initialize page factory with the driver and performs basic validation of the page.
	 * Incase if the validation is failed, it will throw exception.
	 */
	public SecureCheckout_Delivery_Page(){
		
		PageFactory.initElements(driver, this);
		
		addExplicitWait(continueToPayment, "clickable", 30);
		
		if(!(softTextCheck(pageHeader))){
			logger.fatal("The expected page headers : " + pageHeader +" not found on the current page. This is NOT Secure Checkout Delivery Page!");
        	throw new RuntimeException("The expected page headers : " + pageHeader +" not found on the current page. This is NOT Secure Checkout Delivery Page!");
        }
		
		logger.info("SecureCheckout_Delivery_Page constructor passed.");
	}
	
	
	
	/**
	 * This method fills in all the details such as title, firstName, lastName, contactNumber in their respective feilds in Delivery page.
	 *  
	 * @param title
	 * @param firstName
	 * @param lastName
	 * @param contactNumber
	 * @return
	 */
	public SecureCheckout_Delivery_Page fillPersonDetails(String title, String firstName, String lastName, String contactNumber){
		
		try {
			simpleUserAction(titileDropdown, UA_TYPE.SELECT_DROPDOWN_OPTION, title);
			simpleUserAction(firstNameTextBox, UA_TYPE.CLICK_AND_TYPE, firstName);
			simpleUserAction(lastNameTextBox, UA_TYPE.CLICK_AND_TYPE, lastName);
			simpleUserAction(contactNumberTextBox, UA_TYPE.CLICK_AND_TYPE, contactNumber);
		} catch (Exception e) {
			logger.fatal("Cannot fill person details in Delivery page!");
        	throw new RuntimeException("Cannot fill person details in Delivery page!");
		}
		
		logger.info("fillPersonDetails in SecureCheckout_Delivery_Page page passed.");
		return this;
	}
	
	
	
	
	/**
	 * This method fills in address in their respective fields. 
	 * 
	 * @param companyName
	 * @param addressLine1
	 * @param town
	 * @param county
	 * @param postcode
	 * @return
	 */
	public SecureCheckout_Delivery_Page fillDeliveryInformation(String companyName, String addressLine1, String town, String county, String postcode){
		
		try {
			simpleUserAction(companyNameTextBox, UA_TYPE.CLICK_AND_TYPE, companyName);
			simpleUserAction(addressLine1TextBox, UA_TYPE.CLICK_AND_TYPE, addressLine1);
			simpleUserAction(townTextBox, UA_TYPE.CLICK_AND_TYPE, town);
			simpleUserAction(countyDropdown, UA_TYPE.SELECT_DROPDOWN_OPTION, county);
			simpleUserAction(postcodeTextBox, UA_TYPE.CLICK_AND_TYPE, postcode);
		} catch (Exception e) {
			logger.fatal("Cannot fill delivery information details in Delivery page!");
        	throw new RuntimeException("Cannot fill delivery information details in Delivery page!");
		}
		
		logger.info("fillDeliveryInformation in SecureCheckout_Delivery_Page page passed.");
		return this;
	}
	
	
	/**
	 * This method clicks on continue to payment button.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page continueToPayment(){
		try {
			simpleUserAction(continueToPayment, UA_TYPE.CLICK, null);
		} catch (Exception e) {
			logger.fatal("Cannot continue to payment from delivery page!");
        	throw new RuntimeException("Cannot continue to payment from delivery page!");
		}
		
		logger.info("continueToPayment in SecureCheckout_Delivery_Page page passed.");
		return new SecureCheckout_Payment_Page();
	}

}
