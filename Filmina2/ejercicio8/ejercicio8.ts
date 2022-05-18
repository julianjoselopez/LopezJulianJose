preciodegondola.innerHTML = "Ingrese el precio:";
let btnEnv = document.getElementById("btnEnviar");
let precioDeLista = document.forms[0].precio;

btnEnv.addEventListener("click", () => {
  let precioLista: number = precioDeLista.value;
  let precioFinal: number = precioLista * 0.9;
  console.log("el precio con descuento es ", precioFinal);
});
