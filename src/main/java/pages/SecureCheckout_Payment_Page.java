package pages;

import java.util.List;

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
        	throw new RuntimeException("The expected page headers : " + pageHeader +" not found on the current page. This is NOT Secure Checkout Payment Page!");
        }
	}
	
	
	
	/**
	 * This method validates the presence of CardNumber field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateCardNumberField(){
		
		if(cardNumberTextBoxes.size() != 4 || !cardNumberTextBoxes.get(0).isDisplayed() || !cardNumberTextBoxes.get(0).isEnabled()){
			throw new RuntimeException("Card number fields validation Failed!");
		}
		
		return this;
	}
	
	
	/**
	 * This method validates the presence of CardName field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateCardNameField(){
		
		if(!cardNameTextBox.isDisplayed() || !cardNameTextBox.isEnabled()){
			throw new RuntimeException("Card name field validation Failed!");
		}
		
		return this;
	}
	
	
	/**
	 * This method validates the presence of CardHolderName field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateCardHolderNameField(){
		
		if(!cardHolderNameTextBox.isDisplayed() || !cardHolderNameTextBox.isEnabled()){
			throw new RuntimeException("Card holder name field validation Failed!");
		}
		
		return this;
	}
	
	/**
	 * This method validates the presence of expiryDate field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateExpiryDateField(){
		
		if(!expiryDateTextBox.isDisplayed() || !expiryDateTextBox.isEnabled()){
			throw new RuntimeException("Expiry date field validation Failed!");
		}
		
		return this;
	}
	
	
	/**
	 * This method validates the presence of SecurityCode field. If not present, it will throw exception.
	 * 
	 * @return
	 */
	public SecureCheckout_Payment_Page validateSecurityCodeField(){
		
		if(!securityCodeTextBox.isDisplayed() || !securityCodeTextBox.isEnabled()){
			throw new RuntimeException("Security code field validation Failed!");
		}
		
		return this;
	}

}
