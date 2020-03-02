package Tests;

import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;

public class PreConfiguracoes {

    @Test
    @BeforeClass
    public static void inicializacao(){

       System.setProperty("webdriver.chrome.driver","test/resource/drivers/chromedriver.exe");

        WebDriver	driver	=	new	ChromeDriver();
        driver.manage().window().maximize();

    }


}
