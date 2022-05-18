let unidad = document.forms[0].dato1;
let valor = document.forms[0].dato2;

cant.innerHTML = "Ingrese la cantidad:";
prec.innerHTML = "Ingrese el precio:";

btnEnviar.addEventListener("click", () => {
  let cantidad: number = Number(unidad.value);
  let precio: number = Number(valor.value);
  let subtotal: number = cantidad * precio;

  if (subtotal > 1000) {
      let descuento: number = subtotal * .1;
      precioFinal = subtotal - descuento;
      console.log("por gastar mas de $1000 tiene un 10% de descuento")
      console.log("el monto a pagar es " precioFinal);
  } else {
      let precioFinal: number = subtotal;
      console.log("No tiene descuento, el monto a pagar es "  precioFinal);
      console.log("Si quiere aprovechar el descuento la compra debe superar $ 1000");
  } 
});
