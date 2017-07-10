package utils;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriverException;

import wrappers.GenericWrapper;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;


/**
 * Reporter class which takes care of Extent reports
 * 
 * @author Thiru
 *
 */
public class Reporter extends GenericWrapper{
	
	private static ExtentTest test;
	private static ExtentReports extent;

	public static void reportStep(String desc, String status) {
		
		
		long number = (long) Math.floor(Math.random() * 900000000L) + 10000000L;
		String path="./src/test/resources/reports/extentReports/images/"+number+".png";
        try {
			FileUtils.copyFile(driver.getScreenshotAs(OutputType.FILE) , new File(path));
		} catch (WebDriverException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		// Write if it is successful or failure or information
		if(status.toUpperCase().equals("PASS")){
			test.log(LogStatus.PASS, desc+test.addScreenCapture("./images/"+number+".png"));
		}else if(status.toUpperCase().equals("FAIL")){
			test.log(LogStatus.FAIL, desc+test.addScreenCapture("./images/"+number+".png"));
			throw new RuntimeException("FAILED");
		}else if(status.toUpperCase().equals("INFO")){
			test.log(LogStatus.INFO, desc);
		}
	}

	
	/**
	 * Starts a new report in non-overwrite mode
	 */
	public static void startResult(String reportName){
		extent = new ExtentReports("./src/test/resources/reports/extentReports/"+reportName+".html", true);
		extent.loadConfig(new File("./src/test/resources/extent-config.xml"));
	}
	
	/**
	 * Starts a new test case with the given testCaseName and testDescription
	 * @param testCaseName
	 * @param testDescription
	 */
	public static void startTestCase(String testCaseName, String testDescription){
		test = extent.startTest(testCaseName, testDescription);
	}

	/**
	 * Ends a test report.
	 */
	public static void endResult(){
		extent.endTest(test);
		extent.flush();
	}


}
