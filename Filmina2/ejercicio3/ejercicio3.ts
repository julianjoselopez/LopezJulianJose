let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0].dato;
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  console.log("el dato ingresado es", dato.value);
});
rotulo.innerHTML = "Ingrese un dato:";

// hice uno fuera de este repositorio y funciona lo mas bien
// no se porque aca no funciona
