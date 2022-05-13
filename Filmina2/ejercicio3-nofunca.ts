let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0].dato;
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  console.log("el dato ingresado es", dato.value);
});

rotulo.InnerHTML = "Ingrese un dato:";
