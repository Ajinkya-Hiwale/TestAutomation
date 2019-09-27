package stepDefinitions;

import java.util.concurrent.TimeUnit;
/*  @Webdriver used to perform operation on browser
 * 
 *  @setup method will get executed before each test case 
 *  it will set the driver,maximize the windows browser and set implicit wait
 * 
 * @After execute after end of of each test case
 * 
 */


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Hooks {

	public static WebDriver driver;

	@Before
	public void setUP() {
		System.out.println("launching chrome Browser");
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "\\src\\main\\java\\driver\\chromedriver.exe");
		//System.setProperty("webdriver.chrome.driver", "C:/Program Files/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	@After
	public void tearDown() {
		System.out.println("Closing the browser");
		driver.quit();
	}

}
