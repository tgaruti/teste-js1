var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {

  paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;

  if(!validaDados(peso, altura)) {
      paciente.querySelector(".info-imc").textContent = "Dado inválido!";
      paciente.classList.add("paciente-invalido");
  } else {
    paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);
  }
}

function calculaImc (peso, altura){
  var imc = 0;
  imc= peso / (altura*altura);
  return imc.toFixed(2);
}

function validaDados(peso, altura){
  if(peso <= 0 || peso >= 1000 || altura <= 0 || altura >= 3) {
    return false;
  } else {
    return true;
  }
}
