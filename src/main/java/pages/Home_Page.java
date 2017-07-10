package pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.UA_TYPE;
import wrappers.GenericWrapper;

/**
 * Page class for the page : Home_Page
 * All the user actions to be performed on this page is created as reusable methods which will act on a repository of objects on this page. 
 * 
 * @author Thiru
 */
public class Home_Page extends GenericWrapper {
	
	final static Logger logger = Logger.getLogger(Home_Page.class);
	private String pageHeader = "Log In";
	
	@CacheLookup
	@FindBy(how = How.ID, using = "searchTerm")
    private WebElement searchTextBox;
	
	@CacheLookup
	@FindBy(how = How.ID, using = "btnSearch")
    private WebElement searchButton;


	/**
	 * Constructor which will initialize page factory with the driver and performs basic validation of the page.
	 * Incase if the validation is failed, it will throw exception.
	 */
	public Home_Page(){
		
		PageFactory.initElements(driver, this);
		
		if(!(softTextCheck(pageHeader))){
			logger.fatal("The expected page header : " + pageHeader + " not found on the current page. This is NOT HomePage!");
        	throw new RuntimeException("The expected page header : " + pageHeader + " not found on the current page. This is NOT HomePage!");
        } 
		
		logger.info("Home_Page() constructor passed.");
	}
	

	/**
	 * This method searches the given searchKeyword. Usually a product.
	 * 
	 * @param searchKeyword
	 * @return
	 */
	public SearchResult_Page searchProduct(String searchKeyword){
	
		try {
			simpleUserAction(searchTextBox, UA_TYPE.CLICK_AND_TYPE, searchKeyword);
			simpleUserAction(searchButton, UA_TYPE.CLICK, null);
		} catch (Exception e) {
			logger.fatal("Search product on Home Page failed!");
        	throw new RuntimeException("Search product on Home Page failed!");
		}
		
		logger.info("searchProduct in HomePage passed.");
		return new SearchResult_Page();
	}
	
}
