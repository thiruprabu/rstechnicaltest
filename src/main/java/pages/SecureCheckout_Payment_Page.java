package pages;

import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import wrappers.GenericWrapper;
/**
 * Page class for the page : SecureCheckout_Payment_Page
 * All the user actions to be performed on this page is created as reusable methods which will act on a repository of objects on this page. 
 * 
 * @author Thiru
 */
public class SecureCheckout_Payment_Page extends GenericWrapper {
	
	final static Logger logger = Logger.getLogger(SecureCheckout_Payment_Page.class);
	
	private String pageHeader = "Select card type";
	
	@FindBy(how = How.ID, using = "checkoutSecurelyBtn")
    private WebElement continueToOrderReview;
	
	@FindAll(@FindBy(how = How.XPATH, using = ".//input[contains(@class,'cardNumber')]"))
    private List<WebElement> cardNumberTextBoxes;
	
	@FindBy(how = How.XPATH, using = ".//input[contains(@id,'cardName')]")
    private WebElement cardNameTextBox;
	
	@FindBy(how = How.XPATH, using = ".//input[contains(@id,'cardHolder')]")
    private WebElement cardHolderNameTextBox;
	
	@FindBy(how = How.XPATH, using = ".//input[contains(@id,'expiryDate')]")
    private WebElement expiryDateTextBox;
	
	@FindBy(how = How.XPATH, using = ".//input[contains(@id,'securityCode')]")
    private WebElement securityCodeTextBox;
	
	/**
	 * Constructor which will initialize page factory with the driver and performs basic validation of the page.
	 * Incase if the validation is failed, it will throw exception.
	 */
	public SecureCheckout_Payment_Page(){
		
		PageFactory.initElements(driver, this);
		
		addExplicitWait(continueToOrderReview, "clickable", 30);
		
		if(!(softTextCheck(pageHeader))){
			logger.fatal("The expected page headers : " + pageHeader +" not found on the current page. This is NOT Secure Checkout Payment Page!");
        	throw new RuntimeException("The expected page headers : " + pageHeader +" not found on the current page. This is NOT Secure Checkout Payment Page!");
        }
		
		logger.info("SecureCheckout_Payment_Page constructor passed.");
	}
	
	
	
	/**
	 * This method validates the presence of CardNumber field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateCardNumberField(){
		
		if(cardNumberTextBoxes.size() != 4 || !cardNumberTextBoxes.get(0).isDisplayed() || !cardNumberTextBoxes.get(0).isEnabled()){
			logger.fatal("Card number fields validation Failed!");
			throw new RuntimeException("Card number fields validation Failed!");
		}
		
		logger.info("validateCardNumberField in SecureCheckout_Payment_Page page passed.");
		return this;
	}
	
	
	/**
	 * This method validates the presence of CardName field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateCardNameField(){
		
		if(!cardNameTextBox.isDisplayed() || !cardNameTextBox.isEnabled()){
			logger.fatal("Card name field validation Failed!");
			throw new RuntimeException("Card name field validation Failed!");
		}
		
		logger.info("validateCardNameField in SecureCheckout_Payment_Page page passed.");
		return this;
	}
	
	
	/**
	 * This method validates the presence of CardHolderName field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateCardHolderNameField(){
		
		if(!cardHolderNameTextBox.isDisplayed() || !cardHolderNameTextBox.isEnabled()){
			logger.fatal("Card holder name field validation Failed!");
			throw new RuntimeException("Card holder name field validation Failed!");
		}
		
		logger.info("validateCardHolderNameField in SecureCheckout_Payment_Page page passed.");
		return this;
	}
	
	/**
	 * This method validates the presence of expiryDate field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateExpiryDateField(){
		
		if(!expiryDateTextBox.isDisplayed() || !expiryDateTextBox.isEnabled()){
			logger.fatal("Expiry date field validation Failed!");
			throw new RuntimeException("Expiry date field validation Failed!");
		}
		
		logger.info("validateExpiryDateField in SecureCheckout_Payment_Page page passed.");
		return this;
	}
	
	
	/**
	 * This method validates the presence of SecurityCode field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateSecurityCodeField(){
		
		if(!securityCodeTextBox.isDisplayed() || !securityCodeTextBox.isEnabled()){
			logger.fatal("Security code field validation Failed!");
			throw new RuntimeException("Security code field validation Failed!");
		}
		
		logger.info("validateSecurityCodeField in SecureCheckout_Payment_Page page passed.");
		
		return this;
	}

}
