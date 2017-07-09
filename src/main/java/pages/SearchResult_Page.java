package pages;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.google.common.collect.Ordering;

import utils.BY_TYPE;
import utils.ORDER;
import utils.UA_TYPE;
import wrappers.GenericWrapper;
/**
 * Page class for the page : SearchResult_Page
 * All the user actions to be performed on this page is created as reusable methods which will act on a repository of objects on this page. 
 * 
 * @author Thiru
 */
public class SearchResult_Page extends GenericWrapper {
	
	private String pageHeader1 = "Matches";
	private String pageHeader2 = "Filters";
	private String filterNameGenericXPath = ".//div[@class='filters']//a[text()[contains(.,'#CAPTION#')]]";
	private String filterOptionCheckBoxGenericXPath = ".//div[@class='filters']//a[text()[contains(.,'#CAPTION1#')]]/following-sibling::div[1]//span[contains(text(),'#CAPTION2#')]/preceding-sibling::input[1]";
	private String filterOptionNoOfRecordsGenericXPath = ".//div[@class='filters']//a[text()[contains(.,'#CAPTION1#')]]/following-sibling::div[1]//span[contains(text(),'#CAPTION2#')]/following-sibling::span[1]";
	private String resultsPerPageDropDownOptionGenericXPath = ".//ul[contains(@class,'dropdown-menu')]//a[contains(text(),'#CAPTION#')]";
	private String addProductButtonGenericXPath = ".//a[contains(text(),'#CAPTION#')]//following::button[1]";
	private String quantityTextBoxGenericXPath = ".//a[contains(text(),'#CAPTION#')]//following::input[1]";

		
	@FindBy(how = How.XPATH, using = ".//div[@id='P_breakPrice1']/button[@title='Sort ascending']")
    private WebElement sortPriceAscendingButton;
	
	@FindBy(how = How.XPATH, using = ".//div[@id='P_breakPrice1']/button[@title='Sort descending']")
    private WebElement sortPriceDescendingButton;
	
	@FindAll(@FindBy(how = How.XPATH, using = ".//table[@id='results-table']//tr"))
    private List<WebElement> currentPageRecords;
	
	@FindAll(@FindBy(how = How.XPATH, using = ".//table[@id='results-table']//tr//td[@class='priceCol']/div[1]/span"))
    private List<WebElement> currentPageRecordsPriceTags;
	
	@FindBy(how = How.XPATH, using = ".//button[contains(text(),'Apply filters')]")
    private WebElement applyFiltersButton;
	
	@FindBy(how = How.XPATH, using = ".//div[contains(text(),'Viewing ')]")
	private WebElement searchResultsHeader;
	
	@FindAll(@FindBy(how = How.XPATH, using = ".//ul[contains(@class,'pagination')]/li[contains(@ng-repeat,'page in pagination')]"))
    private List<WebElement> pageNumberButtons;
	
	@FindBy(how = How.ID, using = "split-button")
	private WebElement resultsPerPageSelectedValue;
	
	@FindBy(how = How.XPATH, using = ".//button[@type='button' and contains(@class,'dropdown-toggle')]")
	private WebElement resultsPerPageDropDownButton;
	
	@FindBy(how = How.XPATH, using = ".//*[contains(text(),'Remove all')]")
	private WebElement removeAllFiltersHyperLink;

	@FindBy(how = How.XPATH, using = ".//a[contains(@class,'paginationIcon lastPage')]")
	private WebElement lastPageIcon;
	
	@FindBy(how = How.XPATH, using = ".//a[contains(@class,'paginationIcon firstPage')]")
	private WebElement firstPageIcon;
	
	@FindBy(how = How.XPATH, using = ".//a[contains(@class,'paginationIcon nextPage')]")
	private WebElement nextPageIcon;
	
	@FindBy(how = How.CSS, using = ".pageNumber.currentPage")
	private WebElement currentPageNumber;
	
	@FindAll(@FindBy(how = How.XPATH, using = ".//span[@class='brand-label']/following-sibling::a[1]"))
	private List<WebElement> currentPageRecordsBrand;
	
