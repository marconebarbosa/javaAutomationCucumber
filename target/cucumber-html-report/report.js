$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pesquisaMedico.feature");
formatter.feature({
  "line": 1,
  "name": "Pesquisa Medico",
  "description": "  O cliente realiza pesquisa de médicos por estado.",
  "id": "pesquisa-medico",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "que o usuário acessa o site \"https://www.unimed.coop.br\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navega para \"Guia Médico\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "valida apresentação de especialidade e cidade",
  "description": "",
  "id": "pesquisa-medico;valida-apresentação-de-especialidade-e-cidade",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "pesquisa médicos na cidade \"Rio de Janeiro\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "o sistema exibe a especialidade e a cidade",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "que o usuário acessa o site \"https://www.unimed.coop.br\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navega para \"Guia Médico\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "resultados não podem conter a cidade de \"São Paulo\"",
  "description": "",
  "id": "pesquisa-medico;resultados-não-podem-conter-a-cidade-de-\"são-paulo\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "pesquisa médicos na cidade \"Rio de Janeiro\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "o sistema não pode exibir a cidade de \"São Paulo\" nas \"3\" primeiras páginas",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});