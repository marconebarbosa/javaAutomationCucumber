package StepDefinition;


import cucumber.api.java.en.*;
import Tests.pesquisaMedicoTest;


public class pesquisaMedico {

    pesquisaMedicoTest test = new pesquisaMedicoTest();


    @Given("^que o usuário acessou o site \"([^\"]*)\"$")
    public void que_o_usuário_acessou_o_site(String site) throws Throwable {

        test.acessaSite(site);

    }

}