	@FindBy(how = How.XPATH, using = ".//span[@class='appliedFilter' and contains(text(),'Brand')]/following::div[@class='appliedAttribute']")
	private WebElement appliedFilterBrand;
	
	@FindAll(@FindBy(how = How.XPATH, using = ".//span[@class='stock-no-label']/following::a[1]"))
	private List<WebElement> currentPageStockNumbers;
	
	@FindBy(how = How.ID, using = "ajaxLoader")
	private WebElement addToBasketAjaxLoader;
	
	@FindBy(how = How.ID, using = "miniBasketId")
	private WebElement basket;
	
	
	
	/**
	 * Constructor which will initialize page factory with the driver and performs basic validation of the page.
	 * Incase if the validation is failed, it will throw exception.
	 */
	public SearchResult_Page(){
		
		PageFactory.initElements(driver, this);
		
		addExplicitWait(applyFiltersButton, "visible", 30);
		
		if(!(softTextCheck(pageHeader1) && softTextCheck(pageHeader2))){
        	throw new RuntimeException("The expected page headers : " + pageHeader1 + "/"+pageHeader2+" not found on the current page. This is NOT Search Result Page!");
        }
	}
	
	

	/**
	 * This method sorts the search results by price in the given order. Order may be ascending or descending.
	 * @param order
	 * @return
	 */
	public SearchResult_Page sortResultByPrice(ORDER order){
		
		if(order == ORDER.ASCENDING){
			simpleUserAction(sortPriceAscendingButton, UA_TYPE.CLICK, null);
		}else{
			simpleUserAction(sortPriceDescendingButton, UA_TYPE.CLICK, null);
		}
	
		return this;
	}
	
	

	/**
	 * This method validates the results in the page whether they are sorted in the given order.
	 * Internally, it collects the price information in the first page and then checks whether they are sorted in the given order.
	 * 
	 * @param order
	 * @return
	 */
	public SearchResult_Page validateProductPriceSortedOrder(ORDER order){
		
		goToFirstPage();
		
		List<Float> prices = getProductPrices();
		
		if(order == ORDER.ASCENDING){
			if(!Ordering.natural().isOrdered(prices)){
				throw new RuntimeException("The products are not sorted in ascending order. Sorting FAILED!");
			}
		}else{
			if(!Ordering.natural().reverse().isOrdered(prices)){
				throw new RuntimeException("The products are not sorted in descending order. Sorting FAILED!");
			}
		}
		
		return this;
	}
	
	
		

	/**
	 * This is a private method which is used to get the price information of all the result records in the current page in the same order.
	 * It returns a List of Float values.
	 * 
	 * @return
	 */
	private List<Float> getProductPrices(){
		
		delay(500);
		List<Float> prices = new ArrayList<Float>();
		
		try{
			for (WebElement priceTag : currentPageRecordsPriceTags){

				String priceText = priceTag.getText().substring(1).replaceAll("[,]", "");
				Float priceFloat = Float.parseFloat(priceText);
				prices.add(priceFloat);
			}
		}catch(StaleElementReferenceException e){
			delay(1000);
			prices.clear();
			for (WebElement priceTag : currentPageRecordsPriceTags){
				
				String priceText = priceTag.getText().substring(1).replaceAll("[,]", "");
				Float priceFloat = Float.parseFloat(priceText);
				prices.add(priceFloat);
			}
		}
		
		return prices;
	}
	
	

	/**
	 * This method applies the given filterName for the given filterOption.
	 * E.g : filterName - Brand, filterOption : Molex
	 * The filterName and filterOption should be passed exactly as how it appears on the GUI.
	 * This method also saves the number of records to be filtered in the runContext with the key : noOfRecordsFiltered
	 * 
	 * @param filterName
	 * @param filterOption
	 * @return
	 */
	public SearchResult_Page applyFilter(String filterName, String filterOption){
		
		simpleUserAction(getLocator(filterNameGenericXPath.replaceAll("#CAPTION#", filterName), BY_TYPE.XPATH), UA_TYPE.CLICK, null);
		String noOfRecords = getText(getLocator(filterOptionNoOfRecordsGenericXPath.replaceAll("#CAPTION1#", filterName).replaceAll("#CAPTION2#", filterOption), BY_TYPE.XPATH)).replaceAll("[(]", "").replaceAll("[)]", "");
		addToRunContext("noOfRecordsFiltered", noOfRecords);
		simpleUserAction(getLocator(filterOptionCheckBoxGenericXPath.replaceAll("#CAPTION1#", filterName).replaceAll("#CAPTION2#", filterOption), BY_TYPE.XPATH), UA_TYPE.CLICK, null);
		simpleUserAction(applyFiltersButton, UA_TYPE.CLICK, null, ()->addExplicitWait(removeAllFiltersHyperLink, "visible", 30));
		return this;
	}
	
	
	
