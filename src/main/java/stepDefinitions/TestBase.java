package stepDefinitions;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.google.j2objc.annotations.Property;

public class TestBase {
	
	public static WebDriver driver;
	public static String propertyfile="src/main/java/TestData.properties";
	public File src;
	public FileInputStream fis;
	public static Properties prop;
	public static  DesiredCapabilities capabilities;
	private static Logger Log = Logger.getLogger(TestBase.class.getName());//
	
	public TestBase() throws IOException
	{
		 src=new File(propertyfile);
		 fis=new FileInputStream(src);
		 prop=new Properties();
		 
		 prop.load(fis);
		 
		 	 
	}
	
	//method to pass diff capabilities
	public static void getDriver()
	{
		capabilities=new DesiredCapabilities();
		String browser=System.getProperty("browser");
		String version=System.getProperty("version");
		String platform=System.getProperty("platform");
		if(browser.equals("chrome")|| browser.equals(null)||browser.equals("")||browser.equals(" "))
		{
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "\\src\\main\\java\\driver\\chromedriver.exe");
			capabilities.setCapability(CapabilityType.VERSION, version);
			capabilities.setCapability(CapabilityType.PLATFORM,platform );
		
				
				
			
			//System.setProperty("webdriver.chrome.driver", "C:/Program Files/chromedriver.exe");
			driver = new ChromeDriver(capabilities);
			
			Log.info("Browser info "+browser+ "Verison info "+capabilities.getVersion() +"Platform is "+capabilities.getPlatform());
			System.out.println("Browser is "+browser+ " Verison is "+capabilities.getVersion() +"Platform is "+capabilities.getPlatform());
		}
		else
			if(browser.equals("ff"))
			{
				System.setProperty("webdriver.gecko.driver",
						System.getProperty("user.dir") + "\\src\\main\\java\\driver\\geckodriver.exe");
				capabilities.setCapability(CapabilityType.VERSION, version);
				capabilities.setCapability(CapabilityType.PLATFORM,platform );
				
				System.out.println("Browser is "+browser+ " Verison is "+capabilities.getVersion() +"Platform is "+capabilities.getPlatform());				driver = new FirefoxDriver(capabilities);
				Log.info("Browser is "+browser+ "Verison is "+capabilities.getVersion() +"Platform is "+capabilities.getPlatform());
			}
		driver.manage().window().maximize();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
		
	}
	
	
	//method to pass chrome as browser name from jenkins
	
//	public static void getDriver()
//	{
//	
//		//to get value from property file
//		//if(prop.getProperty("browser").equals("chrome"))  
//			
//		
//		//to get value from jenkins or maven
//		String browser=System.getProperty("browser");
//			if(browser.equals("chrome"))
//			
//		{
//			System.setProperty("webdriver.chrome.driver",
//					System.getProperty("user.dir") + "\\src\\main\\java\\driver\\chromedriver.exe");
//			//System.setProperty("webdriver.chrome.driver", "C:/Program Files/chromedriver.exe");
//			driver = new ChromeDriver();
//		}
//		else
//			if(browser.equals("ff"))
//			{
//				System.setProperty("webdriver.gecko.driver",
//						System.getProperty("user.dir") + "\\src\\main\\java\\driver\\geckodriver.exe");
//				//System.setProperty("webdriver.chrome.driver", "C:/Program Files/chromedriver.exe");
//				driver = new FirefoxDriver();
//			}
//		driver.manage().window().maximize();
//		
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//	
//		
//	}
//	
	public static String getPropertyValue(String key)
	{
		return prop.getProperty(key);
	}

}
