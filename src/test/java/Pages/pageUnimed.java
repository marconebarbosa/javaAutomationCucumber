package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class pageUnimed {

    WebDriver driver;

    WebElement menuPrincipal = driver.findElement(By.id("menuPrincipal"));
    WebElement BuscaDetalhada = driver.findElement(By.id("busca_detalhada"));
    WebElement Unidade = driver.findElement(By.className("form-escolher-unimed-gm"));


    public void clickGuiaMedico() {

    }
}