	/**
	 * This method validates the applied filter by the result count.
	 * It counts the total number of records filtered and checks if it is equal to the runContextData(noOfRecordsFiltered)
	 * It derives the number of records from search result header(E.g : Viewing 1 - 20 of 111 products) and checks if it is equal to the runContextData(noOfRecordsFiltered)
	 * If any of the condition fails, this method will throw exception stating the validation has failed.
	 * 
	 * @return
	 */
	public SearchResult_Page validateAppliedFilterByResultCount(){
		
		goToFirstPage();
		
		int noOfPages = pageNumberButtons.size();
		int noOfResultsPerPage = Integer.parseInt(resultsPerPageSelectedValue.getText());
		int totalRecordsCounted = 0;
		
		if(noOfPages>1){
		simpleUserAction(lastPageIcon, UA_TYPE.CLICK, null, ()->addExplicitWaitForAttributeValue(lastPageIcon, "class", "paginationIcon lastPage disabled", 30));
		totalRecordsCounted = noOfResultsPerPage * (Integer.parseInt(currentPageNumber.getText())-1);
		}
		
		totalRecordsCounted += currentPageRecords.size();

		if(Integer.parseInt(getFromRunContext("noOfRecordsFiltered")) != totalRecordsCounted){
			System.out.println("totalRecordsCounted : "+totalRecordsCounted);
			System.out.println("getFromRunContext(noOfRecordsFiltered) : "+getFromRunContext("noOfRecordsFiltered"));
			throw new RuntimeException("The number of records found is not equal to the last filter result count. Last applied filter FAILED!");
		}
		
		String headerText = searchResultsHeader.getText().replaceAll(" products", "");
		String noR = headerText.substring(headerText.indexOf("of")+3);
		int noOfRecordsInHeader = Integer.parseInt(noR);
		
		if(Integer.parseInt(getFromRunContext("noOfRecordsFiltered")) != noOfRecordsInHeader){
			System.out.println("noOfRecordsInHeader : "+noOfRecordsInHeader);
			System.out.println("getFromRunContext(noOfRecordsFiltered) : "+getFromRunContext("noOfRecordsFiltered"));
			throw new RuntimeException("The number of records found in the search header is not equal to the last filter result count. Last applied filter FAILED!");
		}
		
		return this;
	}
	
	
	/** 
	 * This method validates whether all the results filtered are in the same brand as that of the filter is applied for.
	 * It also validates the total record count to match with the filter applied.
	 * Incase if any of the validation fails, this method will throw exception.
	 * 
	 * @return
	 */
	public SearchResult_Page validateAppliedFilterByBrand(String brandName){
		
		goToFirstPage();
		int totalRecordsCounted = 0;
		
		do{
			if(totalRecordsCounted != 0){
				simpleUserAction(nextPageIcon, UA_TYPE.CLICK, null);
				delay(1000);
			}
			
			for (WebElement brand : currentPageRecordsBrand) {
				
				String currentRecordBrand = brand.getText();
				if(!currentRecordBrand.equalsIgnoreCase(brandName)){
					System.out.println("Current record Brand : "+currentRecordBrand);
					System.out.println("FilterBrand Brand : "+brandName);
					throw new RuntimeException("Search results contain brands other than the one filtered. Filter by brand FAILED!");
				}
				totalRecordsCounted++;
			}
		}while(!getAttribute(nextPageIcon, "class").contains("disabled"));

		
		if(totalRecordsCounted != Integer.parseInt(getFromRunContext("noOfRecordsFiltered"))){
			System.out.println("totalRecordsCounted : "+totalRecordsCounted);
			System.out.println("getFromRunContext(noOfRecordsFiltered) : "+getFromRunContext("noOfRecordsFiltered"));
			throw new RuntimeException("The Brand matches but the number of records found is not equal to the last filter result count. Filter by brand FAILED!");
		}
		
		return this;
	}
	
	
	

