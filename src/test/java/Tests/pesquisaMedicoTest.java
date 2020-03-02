package Tests;

import org.openqa.selenium.WebDriver;
import Pages.pageUnimed;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class pesquisaMedicoTest extends PreConfiguracoes {

    WebDriver driver;
    pageUnimed page = new pageUnimed();

    public void acessaSite(String url) {
        driver.get(url);
    }

    public void clicaGuiaMedico(){
        page.clickGuiaMedico();
    }


}
