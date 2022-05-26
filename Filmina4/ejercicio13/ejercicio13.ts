let numDados = document.forms[0].dato1;
let probabilidad: number;

dados.innerHTML = "Ingrese la cantidad de dados:";

btnEnviar.addEventListener("click", () => {
  let cantDados: number = Number(numDados.value);
  probabilidad = 100 / (cantDados*6);
  console.log(" usted tiene " probabilidad "% de probabilidades de ganar, mejor empiece a trabajar");
});
