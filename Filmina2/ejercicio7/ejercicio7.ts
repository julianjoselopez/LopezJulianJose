let btnEnv = document.getElementById("btnEnviar");
let datobase = document.forms[0].datobase;
let datoaltura = document.forms[0].datoaltura;

btnEnv.addEventListener("click", () => {
  let base: number = datobase.value;
  let altura: number = datoaltura.value;
  let area: number = base * altura;
  console.log("el area es " + area);
});
base.innerHTML = "Ingrese la base:";
altura.innerHTML = "Ingrese la altura:";
