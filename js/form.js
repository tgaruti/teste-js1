var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //extraindo os dados do paciente do form
    var paciente = obtemPacienteForm(form);

    //validando dados
    if (!validaDados(paciente.peso, paciente.altura)){
      var mensagemErro = document.querySelector("#mensagem-erro");
      mensagemErro.textContent = "Dado(s) Inválido(s)";
      return
    }
    if (dadosEmBranco(paciente.nome, paciente.peso, paciente.altura, paciente.gordura)){
      var mensagemErro = document.querySelector("#mensagem-erro");
      mensagemErro.textContent = "Todos os dados devem ser preenchidos";
      return
    }
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = "";

    adcionaPacienteNaTabela(paciente);

    form.reset();
    });

function adcionaPacienteNaTabela(paciente){
  //criando a tr e as tds do paciente
  var pacienteTr = montaTr(paciente);
  //colocando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd (dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function dadosEmBranco (nome, peso, altura, gordura){
  if (nome.length==0 || peso.length==0 || altura.length==0 || gordura.length==0 ){
    return true;
  } else {
    return false;
  }
}
