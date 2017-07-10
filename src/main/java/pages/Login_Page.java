package pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.UA_TYPE;
import wrappers.GenericWrapper;
/**
 * Page class for the page : Login_Page
 * All the user actions to be performed on this page is created as reusable methods which will act on a repository of objects on this page. 
 * 
 * @author Thiru
 */
public class Login_Page extends GenericWrapper {
	
	final static Logger logger = Logger.getLogger(Login_Page.class);
	
	private String pageHeader = "Log in or continue as a guest";
	
	@FindBy(how = How.ID, using = "guestCheckoutForm:guestCheckout")
    private WebElement guestCheckoutButton;
	
	@FindBy(how = How.ID, using = "guestCheckoutForm:GuestWidgetAction_emailAddress_decorate:GuestWidgetAction_emailAddress")
    private WebElement guestEmailAddressTextBox;
	
	/**
	 * Constructor which will initialize page factory with the driver and performs basic validation of the page.
	 * Incase if the validation is failed, it will throw exception.
	 */
	public Login_Page(){
		
		PageFactory.initElements(driver, this);
		
		addExplicitWait(guestCheckoutButton, "clickable", 30);
		
		if(!(softTextCheck(pageHeader))){
			logger.fatal("The expected page headers : " + pageHeader +" not found on the current page. This is NOT Login Page!");
        	throw new RuntimeException("The expected page headers : " + pageHeader +" not found on the current page. This is NOT Login Page!");
        }
		
		logger.info("Login_Page() constructor passed.");
	}
	
	
	
	
	
	/**
	 * This method does guest checkout after providing the given guest mail id
	 * 
	 * @param guestEmailId
	 * @return
	 */
	public SecureCheckout_Delivery_Page guestCheckout(String guestEmailId){
		
		try {
			simpleUserAction(guestEmailAddressTextBox, UA_TYPE.CLICK_AND_TYPE, guestEmailId);
			simpleUserAction(guestCheckoutButton, UA_TYPE.CLICK, null);
		} catch (Exception e) {
			logger.fatal("Guest Checkout on Login page failed!");
        	throw new RuntimeException("Guest Checkout on Login page failed!");
		}
		
		logger.info("guestCheckout in Login_Page passed.");
		return new SecureCheckout_Delivery_Page();
	}

}
