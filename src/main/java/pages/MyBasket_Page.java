package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.BY_TYPE;
import utils.UA_TYPE;
import wrappers.GenericWrapper;
/**
 * Page class for the page : MyBasket_Page
 * All the user actions to be performed on this page is created as reusable methods which will act on a repository of objects on this page. 
 * 
 * @author Thiru
 */
public class MyBasket_Page extends GenericWrapper {
	
	private String pageHeader = "My basket";
	private String removeItemFromBasketHyperLinkGenericXPath = ".//span[contains(text(),'#CAPTION#')]/following::td[1]//div[2]/a";
	
	
	@FindBy(how = How.ID, using = "checkoutSecurelyAndPuchBtn")
    private WebElement checkoutSecurelyButton;
	
	@FindBy(how = How.XPATH, using = "(.//input[@class='inputText quickStockNo'])[1]")
    private WebElement stockNumberTextBox;
	
	@FindBy(how = How.XPATH, using = "(.//input[@class='inputText inputQty numbersOnly'])[1]")
    private WebElement stockQuantityTextBox;
	
	@FindBy(how = How.XPATH, using = ".//span[@id='quickAddProductBtn']")
    private WebElement addButton;
	
	@FindBy(how = How.XPATH, using = ".//span[contains(text(),'Are you sure you want to remove the selected item(s)?')]/following::div[@class='floatRight']//a[1]/span")
    private WebElement removeItemContinue;
	
	/**
	 * Constructor which will initialize page factory with the driver and performs basic validation of the page.
	 * Incase if the validation is failed, it will throw exception.
	 */
	public MyBasket_Page(){
		
		PageFactory.initElements(driver, this);
		
		addExplicitWait(checkoutSecurelyButton, "clickable", 30);
		
		if(!(softTextCheck(pageHeader))){
        	throw new RuntimeException("The expected page headers : " + pageHeader +" not found on the current page. This is NOT MyBasket Page!");
        }
	}
	
	
	
	
	/**
	 * This method clicks the button Checkout securely
	 * 
	 * @return
	 */
	public Login_Page checkoutSecurely(){
		simpleUserAction(checkoutSecurelyButton, UA_TYPE.CLICK, null);
		return new Login_Page();
	}
	
	
	/**
	 * This method adds the product with the given stockNumber for the given quantity.
	 * 
	 * @param stockNumber
	 * @param quantity
	 * @return
	 */
	public MyBasket_Page addToBasket(String stockNumber, String quantity){
		simpleUserAction(stockNumberTextBox, UA_TYPE.CLICK_AND_TYPE, stockNumber);
		simpleUserAction(stockQuantityTextBox, UA_TYPE.CLICK_AND_TYPE, quantity);
		simpleUserAction(addButton, UA_TYPE.CLICK, null);
		return this;
	}
	
	
	/**
	 * This method removes the product with the given stockNumber from the basket.
	 * 
	 * @param stockNumber
	 * @return
	 */
	public MyBasket_Page removeItemFromBasket(String stockNumber){
		simpleUserAction(getLocator(removeItemFromBasketHyperLinkGenericXPath.replaceAll("#CAPTION#", stockNumber), BY_TYPE.XPATH), UA_TYPE.CLICK, null, ()->addExplicitWait(removeItemContinue, "clickable", 20));
		simpleUserAction(removeItemContinue, UA_TYPE.CLICK, null, ()-> delay(3000));
		return this;
	}
	
	
	/**
	 * This method validates if the product with the given stockNumber is present in the basket.
	 * If it is not present, it throws exception.
	 * 
	 * @param stockNumber
	 * @return
	 */
	public MyBasket_Page validateProductAddedToBasket(String stockNumber){
		
		if(!(softTextCheck(stockNumber))){
        	throw new RuntimeException("The expected product with stock number : " + stockNumber +" is not found in the basket. Validation failed!");
        }
		
		return this;
	}
	
	
	
	public MyBasket_Page validateProductNotAddedToBasket(String stockNumber){
		
		setImplicitlyWait(3);
		
		if((softTextCheck(stockNumber))){
			setImplicitlyWait(60);
        	throw new RuntimeException("The expected product with stock number : " + stockNumber +" is found in the basket. Validation failed!");
        }
		
		setImplicitlyWait(60);
		
		return this;
	}

}
