package stepDefinitions;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import com.google.j2objc.annotations.Property;

public class TestBase {
	
	
	public static String propertyfile="src/main/java/TestData.properties";
	public File src;
	public FileInputStream fis;
	public static Properties prop;
	
	public TestBase() throws IOException
	{
		 src=new File(propertyfile);
		 fis=new FileInputStream(src);
		 prop=new Properties();
		 
		 prop.load(fis);
		 
		 	 
	}
	
	public static String getPropertyValue(String key)
	{
		return prop.getProperty(key);
	}

}
