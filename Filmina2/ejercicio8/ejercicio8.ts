preciodegondola.innerHTML = "Ingrese el precio:";
let precioDeLista = document.forms[0].precio;

btnEnviar.addEventListener("click", () => {
  let precioLista: number = precioDeLista.value;
  let descuento: number = precioLista * 0.1;
  let precioFinal: number = precioLista * 0.9;
  console.log("el precio de lista es ", precioLista);
  console.log("el descuento es ", descuento);
  console.log("el cliente abonarĂ¡ ", precioFinal);
});
