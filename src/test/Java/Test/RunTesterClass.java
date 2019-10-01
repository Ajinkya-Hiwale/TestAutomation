package Test;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/Java/Features", ////the path of the feature files
glue = {"stepDefinitions" }, //path of stepdefinition
format = { "pretty","html:target/cucumber-html-report","json:target/cucumber.json"}, //to generate reports
monochrome = true, //display the console output in a proper readable format
strict = true, //it will check if any step is not defined in step definition file
dryRun = false,tags= {"@TestFeature"}
) //to check the mapping is proper between feature file and step def fil

public class RunTesterClass {

}