	/**
	 * Private method which arrives at the first pagge.
	 */
	private void goToFirstPage(){
		if(!getText(firstPageIcon).contains("disabled")){
			simpleUserAction(firstPageIcon, UA_TYPE.CLICK, null, ()->addExplicitWaitForAttributeValue(firstPageIcon, "class", "paginationIcon firstPage disabled", 30));
		}
	}
	
	
	
	/**
	 * This method sets the given count as the Results per Page
	 * 
	 * @param count
	 * @return
	 */
	public SearchResult_Page setResultsPerPage(String count){
		
		simpleUserAction(resultsPerPageDropDownButton, UA_TYPE.CLICK, null);
		delay(500);
		simpleUserAction(getLocator(resultsPerPageDropDownOptionGenericXPath.replaceAll("#CAPTION#", count), BY_TYPE.XPATH), UA_TYPE.CLICK, null, ()->addExplicitWaitForTextValue(resultsPerPageSelectedValue, count, 30));
		return this;
	}
	
	
	
	/**
	 * This method validates the results per page.
	 * 
	 * @return
	 */
	public SearchResult_Page validateResultsPerPage(String count){
		
		goToFirstPage();
		
		String resultsPerPageCount = getText(resultsPerPageSelectedValue);
		String recordsCount = String.valueOf(currentPageRecords.size());

		
		if((!(count.equalsIgnoreCase(resultsPerPageCount))) || (!(count.equalsIgnoreCase(recordsCount)))){
			
			System.out.println("count : "+count);
			System.out.println("resultsPerPageCount : "+resultsPerPageCount);
			System.out.println("recordsCount : "+recordsCount);
			throw new RuntimeException("Results found per page is not relevant to the value set in the Results per page dropdown.");
		}
		
		return this;
	}
	
	
	
	
	
	/**
	 * This method adds the product with the given stockNumber for given quantity to the basket.
	 * If the product is not found in the search result page, it will throw exception.
	 * 
	 * @param stockNumber
	 * @param quantity
	 * @return
	 */
	public SearchResult_Page addToBasket(String stockNumber,String quantity){
		
		goToFirstPage();
		
		int totalRecordsChecked = 0;
		boolean added = false;
		
		outer: do{
			if(totalRecordsChecked != 0){
				simpleUserAction(nextPageIcon, UA_TYPE.CLICK, null);
				delay(1000);
			}
			
			for (WebElement stockNR : currentPageStockNumbers) {
				
				String currentRecordStockNR = getText(stockNR);
				if(currentRecordStockNR.equalsIgnoreCase(stockNumber)){
					simpleUserAction(getLocator(quantityTextBoxGenericXPath.replaceAll("#CAPTION#", stockNumber), BY_TYPE.XPATH), UA_TYPE.CLICK_AND_TYPE, quantity);
					simpleUserAction(getLocator(addProductButtonGenericXPath.replaceAll("#CAPTION#", stockNumber), BY_TYPE.XPATH), UA_TYPE.CLICK, null, ()->addExplicitWaitForAttributeValue(addToBasketAjaxLoader, "style", "display: none;", 60));
					added = true;
					break outer;
				}
				totalRecordsChecked++;
			}
		}while(!getAttribute(nextPageIcon, "class").contains("disabled"));

		
		if(!added){
			throw new RuntimeException("Cannot find any product with the given stock number to add to basket!");
		}
		
		return this;
	}
	
	
	
	
	
	/**
	 * This method goes to basket from Search result page
	 * @return
	 */
	public MyBasket_Page goToMyBasket(){
		scrollTo(basket);
		simpleUserAction(basket, UA_TYPE.CLICK, null);
		return new MyBasket_Page();
	}
	
	
	
}