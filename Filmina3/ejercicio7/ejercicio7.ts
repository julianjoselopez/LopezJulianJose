let unidad = document.forms[0].cantidad;
let valor = document.forms[0].precio;
let mes1 = document.forms[0].mes;


cant.innerHTML = "Ingrese la cantidad:";
prec.innerHTML = "Ingrese el precio:";
mes.innerHTML = "Ingrese el mes:";

btnEnviar.addEventListener("click", () => {
    let cantidad: number = Number(unidad.value);
    let precio: number = Number(valor.value);
    let total: number = 0;
    let descuento: number =0;
    let aPagar: number =0;
    let mes: string = mes1.value;
    total = precio * cantidad;
    
    if (mes == "octubre") {
        descuento = total * .15;
        aPagar = total - descuento;
        console.log("Por haber comprado en octubre que es nuestro mes aniversario tenes un 15 % de descuento");
        console.log("el monto total de su compra es" total);
        console.log("su descuento es " descuento);
        console.log("usted abonará" aPagar);
      } else {
        console.log("el monto total de su compra es" total);
      }
    } 
  });
